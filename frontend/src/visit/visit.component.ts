import { Component, OnInit } from '@angular/core';
import { VisitDto } from '../models/visit-dto';
import { VisitService } from '../app/services/visit.service';
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
@Component({
  selector: 'app-visit',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatPaginatorModule,FormsModule,MatDatepickerModule,MatSelectModule,MatNativeDateModule],
  templateUrl: './visit.component.html',
  styleUrl: './visit.component.css'
})
export class VisitComponent implements OnInit {
  visitForm!: FormGroup;
  visit: VisitDto[] = [];
  data: VisitDto[] = [];
  constructor(private formBuilder: FormBuilder, private visitService: VisitService) { }

  ngOnInit(): void {
    this.visitForm = this.formBuilder.group({
      tajNumber: ['', Validators.required]
    });
  }

  getVisit(): void {
    if (this.visitForm.valid) {
      const tajNumber: number = this.visitForm.value.tajNumber;

      this.visitService.getVisitByTaj(tajNumber).subscribe({
        next: (data) => { // Updated to properly assign data to "visits"
          this.visit = this.data;
        },
        error: (error) => {
          console.error('Error retrieving patient data:', error);
        }
      });
    }
  }
}