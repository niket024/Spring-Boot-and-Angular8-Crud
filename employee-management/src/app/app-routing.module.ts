import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { SidebarDirectiveComponent } from './sidebar-directive/sidebar-directive.component';


const routes: Routes = [
  { path:'employees', component: EmployeeComponent},
  { path:'addemployee', component: AddEmployeeComponent},
  { path:'updateemployee', component: UpdateEmployeeComponent},
  { path:'sidebar', component: SidebarDirectiveComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
