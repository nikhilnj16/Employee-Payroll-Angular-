import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeService } from './services/employee.service';

import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CoreService } from './core/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 title = 'ndkj'
  // displayedColumns: string[] = ['profile', 'name', 'gender', 'department', 'salary', 'startDate', 'action'];
  // dataSource!: MatTableDataSource<any>;

  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;

  // constructor(private _dialog: MatDialog, private _empService: EmployeeService, private _coreService: CoreService ){}

  // ngOnInit(): void {
  //   this.getEmployeelist();
  // }
  // openAddEmployee(){
  //   const dialogRef = this._dialog.open(AddEmployeeComponent);
  //   dialogRef.afterClosed().subscribe({
  //     next: (val) => {
  //       if(val){
  //         this.getEmployeelist();
  //       }
  //     }
  //   })
  // }
  // getEmployeelist(){
  //   this._empService.getEmployeelist().subscribe({
  //     next: (res: any) => {
  //       this.dataSource = new MatTableDataSource(res);
  //       this.dataSource.sort = this.sort;
  //       this.dataSource.paginator = this.paginator;
  //     },
  //     error: console.log, 
  //   })
  // }
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

  // deleteEmployee(id: number){
  //   this._empService.deleteEmployee(id).subscribe({
  //     next: (res: any) => {
        
  //       this._coreService.openSnackBar('Employee deleted!', 'done');
  //       this.getEmployeelist();
  //     },
  //     error: console.log,
  //   })
  // }

  // openEditForm(data: any){
  //   const dialogRef = this._dialog.open(AddEmployeeComponent,{
  //     data,
  //   });
  //   dialogRef.afterClosed().subscribe({
  //     next: (val) => {
  //       if(val){
  //         this.getEmployeelist();
  //       }
  //     }
  //   })
  // }
}
