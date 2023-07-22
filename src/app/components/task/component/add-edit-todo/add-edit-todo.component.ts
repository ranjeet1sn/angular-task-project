import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { Todo } from '../list/list.component';

@Component({
  selector: 'app-add-edit-todo',
  templateUrl: './add-edit-todo.component.html',
  styleUrls: ['./add-edit-todo.component.scss'],
})
export class AddEditTodoComponent implements OnInit {
  todoForm!: FormGroup;
  constructor(private commonService: CommonService) {}
  ngOnInit(): void {
    this.commonService.updateTodo$.subscribe((todo: Todo) => {
      if (Object.keys(todo).length > 0) {
        this.todoForm.patchValue({
          title: todo.title,
          description: todo.description,
          id: todo.id,
        });
      }
    });
    this.createTodoForm();
  }

  createTodoForm() {
    this.todoForm = new FormGroup({
      id: new FormControl(0),
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    this.commonService.addTodo$.next(this.todoForm.value);
    this.createTodoForm();
  }
}
