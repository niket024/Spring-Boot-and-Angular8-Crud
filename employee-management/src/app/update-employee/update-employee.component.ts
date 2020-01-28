import { Component, OnInit } from '@angular/core';
import { HttpClientService, Employee } from '../service/http-client.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  user: Employee = new Employee(0,"","","");

  constructor(private router: Router, private route: ActivatedRoute, private httpClientService: HttpClientService) { 
    this.route.queryParams.subscribe(params => {
      this.user.empId = params['empId'];
    });
  }

  ngOnInit() {
  }
  updateEmployee(): void {
    this.httpClientService.updateEmployee(this.user)
        .subscribe( data => {
          alert("Employee updated successfully.");
          this.router.navigate(['./employees']);
        });
  };
}
