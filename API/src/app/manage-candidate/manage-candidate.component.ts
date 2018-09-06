import { Component, OnInit } from '@angular/core';
import { EmployeeService} from './manage-candidate.service';
import { ToastrService } from 'ngx-toastr';
import {Employee} from './manage-candidate.model';
@Component({
  selector: 'app-manage-candidate',
  templateUrl: './manage-candidate.component.html',
  styleUrls: []
})
export class ManageCandidateComponent implements OnInit {
  
  private toastr:ToastrService;
  constructor(public employeeService:EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployeeList();
  }
  
  showForEdit(emp:Employee){
    this.employeeService.selectedEmployee = Object.assign({}, emp);
  }

  onDelete(id:number){
    if(confirm('Are you sure to delete this record?')==true){
      this.employeeService.deleteEmployee(id)
      .subscribe(x=>{
        this.employeeService.getEmployeeList();
        this.toastr.warning("Deleted Successfully","Employee Register");
      })

    }
  }
}
