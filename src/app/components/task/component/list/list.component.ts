import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CommonService } from 'src/app/services/common.service';
import { DeleteConfirmationComponent } from 'src/app/shared/delete-confirmation/delete-confirmation.component';

export interface Todo {
  title: string;
  description: string;
  id: number;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['title', 'description', 'action'];
  list: Todo[] = [];
  dataSource = new MatTableDataSource(this.list);

  constructor(
    private commonService: CommonService,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.commonService.addTodo$.subscribe((todo: Todo) => {
      if (this.list.length > 0) {
        const matchIndex = this.list.findIndex((item) => item.id === todo.id);
        if (matchIndex > -1) {
          this.list[matchIndex] = todo;
        } else {
          this.list.push({ ...todo, id: this.list.length + 1 });
        }
      } else {
        this.list.push({ ...todo, id: this.list.length + 1 });
      }
      this.dataSource = new MatTableDataSource(this.list);
    });
  }

  deleteTodo(index: number) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
      width: '350px',
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.list.splice(index, 1);
        this.dataSource = new MatTableDataSource(this.list);
      }
    });
  }

  editTodo(todo: any) {
    this.commonService.updateTodo$.next(todo);
  }
}
