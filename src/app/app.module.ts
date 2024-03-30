import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatIconModule} from '@angular/material/icon';
// import {MatButtonModule} from '@angular/material/button';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
// import {MatDialogModule} from '@angular/material/dialog';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatInputModule} from '@angular/material/input';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material/core';
// import {MatRadioModule} from '@angular/material/radio';
// import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import {MatTableModule} from '@angular/material/table';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import {MatSnackBarModule} from '@angular/material/snack-bar';
// import {MatCheckboxModule} from '@angular/material/checkbox';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AngularMaterialModule } from './material/angular-material/angular-material.module';
@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,

    HeaderComponent,
    HomeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MatToolbarModule,
    // MatIconModule,
    // MatButtonModule,
    // MatDialogModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatRadioModule,
    // MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    // MatTableModule,
    // MatPaginatorModule,
    // MatSnackBarModule,
    RouterModule,
    FormsModule,
    // MatCheckboxModule
    AngularMaterialModule,
    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
