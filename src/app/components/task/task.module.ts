import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TaskRoutingModule } from './task-routing.module';
import { ListComponent } from './component/list/list.component';
import { AddEditTodoComponent } from './component/add-edit-todo/add-edit-todo.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListComponent,
    AddEditTodoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }
