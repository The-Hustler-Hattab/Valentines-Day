import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ErrorComponent } from './components/error/error.component';
import { PartOneComponent } from './components/part-one/part-one.component';
import { PartTwoComponent } from './components/part-two/part-two.component';
import { PartThreeComponent } from './components/part-three/part-three.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"",redirectTo: "home", pathMatch: 'full'},
  {path:"about", component: AboutComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'part-one', component: PartOneComponent},
  {path: 'part-two', component: PartTwoComponent},
  {path: 'part-three', component: PartThreeComponent},
  { path: '**', redirectTo:'home'},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
