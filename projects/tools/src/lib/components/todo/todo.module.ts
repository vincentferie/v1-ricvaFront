import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoCardCompleteDirective } from './todo-card-complete.directive';
import { TodoListRemoveDirective } from './todo-list-remove.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TodoCardCompleteDirective,
    TodoListRemoveDirective
  ],
  exports: [
    TodoCardCompleteDirective,
    TodoListRemoveDirective
  ]
})
export class TodoModule { }
