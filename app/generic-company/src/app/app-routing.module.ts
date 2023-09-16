import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideosComponent } from './pages/videos/videos.component';

const routes: Routes = [
  // {
  //   path: "",
  //   component: HomeComponent
  // },
  {
    path: "videos",
    component: VideosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
