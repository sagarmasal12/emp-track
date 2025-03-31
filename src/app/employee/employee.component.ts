import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject, OnInit } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import {FormArray, FormBuilder, FormControlName, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { EmployeeService } from '../core/services/employee/employee.service';
import { IApIResponce } from '../core/models/interfaces/master';
import { CommonModule } from '@angular/common';
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

  
  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.nonNullable.group({
      personalInfo: this.fb.group({
        payCode: ['', Validators.required],
        aadharNo:['', [Validators.required, Validators.pattern(/^[2-9][0-9]{11}$/)]],
        cardNo:['',Validators.required],
        postAppliedFor:['',Validators.required],
        designation:['',Validators.required],
        entryDate:['',Validators.required],
        fullName:['',Validators.required],
        department:['',Validators.required],
        subDepartment:['',Validators.required],
        fatherOrHusbandName:['',Validators.required],
        division:['',Validators.required],
        category:['',Validators.required],
        motherName:['',Validators.required],
        dateOfBirth:['',Validators.required],
        age:['',Validators.required],
        maritalStatus:['',Validators.required],
        gender:['',Validators.required],
        nationality:['',Validators.required],
        religion:['',Validators.required],
        caste:['',Validators.required],
        region:['',Validators.required],
        identityMark:['',Validators.required],
        shiftType:['',Validators.required],
        shiftOption:['',Validators.required],
        weight:['',Validators.required],
        bloodGroup:['',Validators.required],
        reportingDate:['',Validators.required],
        transferFrom:['',Validators.required],
        transferTo:['',Validators.required],
        transferDate:['',Validators.required],
        appointmentMonths:['',Validators.required],
        bankAccountNo:['',Validators.required],
        bankName:['',Validators.required],
        bankIfscCode:['',Validators.required],
        bankBranch:['',Validators.required],
        costCentre:['',Validators.required],
        panCardNo:['',Validators.required],
        pfUanNo:['',Validators.required],
        workerLwfNo:['',Validators.required],
        cadre:['',Validators.required],
        company:['',Validators.required],
        location:['',Validators.required],
      }),
      contactFamily: this.fb.group({
        
        presentAddress:['',Validators.required],
        permanentAddress:['',Validators.required],
        state:['',Validators.required],
        district:['',Validators.required],
        phone1:['',Validators.required],
        whatsappNo:['',Validators.required],
        pincode:['',Validators.required],
        email:['',Validators.required],
        employeeFamilyMembers:this.fb.array([])
      }),
      
      qualificationExpe: this.fb.group({
        qualification: ['', Validators.required],
        technicalQualification:['',Validators.required],
        languagesKnown:['',Validators.required],
        totalExperienceYears:['',Validators.required],
        employeeExperiences:this.fb.array([])
      
      }),
      
      additionalInfo: this.fb.group({    // Controls are nested here
        relativeWorkingInCompany: [null, Validators.required],
        relativeName: [''],
        relativeRelationship: [''],
        entryDate: ['', Validators.required],
        location: ['', Validators.required],
        interviewDate: ['', Validators.required],
        interviewedBy: ['', Validators.required],
        approvedBy: ['', Validators.required],
        dateOfJoining: ['', Validators.required],
        salary: ['', Validators.required],
        confirmDate: ['', Validators.required],
        employmentStatus: ['', Validators.required],
        individualBioData: [false],
        photoAttached: [false],
        applicationAttached: [false],
        certificatesAttached: [false],
        contractAttached: [false],
        joiningReportAttached: [false],
        nominationFormAttached: [false],
        proofOfAge: [false],
        proofName: ['']
      }),
      salaryPayroll: this.fb.group({
        transportFacility: ['false'],
        routeNo: [''],
        actualCtc: [''],
        basicSalary: [''],
        hra: [''],
        conv: [''],
        others: [''],
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
        bonus: [''],
        ctcExgratia: [''],
        subTotal: [''],
        employerLiability: [''],
        employeeType: [''],
        wageCalculationType: [''],
        paymentType: [''],
        overtimeEnabled:['false'],    
        nightRate:[''],
        foodingEnabled:['false'],
        fixedCtc:[''],
        remarks:['']

      })
      // statutory: this.fb.group({
      //     password: ['', [Validators.required, Validators.minLength(6)]],
      //     confirmPassword: ['', Validators.required]
      // })

    });

    // console.log(this.employeeForm.value);

  };

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
  // get experienceDetails():FormArray{
  //   return this.employeeForm.get('qualificationExpe.experienceDetails') as FormArray;
  // }
 
  get experienceDetails(): FormArray {
    return this.qualificationExpeForm.get('employeeExperiences') as FormArray;
  }
  get additionalInfoForm(): FormGroup {
    return this.employeeForm.get('additionalInfo') as FormGroup;
  }
  get salaryPayrollForm(): FormGroup {
    return this.employeeForm.get('salaryPayroll') as FormGroup;
  }
    
 ngOnInit(): void {
  this.disablePersonalInfoValidators();
  this.addExperience();  // Initialize with one experience row
  

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
      employer: ['', Validators.required],
      postHeld: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      reasonForLeaving: ['', Validators.required]
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

  printConsole(){

    if(this.employeeForm.valid){
  
      const familyMembers = this.familyMembers.value.map((member: any) => ({
        familyMemberId: member.familyMemberId || 0,
        employeeId: member.employeeId || 0,
        name: member.name,
        yearOfBirth: member.yearOfBirth,
        relation: member.relation
      }));

      this.formData={
        
        adharNo: this.employeeForm.get('personalInfo.aadharNo')?.value,
        payCode: this.employeeForm.get('personalInfo.payCode')?.value,
        cardNo:this.employeeForm.get('personalInfo.cardNo')?.value,
        postAppliedFor:this.employeeForm.get('personalInfo.postAppliedFor')?.value,
        designation:this.employeeForm.get('personalInfo.designation')?.value,
        entryDate:this.employeeForm.get('personalInfo.entryDate')?.value,
        fullName:this.employeeForm.get('personalInfo.fullName')?.value,
        department:this.employeeForm.get('personalInfo.department')?.value,
        subDepartment:this.employeeForm.get('personalInfo.subDepartment')?.value,
        fatherOrHusbandName:this.employeeForm.get('personalInfo.fatherOrHusbandName')?.value,
        division:this.employeeForm.get('personalInfo.division')?.value,
        category:this.employeeForm.get('personalInfo.category')?.value,
        motherName:this.employeeForm.get('personalInfo.motherName')?.value,
        dateOfBirth:this.employeeForm.get('personalInfo.dateOfBirth')?.value,
        age:this.employeeForm.get('personalInfo.age')?.value,
        maritalStatus:this.employeeForm.get('personalInfo.maritalStatus')?.value,
        gender:this.employeeForm.get('personalInfo.gender')?.value,
        nationality:this.employeeForm.get('personalInfo.nationality')?.value,
        religion:this.employeeForm.get('personalInfo.religion')?.value,
        caste:this.employeeForm.get('personalInfo.caste')?.value,
        region:this.employeeForm.get('personalInfo.region')?.value,
        identityMark:this.employeeForm.get('personalInfo.identityMark')?.value,
        shiftType:this.employeeForm.get('personalInfo.shiftType')?.value,
        shiftOption:this.employeeForm.get('personalInfo.shiftOption')?.value,
        weight:this.employeeForm.get('personalInfo.weight')?.value,
        bloodGroup:this.employeeForm.get('personalInfo.bloodGroup')?.value,
        reportingDate:this.employeeForm.get('personalInfo.reportingDate')?.value,
        transferFrom:this.employeeForm.get('personalInfo.transferFrom')?.value,
        transferTo:this.employeeForm.get('personalInfo.transferTo')?.value,
        transferDate:this.employeeForm.get('personalInfo.transferDate')?.value,
        appointmentMonths:this.employeeForm.get('personalInfo.appointmentMonths')?.value,
        bankAccountNo:this.employeeForm.get('personalInfo.bankAccountNo')?.value,
        bankName:this.employeeForm.get('personalInfo.bankName')?.value,
        bankIfscCode:this.employeeForm.get('personalInfo.bankIfscCode')?.value,
        bankBranch:this.employeeForm.get('personalInfo.bankBranch')?.value,
        costCentre:this.employeeForm.get('personalInfo.costCentre')?.value,
        panCardNo:this.employeeForm.get('personalInfo.panCardNo')?.value,
        pfUanNo:this.employeeForm.get('personalInfo.pfUanNo')?.value,
        workerLwfNo:this.employeeForm.get('personalInfo.workerLwfNo')?.value,
        cadre:this.employeeForm.get('personalInfo.cadre')?.value,
        company:this.employeeForm.get('personalInfo.company')?.value,
        location:this.employeeForm.get('personalInfo.location')?.value,
        presentAddress:this.employeeForm.get('contactFamily.presentAddress')?.value,
        permanentAddress:this.employeeForm.get('contactFamily.permanentAddress')?.value,
        state:this.employeeForm.get('contactFamily.state')?.value,
        district:this.employeeForm.get('contactFamily.district')?.value,
        phone1:this.employeeForm.get('contactFamily.phone1')?.value,
        whatsappNo:this.employeeForm.get('contactFamily.whatsappNo')?.value,
        pincode:this.employeeForm.get('contactFamily.pincode')?.value,
        email:this.employeeForm.get('contactFamily.email')?.value,
        employeeFamilyMembers:familyMembers,
        qualification:this.employeeForm.get('qualificationExpe.qualification')?.value,
        technicalQualification:this.employeeForm.get('qualificationExpe.technicalQualification')?.value,
        languagesKnown:this.employeeForm.get('qualificationExpe.languagesKnown')?.value,
        totalExperienceYears:this.employeeForm.get('qualificationExpe.totalExperienceYears')?.value,
        employeeExperiences:this.experienceDetails.value,

        relativeWorkingInCompany: this.additionalInfoForm.get('relativeWorkingInCompany')?.value,
        relativeName: this.additionalInfoForm.get('relativeName')?.value,
        relativeRelationship: this.additionalInfoForm.get('relativeRelationship')?.value,
        // entryDate: this.additionalInfoForm.get('entryDate')?.value,
        // location: this.additionalInfoForm.get('location')?.value,
        interviewDate: this.additionalInfoForm.get('interviewDate')?.value,
        interviewedBy: this.additionalInfoForm.get('interviewedBy')?.value,
        approvedBy: this.additionalInfoForm.get('approvedBy')?.value,
        dateOfJoining: this.additionalInfoForm.get('dateOfJoining')?.value,
        salary: this.additionalInfoForm.get('salary')?.value,
        confirmDate: this.additionalInfoForm.get('confirmDate')?.value,
        employmentStatus: this.additionalInfoForm.get('employmentStatus')?.value,
        individualBioData: this.additionalInfoForm.get('individualBioData')?.value,
        photoAttached: this.additionalInfoForm.get('photoAttached')?.value,
        applicationAttached: this.additionalInfoForm.get('applicationAttached')?.value,
        certificatesAttached: this.additionalInfoForm.get('certificatesAttached')?.value,
        contractAttached: this.additionalInfoForm.get('contractAttached')?.value,
        joiningReportAttached: this.additionalInfoForm.get('joiningReportAttached')?.value,
        nominationFormAttached: this.additionalInfoForm.get('nominationFormAttached')?.value,
        proofOfAge: this.additionalInfoForm.get('proofOfAge')?.value,
        proofName: this.additionalInfoForm.get('proofName')?.value,
        
        // salar& payroll data
        transportFacility: this.employeeForm.get('salaryPayroll.transportFacility')?.value,
        routeNo: this.employeeForm.get('salaryPayroll.routeNo')?.value,
        actualCtc: this.employeeForm.get('salaryPayroll.actualCtc')?.value,
        basicSalary: this.employeeForm.get('salaryPayroll.basicSalary')?.value,
        hra: this.employeeForm.get('salaryPayroll.hra')?.value,
        conv: this.employeeForm.get('salaryPayroll.conv')?.value,
        others: this.employeeForm.get('salaryPayroll.others')?.value,
        medicalAllowance: this.employeeForm.get('salaryPayroll.medicalAllowance')?.value,
        attendanceIncentive: this.employeeForm.get('salaryPayroll.attendanceIncentive')?.value,
        grossSalary: this.employeeForm.get('salaryPayroll.grossSalary')?.value,
        pfEmployee: this.employeeForm.get('salaryPayroll.pfEmployee')?.value,
        esiEmployee: this.employeeForm.get('salaryPayroll.esiEmployee')?.value,
        lwfEmployee: this.employeeForm.get('salaryPayroll.lwfEmployee')?.value,
        totalDeduction: this.employeeForm.get('salaryPayroll.totalDeduction')?.value,
        pfEmployer: this.employeeForm.get('salaryPayroll.pfEmployer')?.value,
        esiEmployer: this.employeeForm.get('salaryPayroll.esiEmployer')?.value,
        lwfEmployer: this.employeeForm.get('salaryPayroll.lwfEmployer')?.value,
        bonus: this.employeeForm.get('salaryPayroll.bonus')?.value,
        ctcExgratia: this.employeeForm.get('salaryPayroll.ctcExgratia')?.value,
        subTotal: this.employeeForm.get('salaryPayroll.subTotal')?.value,
        employerLiability: this.employeeForm.get('salaryPayroll.employerLiability')?.value,
        wageCalculationType:this.employeeForm.get('salaryPayroll.wageCalculationType')?.value,
        paymentType:this.employeeForm.get('salaryPayroll.paymentType')?.value,
        overtimeEnabled:this.employeeForm.get('salaryPayroll.overtimeEnabled')?.value,
        nightRate:this.employeeForm.get('salaryPayroll.nightRate')?.value,
        foodingEnabled:this.employeeForm.get('salaryPayroll.foodingEnabled')?.value,
        fixedCtc:this.employeeForm.get('salaryPayroll.fixedCtc')?.value,
        remarks:this.employeeForm.get('salaryPayroll.fixedCtc')?.value,

      }
     
  
       // Store the form data in localStorage--try
       localStorage.setItem('formData', JSON.stringify(this.formData));
  
       console.log('Data saved to localStorage:', this.formData);
    } else {
      alert('Form is invalid');
    }
  }



}
