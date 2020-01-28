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

  constructor(private httpClient: HttpClient) { }
  public getEmployees() {
    console.log("get Employee");
    return this.httpClient.get<Employee[]>('http://localhost:8080/employees');
  }
  public deleteEmployee(employee: Employee) {
    console.log("delete employee");
    return this.httpClient.delete<Employee>("http://localhost:8080/employees" + "/" + employee.empId);
  }

  public createEmployee(employee: Employee) {
    console.log("create employee");
    return this.httpClient.post<Employee>("http://localhost:8080/employees", employee);
  }
  public updateEmployee(employee: Employee) {
    console.log("update employee");
    return this.httpClient.put<Employee>("http://localhost:8080/employees", employee);
  }
}
