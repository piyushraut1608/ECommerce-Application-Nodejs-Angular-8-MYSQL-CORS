import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/admin/service-admin/department.service';
import { Department } from 'src/app/models/department';

@Component({
  selector: 'app-department-table',
  templateUrl: './department-table.component.html',
  styleUrls: ['./department-table.component.scss']
})
export class DepartmentTableComponent implements OnInit {
  departmentLists = null;
  //departmentList: Department[];

  currentIndex = -1;
  title = '';
  message = '';

  constructor(private departmentService: DepartmentService, 
    private route: ActivatedRoute, private router: Router) { }

  //main
  ngOnInit() {
    //this.getDepartmenstList();
    this.retrieveDepartments();
    this.getDepartmentID(this.route.snapshot.paramMap.get('department_id'));
    this.message = '';
  }


  //Get exactly item (data)
  getDepartmentID(department_id) {
    this.departmentService.get_Id(department_id)
      .subscribe(
        data => {
          this.departmentLists = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  //Get all items (data)
  retrieveDepartments() {
    this.departmentService.getAll()
      .subscribe(
        data => {
          this.departmentLists = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  //refresh list
  refreshList() {
    this.retrieveDepartments();
    this.departmentLists = null;
    this.currentIndex = -1;
  }


  setActiveDepartment(department, index) {
    this.departmentLists = department;
    this.currentIndex = index;
  }

  //delete exactly item (data)
  deleteDepartment() {
    this.departmentService.delete(this.departmentLists.department_id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/department']);
        },
        error => {
          console.log(error);
        });
  }


  //delete all data from department list
  removeAllDepartment() {
    this.departmentService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  //Get all department name
  // getDepartmenstList(){
  //   this.departmentService.getAll().subscribe(
  //     a => {
  //       this.departmentList = a as Department[];
  //     }
  //   );
  // }
}
