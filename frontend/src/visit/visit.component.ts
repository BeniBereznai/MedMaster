import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input'; 
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { PatientDto } from '../models/patient-dto';
import { PatientService } from '../app/services/patient.service';
import { medrecDto } from '../models/medrec-dto';
import { MedrecService } from '../app/services/medrec.service';





@Component({
  selector: 'app-visit',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatPaginatorModule,FormsModule,MatDatepickerModule,MatSelectModule,MatNativeDateModule,MatPaginator],
  templateUrl: './visit.component.html',
  styleUrl: './visit.component.css'
})
export class VisitComponent implements OnInit {
  visitForm: FormGroup;
  Tajnumber = "";
  patientlist: PatientDto[] = [];
  medreclist: medrecDto[] = [];
  medrec: medrecDto | null = null;
  patient = this.patientlist[0]; 

  constructor(private formBuilder: FormBuilder, private patientService: PatientService, private medrecService: MedrecService) {
    this.visitForm = this.formBuilder.group({
      patientTaj: ['', Validators.required],
      medrecTaj: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getPatients()
    this.getMedrecs()
  }

  getPatients(): void {
    this.patientService.getAll()
      .subscribe({
        next: (data) => {
          this.patientlist = data;
        }
      });
  }
  getMedrecs(): void {
    this.medrecService.getAll()
      .subscribe({
        next: (data) => {
          this.medreclist = data;
        }
      });
  }


  getPatientByTaj() {
    console.log(this.Tajnumber);
    const control = this.visitForm.get('patientTaj');
    if (control) {
      const patientTaj = control.value;
      this.patientService.getPatientByTaj(this.Tajnumber).subscribe(patient => {
        this.patient = patient;
      });
    }
  }
  
  getMedrecByTaj() {
    const control = this.visitForm.get('medrecTaj');
    if (control) {
      const medrecTaj = control.value;
      this.medrecService.getMedrecByTaj(this.Tajnumber).subscribe(medrec => {
        this.medrec = medrec;
      });
    }
  }
  fetchData(): void {
    const patientTaj = this.visitForm.get('patientTaj');
      this.patient = this.patientlist.find(p => p.Taj === +this.Tajnumber) as PatientDto;
  }
}