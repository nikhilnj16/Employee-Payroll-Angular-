import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) { }

  addEmployee(data: any){
    return this._http.post('http://localhost:8084/employeePayroll/add', data);
  }
  updateEmployee(id: number,data: any){
    return this._http.put(`http://localhost:8084/employeePayroll/update/${id}`, data);
  }

  getEmployeelist(): Observable<any>{
    return this._http.get('http://localhost:8084/employeePayroll');
  }

  deleteEmployee(id: number): Observable<any>{
    return this._http.delete(`http://localhost:8084/employeePayroll/delete/${id}`);
  }
}
