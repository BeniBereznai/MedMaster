import { Component, OnInit } from '@angular/core';
import { PatientDto } from '../models/patient-dto';
import { PatientService } from '../app/services/patient.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input'; 
import { MatNativeDateModule } from '@angular/material/core';
import { MedrecService } from '../app/services/medrec.service';
import { medrecDto } from '../models/medrec-dto';
@Component({
  selector: 'app-patient',
  standalone : true,
  imports : [ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatPaginatorModule,FormsModule,MatDatepickerModule,MatSelectModule,MatNativeDateModule],
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patientForm: FormGroup = this.formBuilder.group({});
  medrecService: any;

  constructor(private formBuilder: FormBuilder, private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      tajNumber: ['', Validators.required],
      gender: ['', Validators.required],
      medicalHistory: ['']
    });
  }

  addPatient(): void {
    if (this.patientForm.valid) {
      const patient: PatientDto = {
        id: 6,
        firstName: this.patientForm.value.firstName,
        lastName: this.patientForm.value.lastName,
        BirthDate: this.patientForm.value.birthDate,
        Taj: this.patientForm.value.tajNumber,
        Gender: this.patientForm.value.gender
      };
  

      console.log("New patient added:", patient);

      this.patientService.create(patient).subscribe({
        next: (data) => {
          console.log("New patient added:", patient);
        }
      });

      // Clear form fields after submission
      this.patientForm.reset();
    }
    
  }
  addMedrec(): void{
    if (this.patientForm.valid) {
      const medrec: medrecDto = {
        id: 6,
        Taj: this.patientForm.value.tajNumber,
        MedicalRecords: this.patientForm.value.medrec,
      };
      console.log("New patient added:", medrec);

      this.medrecService.create(medrec).subscribe({
        next: (data:medrecDto) => {
          console.log("New medrec added:", medrec);
        }
      });

      // Clear form fields after submission
      this.patientForm.reset();
    
    }
  }
}
