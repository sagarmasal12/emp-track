import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-employee',
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './new-employee.component.html',
  styleUrl: './new-employee.component.css'
})
export class NewEmployeeComponent implements OnInit{

  formList: any []= 
    [
      {
        "label": "Region",
        "placeholder": "Enter region",
        "controlName": "region",
        "type": "text",
        "validation": { "required": true },
        "className": "col-3"
      },
      {
        "label": "Blood Group",
        "placeholder": "Select blood group",
        "controlName": "bloodGroup",
        "type": "select",
        "options": ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
        "validation": { "required": true },
        "className": "col-3"
      },
      {
        "label": "Shift Option",
        "placeholder": "Select shift option",
        "controlName": "shiftOption",
        "type": "radio",
        "options": ["Regular", "Rotational"],
        "validation": { "required": true },
        "className": "col-3"
      },
      {
        "label": "Identity Mark",
        "placeholder": "Enter identity mark",
        "controlName": "identityMark",
        "type": "text",
        "validation": { "required": false },
        "className": "col-3"
      },
      {
        "label": "Shift Type",
        "placeholder": "Select shift type",
        "controlName": "shiftType",
        "type": "select",
        "options": ["Morning", "Evening", "Night"],
        "validation": { "required": true },
        "className": "col-3"
      },
      
      {
        "label": "Present Address",
        "placeholder": "Enter present address",
        "controlName": "presentAddress",
        "type": "textarea",
        "rows": 3,
        "validation": { "required": true },
        "className": "col-6"
      },
      {
        "label": "Permanent Address",
        "placeholder": "Enter permanent address",
        "controlName": "permanentAddress",
        "type": "textarea",
        "rows": 3,
        "validation": { "required": true },
        "className": "col-6"
      },
      {
        "label": "Aadhar No",
        "placeholder": "Enter Aadhar number",
        "controlName": "aadharNo",
        "type": "text",
        "validation": { "required": true, "pattern": "^[0-9]{12}$" },
        "className": "col-3"
      },
      {
        "label": "PAN Card No",
        "placeholder": "Enter PAN card number",
        "controlName": "panCardNo",
        "type": "text",
        "validation": { "required": true, "pattern": "^[A-Z]{5}[0-9]{4}[A-Z]{1}$" },
        "className": "col-3"
      },
      {
        "label": "Bank Account No",
        "placeholder": "Enter bank account number",
        "controlName": "bankAccountNo",
        "type": "text",
        "validation": { "required": true },
        "className": "col-3"
      },
      {
        "label": "Bank Name",
        "placeholder": "Enter bank name",
        "controlName": "bankName",
        "type": "text",
        "validation": { "required": true },
        "className": "col-3"
      },
      {
        "label": "Bank IFSC Code",
        "placeholder": "Enter IFSC code",
        "controlName": "bankIfscCode",
        "type": "text",
        "validation": { "required": true, "pattern": "^[A-Z]{4}0[A-Z0-9]{6}$" },
        "className": "col-3"
      },
      {
        "label": "Date of Joining",
        "placeholder": "Select date of joining",
        "controlName": "dateOfJoining",
        "type": "date",
        "validation": { "required": true },
        "className": "col-3"
      },
      {
        "label": "Salary",
        "placeholder": "Enter salary",
        "controlName": "salary",
        "type": "number",
        "validation": { "required": true, "min": 0 },
        "className": "col-3"
      },
      {
        "label": "Employment Status",
        "placeholder": "Select employment status",
        "controlName": "employmentStatus",
        "type": "radio",
        "options": ["Permanent", "Contract", "Temporary"],
        "validation": { "required": true },
        "className": "col-3"
      },
      {
        "label": "Languages Known",
        "placeholder": "Enter languages",
        "controlName": "languagesKnown",
        "type": "text",
        "validation": { "required": false },
        "className": "col-3"
      },
      {
        "label": "Email",
        "placeholder": "Enter email",
        "controlName": "email",
        "type": "email",
        "validation": { "required": true, "pattern": "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$" },
        "className": "col-3"
      },
      {
        "label": "Phone 1",
        "placeholder": "Enter primary phone",
        "controlName": "phone1",
        "type": "text",
        "validation": { "required": true, "pattern": "^[0-9]{10}$" },
        "className": "col-3"
      },
      {
        "label": "Phone 2",
        "placeholder": "Enter secondary phone",
        "controlName": "phone2",
        "type": "text",
        "validation": { "required": false, "pattern": "^[0-9]{10}$" },
        "className": "col-3"
      },
      {
        "label": "Qualification",
        "placeholder": "Enter qualification",
        "controlName": "qualification",
        "type": "text",
        "validation": { "required": false },
        "className": "col-3"
      },
      {
        "label": "Relative Working in Company",
        "controlName": "relativeWorkingInCompany",
        "type": "checkbox",
        "className": "col-3"
      },
      {
        "label": "Photo Attached",
        "controlName": "photoAttached",
        "type": "checkbox",
        "className": "col-3"
      },
      {
        "label": "CTC",
        "placeholder": "Enter CTC",
        "controlName": "ctc",
        "type": "number",
        "validation": { "required": true, "min": 0 },
        "className": "col-3"
      },
      {
        "label": "Overtime Enabled",
        "controlName": "overtimeEnabled",
        "type": "checkbox",
        "className": "col-3"
      },
      {
        "label": "Transport Facility",
        "controlName": "transportFacility",
        "type": "checkbox",
        "className": "col-3"
      }
    ];

  dynamicForm!: FormGroup; 
   
  constructor(private fb: FormBuilder) {}
  
  ngOnInit(): void {
    this.dynamicForm = this.fb.group({});

    this.formList.forEach(field => {
      const validations = [];
      if (field.validation?.required) {
        validations.push(Validators.required);
      }
      if (field.validation?.pattern) {
        validations.push(Validators.pattern(field.validation.pattern));
      }
      if (field.validation?.min !== undefined) {
        validations.push(Validators.min(field.validation.min));
      }

      this.dynamicForm.addControl(field.controlName, new FormControl('', validations));
    });
    debugger;
  }

  templAteSave(form: NgForm) {
    debugger;
  }

  onReactiveSave() {
    debugger;
  }
}
