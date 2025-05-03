import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-company',
  imports: [ReactiveFormsModule,NgFor,NgIf],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent {
  companyForm!: FormGroup;
  companies: CompanyModel[] = [];
  editingId: number | null = null;

  apiUrl = 'https://api.freeprojectapi.com/api/EmployeeOnboarding';

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.companyForm = this.fb.group({
      companyName: ['', Validators.required],
      pinCode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });

    this.loadCompanies();
  }

  loadCompanies() {
    this.http.get<CompanyModel[]>(`${this.apiUrl}/GetCompanies`).subscribe(res => {
      this.companies = res;
    });
  }

  onSubmit() {
    if (this.companyForm.invalid) return;

    const data = this.companyForm.value;

    if (this.editingId) {
      data.companyId = this.editingId;
      this.http.put(`${this.apiUrl}/PutCompany`, data).subscribe(() => {
        this.resetForm();
        this.loadCompanies();
      });
    } else {
      data.companyId = 0;
      this.http.post(`${this.apiUrl}/PostCompany`, data).subscribe(() => {
        this.resetForm();
        this.loadCompanies();
      });
    }
  }

  edit(company: CompanyModel) {
    this.companyForm.patchValue(company);
    this.editingId = company.companyId;
  }

  delete(id: number) {
    if (confirm('Are you sure to delete?')) {
      this.http.delete(`${this.apiUrl}/DeleteCompany/${id}`).subscribe(() => {
        this.loadCompanies();
      });
    }
  }

  resetForm() {
    this.companyForm.reset();
    this.editingId = null;
  }
}


export interface CompanyModel {
  companyId: number;
  companyName: string;
  pinCode: string;
  address: string;
  phone: string;
}
