import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/admin/service-admin/department.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  department = null;
  message = '';

  constructor(
    private departmentService: DepartmentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getDepartment(this.route.snapshot.paramMap.get('department_id'));
  }

  //Get exactly item (data)
  getDepartment(department_id) {
    this.departmentService.get_Id(department_id)
      .subscribe(
        data => {
          this.department = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  //Edit item
  editDepartment() {
    this.departmentService.edit(this.department.department_id, this.department)
      .subscribe(
        response => {
          console.log(response);
          console.log('The department was updated successfully!');
          alert('The department was updated successfully!');
          this.message = 'The department was updated successfully!';
        },
        error => {
          console.log(error);
          alert('The department cannot unable to update!');
        });
  }
  
}
