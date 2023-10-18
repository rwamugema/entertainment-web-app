import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren:() => import('./modules/user.module').then(module => module.UserModule)
  },
  {
    path:'posts', loadChildren:() => import('./modules/movie.module').then(module => module.MovieModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
