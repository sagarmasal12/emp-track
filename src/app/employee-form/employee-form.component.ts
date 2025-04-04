import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
 
import { CommonModule } from '@angular/common';
import { Constant } from '../core/constant/constant';
import { EmployeeService } from '../core/services/employee/employee.service';

@Component({
  selector: 'app-employee-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {

  employeeForm: FormGroup;
  formConfig: any;
  formSections:any = {
    personalDetails: [
      'employeeId', 'fullName', 'motherName', 'fatherOrHusbandName', 'dateOfBirth',
      'age', 'maritalStatus', 'gender', 'nationality', 'religion', 'weight',
      'caste', 'region', 'bloodGroup', 'identityMark'
    ],
    contactInformation: [
      'presentAddress', 'permanentAddress', 'whatsappNo', 'email', 'phone1',
      'phone2', 'pincode', 'state', 'district'
    ],
    employmentDetails: [
      'postAppliedFor', 'shiftType', 'shiftOption', 'entryDate', 'payCode',
      'cardNo', 'designation', 'department', 'company', 'location',
      'subDepartment', 'category', 'cadre', 'division', 'appointmentMonths',
      'employmentStatus', 'interviewDate', 'interviewedBy', 'approvedBy',
      'dateOfJoining', 'totalExperienceYears', 'qualification',
      'technicalQualification'
    ],
    salaryDetails: [
      'salary', 'ctc', 'exgratia', 'subTotalCtc', 'salaryBonus', 'pfEmployer',
      'esiEmployer', 'lwfEmployer', 'employerLiability', 'totalDeduction',
      'attendanceIncentive', 'pfEmployee', 'esiEmployee', 'lwfEmployee',
      'actualCtc', 'fixedCtc', 'grossSalary', 'basicSalary', 'hra',
      'conveyanceAllowance', 'otherAllowance', 'medicalAllowance'
    ],
    bankDetails: [
      'bankAccountNo', 'bankName', 'bankIfscCode', 'bankBranch'
    ],
    familyInformation: ['employeeFamilyMembers'],
    experienceDetails: ['employeeExperiences']
  };
  employeeService= inject(EmployeeService);
  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({});
  }

  ngOnInit() {
    this.formConfig = Constant.formControls;
    this.initializeForm();
  }

  getControlsBySection(section: string): any[] {
    return this.formConfig.filter((control: any) => 
      this.formSections[section].includes(control.controlName)
    );
  }

  private initializeForm() {
    const formGroup: any = {};

    this.formConfig.forEach((control: any) => {
      if (control.type === 'formArray') {
        formGroup[control.controlName] = this.fb.array([]);
      } else {
        formGroup[control.controlName] = [
          control.defaultValue,
          this.getValidators(control.validations)
        ];
      }
    });

    this.employeeForm = this.fb.group(formGroup);
  }

  private getValidators(validations: any) {
    const validators = [];
    
    if (validations) {
      if (validations.required) validators.push(Validators.required);
      if (validations.minLength) validators.push(Validators.minLength(validations.minLength));
      if (validations.maxLength) validators.push(Validators.maxLength(validations.maxLength));
      if (validations.pattern) validators.push(Validators.pattern(validations.pattern));
      if (validations.email) validators.push(Validators.email);
      if (validations.min !== undefined) validators.push(Validators.min(validations.min));
      if (validations.max !== undefined) validators.push(Validators.max(validations.max));
    }

    return validators;
  }

  getFormArray(controlName: string): FormArray {
    return this.employeeForm.get(controlName) as FormArray;
  }

  addFormArrayItem(controlName: string) {
    const control = this.formConfig.find((c: any) => c.controlName === controlName);
    if (!control) return;

    const formGroup: any = {};
    control.controls.forEach((nestedControl: any) => {
      formGroup[nestedControl.controlName] = [
        nestedControl.defaultValue,
        this.getValidators(nestedControl.validations)
      ];
    });

    const formArray = this.getFormArray(controlName);
    formArray.push(this.fb.group(formGroup));
  }

  removeFormArrayItem(controlName: string, index: number) {
    const formArray = this.getFormArray(controlName);
    formArray.removeAt(index);
  }
  getInvalidControls(form: FormGroup | FormArray, parentKey: string = ''): string[] {
    let invalidControls: string[] = [];
  
    Object.keys(form.controls).forEach((key) => {
      const control = form.get(key);
      const fullKey = parentKey ? `${parentKey} -> ${key}` : key;
  
      if (control instanceof FormGroup || control instanceof FormArray) {
        // Recursively check for invalid controls inside FormGroup or FormArray
        invalidControls.push(...this.getInvalidControls(control, fullKey));
      } else if (control?.invalid) {
        invalidControls.push(fullKey);
      }
    });
  
    return invalidControls;
  }
  invalidFields:any [] = [];
  onSubmit() {
    if (this.employeeForm.valid) {
      console.log(this.employeeForm.value);
      this.employeeService.createEmployee(this.employeeForm.value).subscribe({
        next: (response) => {
          console.log('Success:', response);
          alert("Employee Create Success")
        },
        error: (err) => {
          alert(JSON.stringify(err.error))
        }
        
      });
    } else {
      this.invalidFields = this.getInvalidControls(this.employeeForm); 
      this.markFormGroupTouched(this.employeeForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      } else if (control instanceof FormArray) {
        control.controls.forEach(c => {
          if (c instanceof FormGroup) {
            this.markFormGroupTouched(c);
          } else {
            c.markAsTouched();
          }
        });
      } else {
        control.markAsTouched();
      }
    });
  }

  isFieldInvalid(controlName: string): boolean {
    const control = this.employeeForm.get(controlName);
    return control ? (control.invalid && (control.dirty || control.touched)) : false;
  }

  getErrorMessage(control: any): string {
    if (control?.errors) {
      if (control.errors['required']) return 'This field is required';
      if (control.errors['email']) return 'Invalid email address';
      if (control.errors['minlength']) return `Minimum length is ${control.errors['minlength'].requiredLength}`;
      if (control.errors['maxlength']) return `Maximum length is ${control.errors['maxlength'].requiredLength}`;
      if (control.errors['pattern']) return 'Invalid format';
      if (control.errors['min']) return `Minimum value is ${control.errors['min'].min}`;
      if (control.errors['max']) return `Maximum value is ${control.errors['max'].max}`;
    }
    return '';
  }
}
