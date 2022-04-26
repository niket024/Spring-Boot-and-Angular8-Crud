import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Employee {
  constructor(
    public empId: number,
    public name: string,
    public designation: string,
    public salary: string,
  ) { }
}

@Injectable({
  providedIn: 'root'
})

export class HttpClientService {
  apiUrl:string="http://localhost:7080/employees"
  constructor(private httpClient: HttpClient) { }
  public getEmployees() {
    console.log("get Employee");
    return this.httpClient.get<Employee[]>(this.apiUrl);
  }
  public deleteEmployee(employee: Employee) {
    console.log("delete employee");
    return this.httpClient.delete<Employee>(this.apiUrl+ "/" + employee.empId);
  }

  public createEmployee(employee: Employee) {
    console.log("create employee");
    return this.httpClient.post<Employee>(this.apiUrl, employee);
  }
  public updateEmployee(employee: Employee) {
    console.log("update employee");
    return this.httpClient.put<Employee>(this.apiUrl, employee);
  }
}
