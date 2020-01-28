import { Component, OnInit } from '@angular/core';
import { HttpClientService, Employee } from '../service/http-client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[];
  constructor(private router: Router, private httpClientService:HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getEmployees().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
  }
  handleSuccessfulResponse(response: Employee[])
  {
      this.employees=response;
  }
  deleteEmployee(employee: Employee): void {
    this.httpClientService.deleteEmployee(employee)
      .subscribe( data => {
        this.employees = this.employees.filter(u => u !== employee);
        alert("Employee deleted successfully.");
      })
  };

  updateEmployee(employee: Employee): void {
    this.router.navigate(['./updateemployee', { queryParams: { 'empId':employee.empId}}]);
  };
}
