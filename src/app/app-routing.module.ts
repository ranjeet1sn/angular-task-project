import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'todo',
    loadChildren:()=>import('./components/task/task.module').then(m=>m.TaskModule)
  },
  {
    path:'',
    redirectTo:'todo',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
