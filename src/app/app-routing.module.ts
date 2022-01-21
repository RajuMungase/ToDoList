import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListComponentComponent } from './to-do-list-component/to-do-list-component.component';

const routes: Routes = [
  {
    path: '',
    component:ToDoListComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
