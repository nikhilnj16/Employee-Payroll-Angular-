import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup,  } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../../core/core.service';
import { Router } from '@angular/router';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit {
  empForm : FormGroup;
 
  departments: Array<any> = [
    {
      id: 1,
      name: "HR",
      value: "HR",
      checked: false
    },
    {
      id: 2,
      name: "Sales",
      value: "Sales",
      checked: false
    },
    {
      id: 3,
      name: "Finance",
      value: "Finance",
      checked: false
    },
    {
      id: 4,
      name: "Engineer",
      value: "Engineer",
      checked: false
    },
    {
      id: 5,
      name: "Other",
      value: "Other",
      checked: false
    },
  ]

  salary = [
    10000,
    20000,
    30000,
    40000,
    50000,
    60000,
    70000,
    80000,
    90000,
    100000
  ]
 

  constructor(private _fb: FormBuilder,
     private _empservice: EmployeeService, 
     private router: Router,
     private _dialogRef: MatDialogRef<AddEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService ){
    this.empForm = this._fb.group({
      name : new FormControl(''),
      profilePic: new FormControl(''),
      gender: new FormControl(''),
      department: new FormControl(''),
      salary: new FormControl(''),
      startDate: new FormControl(''),
      note: new FormControl(''),
    })
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }

  oncheckboxchange(event: MatCheckboxChange){
    const department: FormArray = this.empForm.get('department') as FormArray;
    if(event.checked){
      department.push(new FormControl(event.source.value));
    } else{
      const index = department.controls.findIndex(x => x.value === event.source.value);
      department.removeAt(index);
    }
  }

  // salary: any = 300000;
  // updateSetting(event: any){
  //   this.salary = event.value;
  // }
  // formatLabel(value: any){
  //   if(value >= 1000){
  //     return Math.round(value/1000) + 'k';
  //   }
  //   return value;
  // }



  onFormSubmit(){
    if(this.empForm.valid){
      if(this.data){

        this._empservice.updateEmployee(this.data.id, this.empForm.value).subscribe({
          next: (val: any) => {
            
            this._coreService.openSnackBar('Employee detail updated!', 'ok');
            this._dialogRef.close(true);
          },
          error: (err: any) =>{
            console.error(err);
          },
        });


      } else{
      this._empservice.addEmployee(this.empForm.value).subscribe({
        next: (val: any) => {
          
          this._coreService.openSnackBar('Employee added successfully', 'done');
          this._dialogRef.close(true);
          console.log(this.empForm);
        },
        error: (err: any) =>{
          console.error(err);
        },
      });
      }
    }
  }

}
