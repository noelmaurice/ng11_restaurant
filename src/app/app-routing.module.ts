import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./site/home/home.component";
import { MenuComponent } from "./site/menu/menu.component";
import { ReserveComponent } from "./site/reserve/reserve.component";
import { ContactComponent } from "./site/contact/contact.component";
import { ScheduleComponent } from './site/schedule/schedule.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'program', component: ScheduleComponent },
  { path: 'reserve', component: ReserveComponent },
  { path: 'contact', component: ContactComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
