
import { Component, inject, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import {AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { EmployeeService } from '../core/services/employee/employee.service'; 
import { CommonModule } from '@angular/common'; 
import { AutoErrorDirective } from '../directives/auto-error.directive';
@Component({
  selector: 'app-employee',
  standalone:true,
  imports: [ButtonModule,StepperModule,ReactiveFormsModule,CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  personalDetail:any[]=[];
  formData:any;
  employeeService=inject(EmployeeService);
  employeeForm: FormGroup;
  step = 1;
  masterData: any;
  companyList: any []= [];
  validationErrors: string[] = [];
  
  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.nonNullable.group({
      personalInfo: this.fb.group({
        payCode: ['554546484978', Validators.required],
        aadharNo:['554546484978', [Validators.required,Validators.pattern(/^[2-9]{1}[0-9]{11}$/)]],
        cardNo:['11156516',Validators.required],
        postAppliedFor:['',Validators.required],
        designation:['',Validators.required],
        entryDate:[formatDate('2024-12-05','yyyy-MM-dd','en'),Validators.required],
        fullName:['sadf',Validators.required],
        department:['',Validators.required],
        subDepartment:['',Validators.required],
        fatherOrHusbandName:['sdf',Validators.required],
        division:['',Validators.required],
        category:['',Validators.required],
        motherName:['hvhj',Validators.required],
        dateOfBirth:[formatDate('2024-12-05','yyyy-MM-dd','en'),Validators.required],
        age:['65',Validators.required],
        maritalStatus:['Unmarried',Validators.required],
        gender:['Female',Validators.required],
        nationality:['KJ',Validators.required],
        religion:['JBJH',Validators.required],
        caste:['NH',Validators.required],
        region:['HBHJ',Validators.required],
        identityMark:['HHBJ',Validators.required],
        shiftType:['',Validators.required],
        shiftOption:['G-09.00-17.30',Validators.required],
        weight:['51',Validators.required],
        bloodGroup:['A',Validators.required],
        employerLiability : [0],
        reportingDate:[formatDate('2024-12-05','yyyy-MM-dd','en'),Validators.required],
        transferFrom:['test1',Validators.required],
        transferTo:['test2',Validators.required],
        transferDate:[formatDate('2024-12-05','yyyy-MM-dd','en'),Validators.required],
        appointmentMonths:['2',Validators.required],
        bankAccountNo:['651161651',Validators.required],
        bankName:['SDF',Validators.required],
        bankIfscCode:['SDF65',Validators.required],
        bankBranch:['DSF',Validators.required],
        costCentre:['AFFLATUS',Validators.required],
        panCardNo:['HCFPM2249B',[Validators.required, Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]$/)]],
        pfUanNo:['51',Validators.required],
        workerLwfNo:['51',Validators.required],
        cadre:['WORKER',Validators.required],
        company:['GR VALUE CREATIONS',Validators.required],
        location:['PLOT NO.10,SEC-8,IMT',Validators.required],
        rlBand:[0,Validators.required],
      }),

      contactFamily: this.fb.group({ 
        presentAddress:['ASDFDSF',Validators.required],
        permanentAddress:['11',Validators.required],
        state:['11',Validators.required],
        district:['11',Validators.required],
        phone1:['91',[Validators.required]], // Starts with 6-9 and has exactly 10 digits
        whatsappNo:['11',Validators.required],
        pincode:['11',Validators.required],
        email:['ssm',Validators.required],
        employeeFamilyMembers:this.fb.array([])
      }),
      qualificationExpe: this.fb.group({
        qualification: ['11', Validators.required],
        technicalQualification:['11',Validators.required],
        languagesKnown:['11',Validators.required],
        totalExperienceYears:['11',Validators.required],
        employeeExperiences:this.fb.array([]) 
      }),
      
      additionalInfo: this.fb.group({
        relativeWorkingInCompany: [true, Validators.required],
        relativeName: ['SDF', Validators.required],
        relativeRelationship: ['SADF', Validators.required],
        entryDate: [new Date(), Validators.required],
        location: ['SADF', Validators.required],
        interviewDate: [formatDate('2024-12-05','yyyy-MM-dd','en'), Validators.required],
        interviewedBy: [formatDate('2024-12-05','yyyy-MM-dd','en'), Validators.required],
        approvedBy: ['DASF', Validators.required],
        dateOfJoining: [formatDate('2024-12-05','yyyy-MM-dd','en'), Validators.required],
        salary: ['25000', Validators.required],
        confirmDate: [formatDate('2024-12-05','yyyy-MM-dd','en'), Validators.required],
        employmentStatus: ['pass', Validators.required],
        individualBioData: [false],
        photoAttached: [false],
        applicationAttached: [false],
        certificatesAttached: [false],
        contractAttached: [false],
        joiningReportAttached: [false],
        nominationFormAttached: [false],
        proofOfAge: [false],
        proofName: ['DSAF',Validators.required],
      }),
      salaryPayroll: this.fb.group({
        transportFacility: [false],
        routeNo: ['11', Validators.required],
        actualCtc: ['11', Validators.required],
        basicSalary: ['11', Validators.required],
        hra: ['11', Validators.required],
        conveyanceAllowance: ['11', Validators.required],
        otherAllowance: ['11', Validators.required],
        medicalAllowance: ['11',Validators.required],
        attendanceIncentive: ['11',Validators.required],
        grossSalary: ['11',Validators.required],
        pfEmployee: ['11',Validators.required],
        esiEmployee: ['11',Validators.required],
        lwfEmployee: ['11',Validators.required],
        totalDeduction: ['11',Validators.required],
        pfEmployer: ['11',Validators.required],
        esiEmployer: ['11',Validators.required],
        lwfEmployer: ['11',Validators.required],
        salaryBonus: ['11',Validators.required],
        exgratia: ['11',Validators.required],
        subTotalCtc: ['11',Validators.required],
        employerLiability: ['11',Validators.required],
        employeeType: ['casual',Validators.required],
        wageCalculationType: ['11',Validators.required],
        paymentType: ['11',Validators.required],
        overtimeEnabled:[false],    
        nightRate:['11',Validators.required],
        foodingEnabled:[false],
        fixedCtc:['11',Validators.required],
        remarks:['11',Validators.required]
      }),
      statutory: this.fb.group({
        esiInsuranceNo: ['11',Validators.required],
        pfAccountNo:['11',Validators.required],
        esiEmployerCode:['11',Validators.required],
        esiLocalOffice:['11',Validators.required],
        dispensary:['11',Validators.required],
        pfNominee:['11',Validators.required],
        pfSharePercent:['11',Validators.required],
        gratuityNominee:['11',Validators.required],
        gratuitySharePercent:['11',Validators.required],
        childrenPension:['11',Validators.required],
        widowPension:['11',Validators.required],
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
     name: [familyMember?.name || '11', Validators.required],
     yearOfBirth: [familyMember?.yearOfBirth || '11', Validators.required],
     relation: [familyMember?.relation || '11', Validators.required]
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
      employer: ['11', Validators.required],
      postHeld: ['11', Validators.required],
      fromDate: ['11', Validators.required],
      toDate: ['11', Validators.required],
      reasonForLeaving: ['11', Validators.required]
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
