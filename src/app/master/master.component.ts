import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-master',
  imports: [ReactiveFormsModule,NgFor,NgIf],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent implements OnInit {
  masterForm!: FormGroup;
  masters: MasterModel[] = [];
  editingId: number | null = null;

  masterForOptions = ['postAppliedFor', 'designation', 'department',
     'subDepartment',
    'division',
    'category',
    'cadre',
    'costCentre',
    'rlBand',
    'shiftOption',
  'transferFrom',
'transferTo','state','district'];

  apiUrl = 'https://api.freeprojectapi.com/api/EmployeeOnboarding';

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.masterForm = this.fb.group({
      masterFor: ['', Validators.required],
      masterName: ['', Validators.required],
      parentMasterId: [null]
    });
    this.loadData();
  }

  loadData() {
    this.http.get<MasterModel[]>(`${this.apiUrl}/getAllMaster`).subscribe(res => {
      this.masters = res;
    });
  }

  onSubmit() {
    if (this.masterForm.invalid) return;

    const data = this.masterForm.value;

    if (this.editingId) {
      data.masterId = this.editingId;
      this.http.put(`${this.apiUrl}/UpdateMaster`, data).subscribe(() => {
        this.resetForm();
        this.loadData();
      },error=>{
        if(error.error.text) {
          this.resetForm();
        this.loadData();
        } else {
          alert(error.error)
        } 
      });
    } else {
      data.masterId = 0;
      this.http.post(`${this.apiUrl}/CreateNewMaster`, data).subscribe(() => {
        this.resetForm();
        this.loadData();
      },error=>{
        debugger;
        if(error.error.text) {
          this.resetForm();
        this.loadData();
        } else {
          alert(error.error)
        } 
      });
    }
  }

  edit(master: MasterModel) {
    this.masterForm.patchValue(master);
    this.editingId = master.masterId;
  }

  delete(id: number) {
    if (confirm('Are you sure to delete?')) {
      this.http.delete(`${this.apiUrl}/DeleteMasterById/${id}`).subscribe(() => {
        this.loadData();
      });
    }
  }

  resetForm() {
    this.masterForm.reset();
    this.editingId = null;
  }
}

export interface MasterModel {
  masterId: number;
  masterFor: string;
  masterName: string;
  parentMasterId: number;
}
