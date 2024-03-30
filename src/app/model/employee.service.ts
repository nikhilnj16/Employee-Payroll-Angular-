import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  id!: number;
  name!: String;
  department!: String[];
  profilePic!: string;
  gender!: string;
  salary!: string;
  startDate!: Date;
  note!: string;
}
