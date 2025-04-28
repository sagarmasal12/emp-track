
import { Component, inject, OnInit } from '@angular/core';
import { formatDate, UpperCasePipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import {AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { EmployeeService } from '../core/services/employee/employee.service'; 
import { CommonModule } from '@angular/common'; 
import { AutoErrorDirective } from '../directives/auto-error.directive';
import { ActivatedRoute } from '@angular/router';
import { DatePickerModule } from 'primeng/datepicker';
@Component({
  selector: 'app-employee',
  standalone:true,
  imports: [ButtonModule,StepperModule,ReactiveFormsModule,CommonModule,DatePickerModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  personalDetail:any[]=[];
  formData:any;
  employeeService=inject(EmployeeService);
  employeeForm: FormGroup;
  step = 5;
  masterData: any;
  companyList: any []= [];
  validationErrors: string[] = [];
  editId:number = 0;
  minDate: Date | undefined;
  
  constructor(private fb: FormBuilder,private activateRoute: ActivatedRoute) {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month -1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.employeeForm = this.fb.nonNullable.group({
      personalInfo: this.fb.group({
        payCode: [''],
        aadharNo:['', [Validators.required,Validators.pattern(/^[2-9]{1}[0-9]{11}$/)]],
        cardNo:[''],
        postAppliedFor:['',Validators.required],
        designation:['',Validators.required],
        entryDate:[''],
        fullName:['',Validators.required],
        department:['',Validators.required],
        subDepartment:['',Validators.required],
        fatherOrHusbandName:['',Validators.required],
        division:['',Validators.required],
        category:['',Validators.required],
        motherName:[''],
        dateOfBirth:[''],
        age:['',Validators.required],
        maritalStatus:['',Validators.required],
        gender:['',Validators.required],
        nationality:['',Validators.required],
        religion:[''],
        caste:[''],
        region:[''],
        identityMark:[''],
        shiftType:['',Validators.required],
        shiftOption:['',Validators.required],
        weight:['',Validators.required],
        bloodGroup:['',Validators.required],
        employerLiability : [0],
        reportingDate:['',Validators.required],
        transferFrom:[''],
        transferTo:[''],
        transferDate:[''],
        appointmentMonths:[''],
        bankAccountNo:[''],
        bankName:[''],
        bankIfscCode:[''],
        bankBranch:[''],
        costCentre:['',Validators.required],
        panCardNo:['',[Validators.required, Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]$/)]],
        pfUanNo:[''],
        workerLwfNo:[''],
        cadre:['',Validators.required],
        company:['',Validators.required],
        location:[''],
        rlBand:[0,Validators.required],
      }),

      contactFamily: this.fb.group({ 
        presentAddress:['',Validators.required],
        permanentAddress:['',Validators.required],
        state:[''],
        subDivision: [''],
        district:[''],
        phone1:[''], // Starts with 6-9 and has exactly 10 digits
        whatsappNo:[''],
        pincode:[''],
        email:[''],
        employeeFamilyMembers:this.fb.array([])
      }),
      qualificationExpe: this.fb.group({
        qualification: [''],
        technicalQualification:[''],
        languagesKnown:[''],
        totalExperienceYears:[''],
        employeeExperiences:this.fb.array([]) 
      }),
      
      additionalInfo: this.fb.group({
        relativeWorkingInCompany: [true, Validators.required],
        relativeName: [''],
        relativeRelationship: [''],
        entryDate: [new Date(), Validators.required],
       
        interviewDate: ['',Validators.required],
        interviewedBy: [''],
        approvedBy: [''],
        dateOfJoining: ['', Validators.required],
        salary: [''],
        confirmDate: [''],
        employmentStatus: [''],
        individualBioData: [false],
        photoAttached: [false],
        applicationAttached: [false],
        certificatesAttached: [false],
        contractAttached: [false],
        joiningReportAttached: [false],
        nominationFormAttached: [false],
        proofOfAge: [false],
        proofName: [''],
      }),
      salaryPayroll: this.fb.group({
        transportFacility: [false],
        routeNo: [''],
        actualCtc: [''],
        basicSalary: [''],
        hra: [''],
        conveyanceAllowance: [''],
        otherAllowance: [''],
        medicalAllowance: [''],
        attendanceIncentive: [''],
        grossSalary: [''],
        pfEmployee: [''],
        esiEmployee: [''],
        lwfEmployee: [''],
        totalDeduction: [''],
        pfEmployer: [''],
        esiEmployer: [''],
        lwfEmployer: [''],
        salaryBonus: [''],
        exgratia: [''],
        subTotalCtc: [''],
        employerLiability: [0],
        employeeType: ['',Validators.required],
        wageCalculationType: ['',Validators.required],
        paymentType: ['',Validators.required],
        overtimeEnabled:[false,Validators.required],    
        ctc: [0],
        nightRate:[''],
        otRate:[''],
        foodingEnabled:[false,Validators.required],
        fixedCtc:[''],
        remarks:['']
      }),
      statutory: this.fb.group({
        esiInsuranceNo: ['',Validators.required],
        pfAccountNo:['',Validators.required],
        esiEmployerCode:[''],
        esiLocalOffice:[''],
        dispensary:[''],
        pfNominee:[''],
        pfSharePercent:[''],
        gratuityNominee:['',Validators.required],
        gratuitySharePercent:['',Validators.required],
        childrenPension:[''],
        widowPension:[''],
        perticularOfFamily:[''],
        esiNomineeForPayment:[''],
        familyMemberResidingInsuredPerson:[''],
      })
    
    }); 
  };

  onStateChange(){
    if(this.employeeForm &&  this.employeeForm.controls['contactFamily']) {
      const state =  this.employeeForm.controls['contactFamily'] as FormGroup;
    
      if( state.controls['state']) {
        const stateVal = state.controls['state'].value;
        return this.masterData['district'].filter((m:any)=>m.parentMasterId == stateVal)
      } else {
        return  []
      }
      
    }
    
  }
  nextStep() {
    const currentGroup = this.getStepGroup();
    if (currentGroup.valid) {
      this.validationErrors = [];
      this.step++;
    } else {
      this.validationErrors = this.getValidationErrors(currentGroup);
      currentGroup.markAllAsTouched();
    }
  }

  

  loadMaster( ){
    this.employeeService.getMasterData().subscribe({
      next: (response) => {
       this.masterData =  response
      },
      error: (err) => {
        alert(JSON.stringify(err.error))
      }
      
    });
  }
  GetCompanies( ){
    this.employeeService.GetCompanies().subscribe({
      next: (response) => {
       this.companyList =  response
      },
      error: (err) => {
        alert(JSON.stringify(err.error))
      }
      
    });
  }
  
  

  prevStep() {
    if (this.step > 1) this.step--;
  }

  getStepGroup(): FormGroup {
    switch (this.step) {
      case 1: return this.employeeForm.get('personalInfo') as FormGroup;
      case 2: return this.employeeForm.get('contactFamily') as FormGroup;
      case 3: return this.employeeForm.get('qualificationExpe') as FormGroup;
      case 4: return this.employeeForm.get('additionalInfo') as FormGroup;
      case 5: return this.employeeForm.get('salaryPayroll') as FormGroup;
      case 6: return this.employeeForm.get('statutory') as FormGroup;
      default: return this.employeeForm;
    }
  }

  getValidationErrors(group: FormGroup): string[] {
    const errors: string[] = [];
    Object.keys(group.controls).forEach(key => {
      const control = group.get(key);
      if (control && control.invalid) {
        errors.push(`${key} is required.`);
      }
    });
    return errors;
  }

  isFieldInvalid(groupName: string, fieldName: string): boolean {
    const control = this.employeeForm.get(`${groupName}.${fieldName}`);
    return control?.invalid && control?.touched ? true : false;
  }
  get personalInfoForm(): FormGroup {
    return this.employeeForm.get('personalInfo') as FormGroup;
  }
  get contactFamilyForm():FormGroup{
    return this.employeeForm.get('contactFamily') as FormGroup;
  }
  // Getter to access FormArray
  get familyMembers(): FormArray {
    return this.employeeForm.get('contactFamily.employeeFamilyMembers') as FormArray;
  }
  get qualificationExpeForm():FormGroup{
    return this.employeeForm.get('qualificationExpe') as FormGroup;
  }
  get experienceDetails(): FormArray {
    return this.qualificationExpeForm.get('employeeExperiences') as FormArray;
  }
  get additionalInfoForm(): FormGroup {
    return this.employeeForm.get('additionalInfo') as FormGroup;
  }
  get salaryPayrollForm(): FormGroup {
    return this.employeeForm.get('salaryPayroll') as FormGroup;
  }
  get statutoryForm():FormGroup{
    return this.employeeForm.get('statutory') as FormGroup;
  }
    
 ngOnInit(): void {
  //this.disablePersonalInfoValidators();
 // this.addExperience();  // Initialize with one experience row
  this.loadMaster();
  this.GetCompanies();
  const storedData = localStorage.getItem('formData');
   if (storedData) {
    console.log('Retrieved from localStorage:', JSON.parse(storedData));
   } else {
    console.log('No data found in localStorage');
   }
  }
 
 // Method to create a new FormGroup for family member
  createFamilyMember(familyMember: any = null): FormGroup {
   return this.fb.group({
     familyMemberId: [familyMember?.familyMemberId || 0],
     employeeId: [familyMember?.employeeId || 0],
     name: [familyMember?.name || '', Validators.required],
     yearOfBirth: [familyMember?.yearOfBirth || '', Validators.required],
     relation: [familyMember?.relation || '', Validators.required]
   });
  }

  addFamilyMember() {
    console.log('Add Family Member clicked!'); 
    const familyGroup = this.createFamilyMember();
    this.familyMembers.push(familyGroup);
    
    console.log('Family Members:', this.familyMembers.value);  // Check the added members
  }
  removeFamilyMember(index: number) {
    this.familyMembers.removeAt(index);
  }

  createExperience(): FormGroup {
    return this.fb.group({
      employerName: ['', Validators.required],
      postHeld: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      reasonForLeaving: ['', Validators.required]
    });
  }

  patchExperience(data:any): FormGroup {
    return this.fb.group({
      employerName: [data.employerName, Validators.required],
      postHeld: [data.postHeld, Validators.required],
      fromDate: [ formatDate(data.fromDate,'yyyy-MM-dd','en'), Validators.required],
      toDate: [formatDate(data.toDate,'yyyy-MM-dd','en'), Validators.required],
      reasonForLeaving: [data.reasonForLeaving, Validators.required]
    });
  }

  addExperience(): void {
    this.experienceDetails.push(this.createExperience());
  }
   // Remove experience row
   removeExperience(index: number): void {
    if (this.experienceDetails.length > 1) {
      this.experienceDetails.removeAt(index);
    }
  }


 disablePersonalInfoValidators() {
   const personalInfoGroup = this.employeeForm.get('personalInfo') as FormGroup;
   const contactFamilyGroup = this.employeeForm.get('contactFamily') as FormGroup;
   const qualificationExpeGroup = this.employeeForm.get('qualificationExpe') as FormGroup;
   const additionalInfoGroup = this.employeeForm.get('additionalInfo') as FormGroup; 
   const salaryPayrollGroup = this.employeeForm.get('salaryPayroll') as FormGroup;  //  Disable Step 5
 
   if (personalInfoGroup) {
      personalInfoGroup.disable();   //  Completely disable Step 2
      console.log('Step 2 disabled');
   }
 
   if (contactFamilyGroup) {
      contactFamilyGroup.disable();  //  Completely disable Step 3
      console.log('Step 3 disabled');
   }
 
   if (qualificationExpeGroup) {
      qualificationExpeGroup.disable();  //  Optionally disable Step 3 as well
      console.log('Step 3 qualification section disabled');
   }
   if (additionalInfoGroup) {    //  Disabling Step 4
      additionalInfoGroup.disable();
      console.log('Step 4 disabled');
    }
    if (salaryPayrollGroup) {    
      salaryPayrollGroup.disable();  //  Disable Step 5
      console.log('Step 5 disabled');
    }

  }
  onSave() {
    // if (this.employeeForm.invalid) {
    //   return;
    // }
    const formData = this.employeeForm.value;
    const payload = {
      employeeId: 0,  // Default or fetch from DB if updating
      ...formData.personalInfo,
      ...formData.contactFamily,
      ...formData.qualificationExpe,
      ...formData.additionalInfo,
      ...formData.salaryPayroll,
      ...formData.statutory,
  
      employeeFamilyMembers: formData.contactFamily.employeeFamilyMembers.map((member: any) => ({
        familyMemberId: 0, // Default for new records
        employeeId: 0, // Fetch if needed
        name: member.name,
        yearOfBirth: member.yearOfBirth,
        relation: member.relation,
      })),
  
      employeeExperiences: formData.qualificationExpe.employeeExperiences.map((exp: any) => ({
        experienceId: 0, // Default
        employeeId: 0, // Fetch if needed
        employerName: exp.employerName,
        postHeld: exp.postHeld,
        fromDate: exp.fromDate,
        toDate: exp.toDate,
        reasonForLeaving: exp.reasonForLeaving,
      }))
    };
  
    console.log('Prepared Payload:', payload);
  
    this.employeeService.createEmployee(payload).subscribe({
      next: (response) => {
        console.log('Success:', response);
        alert("Employee Create Success")
      },
      error: (err) => {
        alert(JSON.stringify(err.error))
      }
      
    });
  }
  onReset() {
    this.employeeForm.reset();
    this.disablePersonalInfoValidators();
    localStorage.removeItem('formData'); // Clear localStorage if needed
  }
}
