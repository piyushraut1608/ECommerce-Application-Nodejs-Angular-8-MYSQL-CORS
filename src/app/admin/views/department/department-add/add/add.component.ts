import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/admin/service-admin/department.service';
import { Department } from 'src/app/models/department';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  departmentList: Department[];

  constructor(private departmentService: DepartmentService) { }
  
  department = {
    name: '',
    description: ''
  };
  submitted = false;

  ngOnInit() {
    console.log(this.newDepartments());
  }

  saveDepartments() {
    const data = {
      name: this.department.name,
      description: this.department.description
    };

    this.departmentService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newDepartments() {
    this.submitted = false;
    this.department = {
      name: '',
      description: '',
    };
  }

  
  

}
