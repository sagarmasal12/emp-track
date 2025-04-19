export const Constant =  {
  "formControls": [
    {
      "controlName": "employeeId",
      "label": "Employee ID",
      "placeholder": "Enter employee ID",
      "type": "number",
      "defaultValue": 0,
      "className": "col-3",
      "validations": {
        "required": true,
        "min": 0
      }
    },
    {
      "controlName": "postAppliedFor",
      "label": "Post Applied For",
      "placeholder": "Enter post applied for",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true,
        "maxLength": 100
      }
    },
    {
      "controlName": "fullName",
      "label": "Full Name",
      "placeholder": "Enter full name",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true,
        "minLength": 2,
        "maxLength": 100
      }
    },
    {
      "controlName": "motherName",
      "label": "Mother's Name",
      "placeholder": "Enter mother's name",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true,
        "minLength": 2,
        "maxLength": 100
      }
    },
    {
      "controlName": "fatherOrHusbandName",
      "label": "Father's/Husband's Name",
      "placeholder": "Enter father's/husband's name",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true,
        "minLength": 2,
        "maxLength": 100
      }
    },
    {
      "controlName": "dateOfBirth",
      "label": "Date of Birth",
      "placeholder": "Select date of birth",
      "type": "date",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "age",
      "label": "Age",
      "placeholder": "Enter age",
      "type": "number",
      "defaultValue": 0,
      "className": "col-3",
      "validations": {
        "required": true,
        "min": 18,
        "max": 100
      }
    },
    {
      "controlName": "maritalStatus",
      "label": "Marital Status",
      "placeholder": "Select marital status",
      "type": "select",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      },
      "options": [
        { "value": "single", "label": "Single" },
        { "value": "married", "label": "Married" },
        { "value": "divorced", "label": "Divorced" },
        { "value": "widowed", "label": "Widowed" }
      ]
    },
    {
      "controlName": "gender",
      "label": "Gender",
      "placeholder": "Select gender",
      "type": "select",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      },
      "options": [
        { "value": "male", "label": "Male" },
        { "value": "female", "label": "Female" },
        { "value": "other", "label": "Other" }
      ]
    },
    {
      "controlName": "nationality",
      "label": "Nationality",
      "placeholder": "Enter nationality",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "religion",
      "label": "Religion",
      "placeholder": "Enter religion",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "weight",
      "label": "Weight",
      "placeholder": "Enter weight",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "caste",
      "label": "Caste",
      "placeholder": "Enter caste",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "region",
      "label": "Region",
      "placeholder": "Enter region",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "bloodGroup",
      "label": "Blood Group",
      "placeholder": "Enter blood group",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "identityMark",
      "label": "Identity Mark",
      "placeholder": "Enter identity mark",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "shiftType",
      "label": "Shift Type",
      "placeholder": "Enter shift type",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "shiftOption",
      "label": "Shift Option",
      "placeholder": "Enter shift option",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "presentAddress",
      "label": "Present Address",
      "placeholder": "Enter present address",
      "type": "textarea",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true,
        "maxLength": 500
      }
    },
    {
      "controlName": "permanentAddress",
      "label": "Permanent Address",
      "placeholder": "Enter permanent address",
      "type": "textarea",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true,
        "maxLength": 500
      }
    },
    {
      "controlName": "aadharNo",
      "label": "Aadhar Number",
      "placeholder": "Enter Aadhar number",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true,
        "pattern": "^[0-9]{12}$"
      }
    },
    {
      "controlName": "panCardNo",
      "label": "PAN Card Number",
      "placeholder": "Enter PAN card number",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true,
        "pattern": "^[A-Z]{5}[0-9]{4}[A-Z]{1}$"
      }
    },
    {
      "controlName": "pfUanNo",
      "label": "PF UAN Number",
      "placeholder": "Enter PF UAN number",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "workerLwfNo",
      "label": "Worker LWF Number",
      "placeholder": "Enter worker LWF number",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "entryDate",
      "label": "Entry Date",
      "placeholder": "Select entry date",
      "type": "date",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "payCode",
      "label": "Pay Code",
      "placeholder": "Enter pay code",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "cardNo",
      "label": "Card Number",
      "placeholder": "Enter card number",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "designation",
      "label": "Designation",
      "placeholder": "Enter designation",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "department",
      "label": "Department",
      "placeholder": "Enter department",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "company",
      "label": "Company",
      "placeholder": "Enter company name",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "location",
      "label": "Location",
      "placeholder": "Enter location",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "subDepartment",
      "label": "Sub Department",
      "placeholder": "Enter sub department",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "category",
      "label": "Category",
      "placeholder": "Enter category",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "cadre",
      "label": "Cadre",
      "placeholder": "Enter cadre",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "division",
      "label": "Division",
      "placeholder": "Enter division",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "appointmentMonths",
      "label": "Appointment Months",
      "placeholder": "Enter appointment months",
      "type": "number",
      "defaultValue": 0,
      "className": "col-3",
      "validations": {
        "required": true,
        "min": 0
      }
    },
    {
      "controlName": "bankAccountNo",
      "label": "Bank Account Number",
      "placeholder": "Enter bank account number",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "bankName",
      "label": "Bank Name",
      "placeholder": "Enter bank name",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "bankIfscCode",
      "label": "Bank IFSC Code",
      "placeholder": "Enter bank IFSC code",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true,
        "pattern": "^[A-Z]{4}0[A-Z0-9]{6}$"
      }
    },
    {
      "controlName": "bankBranch",
      "label": "Bank Branch",
      "placeholder": "Enter bank branch",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "costCentre",
      "label": "Cost Centre",
      "placeholder": "Enter cost centre",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "transferFrom",
      "label": "Transfer From",
      "placeholder": "Enter transfer from location",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": false
      }
    },
    {
      "controlName": "transferTo",
      "label": "Transfer To",
      "placeholder": "Enter transfer to location",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": false
      }
    },
    {
      "controlName": "transferDate",
      "label": "Transfer Date",
      "placeholder": "Select transfer date",
      "type": "date",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": false
      }
    },
    {
      "controlName": "reportingDate",
      "label": "Reporting Date",
      "placeholder": "Select reporting date",
      "type": "date",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "subDivision",
      "label": "Sub Division",
      "placeholder": "Enter sub division",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "salary",
      "label": "Salary",
      "placeholder": "Enter salary",
      "type": "number",
      "defaultValue": 0,
      "className": "col-3",
      "validations": {
        "required": true,
        "min": 0
      }
    },
    {
      "controlName": "confirmDate",
      "label": "Confirmation Date",
      "placeholder": "Select confirmation date",
      "type": "date",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": false
      }
    },
    {
      "controlName": "employmentStatus",
      "label": "Employment Status",
      "placeholder": "Enter employment status",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "interviewDate",
      "label": "Interview Date",
      "placeholder": "Select interview date",
      "type": "date",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "interviewedBy",
      "label": "Interviewed By",
      "placeholder": "Enter interviewer name",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "address",
      "label": "Address",
      "placeholder": "Enter address",
      "type": "textarea",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true,
        "maxLength": 500
      }
    },
    {
      "controlName": "referencePerson1",
      "label": "Reference Person 1",
      "placeholder": "Enter reference person 1",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "referencePerson2",
      "label": "Reference Person 2",
      "placeholder": "Enter reference person 2",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "relativeWorkingInCompany",
      "label": "Relative Working in Company",
      "placeholder": "Select if relative working in company",
      "type": "select",
      "defaultValue": false,
      "className": "col-3",
      "validations": {
        "required": true
      },
      "options": [
        { "value": true, "label": "Yes" },
        { "value": false, "label": "No" }
      ]
    },
    {
      "controlName": "relativeName",
      "label": "Relative Name",
      "placeholder": "Enter relative name",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": false
      }
    },
    {
      "controlName": "relativeRelationship",
      "label": "Relative Relationship",
      "placeholder": "Enter relative relationship",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": false
      }
    },
    {
      "controlName": "esiInsuranceNo",
      "label": "ESI Insurance Number",
      "placeholder": "Enter ESI insurance number",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "dispensary",
      "label": "Dispensary",
      "placeholder": "Enter dispensary",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "esiEmployerCode",
      "label": "ESI Employer Code",
      "placeholder": "Enter ESI employer code",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "esiLocalOffice",
      "label": "ESI Local Office",
      "placeholder": "Enter ESI local office",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "pfAccountNo",
      "label": "PF Account Number",
      "placeholder": "Enter PF account number",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "pfNominee",
      "label": "PF Nominee",
      "placeholder": "Enter PF nominee",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "pfSharePercent",
      "label": "PF Share Percentage",
      "placeholder": "Enter PF share percentage",
      "type": "number",
      "defaultValue": 0,
      "className": "col-3",
      "validations": {
        "required": true,
        "min": 0,
        "max": 100
      }
    },
    {
      "controlName": "gratuityNominee",
      "label": "Gratuity Nominee",
      "placeholder": "Enter gratuity nominee",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "gratuitySharePercent",
      "label": "Gratuity Share Percentage",
      "placeholder": "Enter gratuity share percentage",
      "type": "number",
      "defaultValue": 0,
      "className": "col-3",
      "validations": {
        "required": true,
        "min": 0,
        "max": 100
      }
    },
    {
      "controlName": "dateOfJoining",
      "label": "Date of Joining",
      "placeholder": "Select date of joining",
      "type": "date",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "approvedBy",
      "label": "Approved By",
      "placeholder": "Enter approver name",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "totalExperienceYears",
      "label": "Total Experience (Years)",
      "placeholder": "Enter total experience in years",
      "type": "number",
      "defaultValue": 0,
      "className": "col-3",
      "validations": {
        "required": true,
        "min": 0
      }
    },
    {
      "controlName": "languagesKnown",
      "label": "Languages Known",
      "placeholder": "Enter languages known",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "whatsappNo",
      "label": "WhatsApp Number",
      "placeholder": "Enter WhatsApp number",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true,
        "pattern": "^[0-9]{10}$"
      }
    },
    {
      "controlName": "email",
      "label": "Email",
      "placeholder": "Enter email address",
      "type": "email",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true,
        "email": true
      }
    },
    {
      "controlName": "phone1",
      "label": "Primary Phone",
      "placeholder": "Enter primary phone number",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true,
        "pattern": "^[0-9]{10}$"
      }
    },
    {
      "controlName": "phone2",
      "label": "Secondary Phone",
      "placeholder": "Enter secondary phone number",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "pattern": "^[0-9]{10}$"
      }
    },
    {
      "controlName": "qualification",
      "label": "Qualification",
      "placeholder": "Enter qualification",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "technicalQualification",
      "label": "Technical Qualification",
      "placeholder": "Enter technical qualification",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "pincode",
      "label": "Pincode",
      "placeholder": "Enter pincode",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true,
        "pattern": "^[0-9]{6}$"
      }
    },
    {
      "controlName": "state",
      "label": "State",
      "placeholder": "Enter state",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "district",
      "label": "District",
      "placeholder": "Enter district",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "individualBioData",
      "label": "Individual Bio Data",
      "placeholder": "Select if individual bio data available",
      "type": "select",
      "defaultValue": false,
      "className": "col-3",
      "validations": {
        "required": true
      },
      "options": [
        { "value": true, "label": "Yes" },
        { "value": false, "label": "No" }
      ]
    },
    {
      "controlName": "photoAttached",
      "label": "Photo Attached",
      "placeholder": "Select if photo attached",
      "type": "select",
      "defaultValue": false,
      "className": "col-3",
      "validations": {
        "required": true
      },
      "options": [
        { "value": true, "label": "Yes" },
        { "value": false, "label": "No" }
      ]
    },
    {
      "controlName": "numPhotos",
      "label": "Number of Photos",
      "placeholder": "Enter number of photos",
      "type": "number",
      "defaultValue": 0,
      "className": "col-3",
      "validations": {
        "required": true,
        "min": 0
      }
    },
    {
      "controlName": "applicationAttached",
      "label": "Application Attached",
      "placeholder": "Select if application attached",
      "type": "select",
      "defaultValue": false,
      "className": "col-3",
      "validations": {
        "required": true
      },
      "options": [
        { "value": true, "label": "Yes" },
        { "value": false, "label": "No" }
      ]
    },
    {
      "controlName": "contractAttached",
      "label": "Contract Attached",
      "placeholder": "Select if contract attached",
      "type": "select",
      "defaultValue": false,
      "className": "col-3",
      "validations": {
        "required": true
      },
      "options": [
        { "value": true, "label": "Yes" },
        { "value": false, "label": "No" }
      ]
    },
    {
      "controlName": "certificatesAttached",
      "label": "Certificates Attached",
      "placeholder": "Select if certificates attached",
      "type": "select",
      "defaultValue": false,
      "className": "col-3",
      "validations": {
        "required": true
      },
      "options": [
        { "value": true, "label": "Yes" },
        { "value": false, "label": "No" }
      ]
    },
    {
      "controlName": "joiningReportAttached",
      "label": "Joining Report Attached",
      "placeholder": "Select if joining report attached",
      "type": "select",
      "defaultValue": false,
      "className": "col-3",
      "validations": {
        "required": true
      },
      "options": [
        { "value": true, "label": "Yes" },
        { "value": false, "label": "No" }
      ]
    },
    {
      "controlName": "nominationFormAttached",
      "label": "Nomination Form Attached",
      "placeholder": "Select if nomination form attached",
      "type": "select",
      "defaultValue": false,
      "className": "col-3",
      "validations": {
        "required": true
      },
      "options": [
        { "value": true, "label": "Yes" },
        { "value": false, "label": "No" }
      ]
    },
    {
      "controlName": "proofOfAge",
      "label": "Proof of Age",
      "placeholder": "Select if proof of age attached",
      "type": "select",
      "defaultValue": false,
      "className": "col-3",
      "validations": {
        "required": true
      },
      "options": [
        { "value": true, "label": "Yes" },
        { "value": false, "label": "No" }
      ]
    },
    {
      "controlName": "sunHdPayEnabled",
      "label": "Sunday/Holiday Pay Enabled",
      "placeholder": "Select if Sunday/Holiday pay enabled",
      "type": "select",
      "defaultValue": false,
      "className": "col-3",
      "validations": {
        "required": true
      },
      "options": [
        { "value": true, "label": "Yes" },
        { "value": false, "label": "No" }
      ]
    },
    {
      "controlName": "nightRate",
      "label": "Night Rate",
      "placeholder": "Enter night rate",
      "type": "number",
      "defaultValue": 0,
      "className": "col-3",
      "validations": {
        "required": true,
        "min": 0
      }
    },
    {
      "controlName": "otRate",
      "label": "Overtime Rate",
      "placeholder": "Enter overtime rate",
      "type": "number",
      "defaultValue": 0,
      "className": "col-3",
      "validations": {
        "required": true,
        "min": 0
      }
    },
    {
      "controlName": "otCalcMethod",
      "label": "Overtime Calculation Method",
      "placeholder": "Enter overtime calculation method",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "rate",
      "label": "Rate",
      "placeholder": "Enter rate",
      "type": "number",
      "defaultValue": 0,
      "className": "col-3",
      "validations": {
        "required": true,
        "min": 0
      }
    },
    {
      "controlName": "foodingEnabled",
      "label": "Fooding Enabled",
      "placeholder": "Select if fooding enabled",
      "type": "select",
      "defaultValue": false,
      "className": "col-3",
      "validations": {
        "required": true
      },
      "options": [
        { "value": true, "label": "Yes" },
        { "value": false, "label": "No" }
      ]
    },
    {
      "controlName": "overtimeEnabled",
      "label": "Overtime Enabled",
      "placeholder": "Select if overtime enabled",
      "type": "select",
      "defaultValue": false,
      "className": "col-3",
      "validations": {
        "required": true
      },
      "options": [
        { "value": true, "label": "Yes" },
        { "value": false, "label": "No" }
      ]
    },
    {
      "controlName": "employeeType",
      "label": "Employee Type",
      "placeholder": "Enter employee type",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "wageCalculationType",
      "label": "Wage Calculation Type",
      "placeholder": "Enter wage calculation type",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "paymentType",
      "label": "Payment Type",
      "placeholder": "Enter payment type",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": true
      }
    },
    {
      "controlName": "ctc",
      "label": "CTC",
      "placeholder": "Enter CTC",
      "type": "number",
      "defaultValue": 0,
      "className": "col-3",
      "validations": {
        "required": true,
        "min": 0
      }
    },
    {
      "controlName": "exgratia",
      "label": "Ex Gratia",
      "placeholder": "Enter ex gratia amount",
      "type": "number",
      "defaultValue": 0,
      "className": "col-3",
      "validations": {
        "required": true,
        "min": 0
      }
    },
    {
      "controlName": "subTotalCtc",
      "label": "Sub Total CTC",
      "placeholder": "Enter sub total CTC",
      "type": "number",
      "defaultValue": 0,
      "className": "col-3",
      "validations": {
        "required": true,
        "min": 0
      }
    },
    {
      "controlName": "salaryBonus",
      "label": "Salary Bonus",
      "placeholder": "Enter salary bonus",
      "type": "number",
      "defaultValue": 0,
      "className": "col-3",
      "validations": {
        "required": true,
        "min": 0
      }
    },
    {
      "controlName": "pfEmployer",
      "label": "PF Employer Contribution",
      "placeholder": "Enter PF employer contribution",
      "type": "number",
      "defaultValue": 0,
      "className": "col-3",
      "validations": {
        "required": true,
        "min": 0
      }
    },
    {
      "controlName": "esiEmployer",
      "label": "ESI Employer Contribution",
      "placeholder": "Enter ESI employer contribution",
      "type": "number",
      "defaultValue": 0,
      "className": "col-3",
      "validations": {
        "required": true,
        "min": 0
      }
    },
    {
      "controlName": "lwfEmployer",
      "label": "LWF Employer Contribution",
      "placeholder": "Enter LWF employer contribution",
      "type": "number",
      "defaultValue": 0,
      "className": "col-3",
      "validations": {
        "required": true,
        "min": 0
      }
    },
    {
      "controlName": "employerLiability",
      "label": "Employer Liability",
      "placeholder": "Enter employer liability",
      "type": "number",
      "defaultValue": 0,
      "className": "col-3",
      "validations": {
        "required": true,
        "min": 0
      }
    },
    {
      "controlName": "totalDeduction",
      "label": "Total Deduction",
      "placeholder": "Enter total deduction",
      "type": "number",
      "defaultValue": 0,
      "className": "col-3",
      "validations": {
        "required": true,
        "min": 0
      }
    },
    {
      "controlName": "attendanceIncentive",
      "label": "Attendance Incentive",
      "placeholder": "Enter attendance incentive",
      "type": "number",
      "defaultValue": 0,
      "className": "col-3",
      "validations": {
        "required": true,
        "min": 0
      }
    },
    {
      "controlName": "transportFacility",
      "label": "Transport Facility",
      "placeholder": "Select if transport facility available",
      "type": "select",
      "defaultValue": false,
      "className": "col-3",
      "validations": {
        "required": true
      },
      "options": [
        { "value": true, "label": "Yes" },
        { "value": false, "label": "No" }
      ]
    },
    {
      "controlName": "routeNo",
      "label": "Route Number",
      "placeholder": "Enter route number",
      "type": "text",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": false
      }
    },
    {
      "controlName": "pfEmployee",
      "label": "PF Employee Contribution",
      "placeholder": "Enter PF employee contribution",
      "type": "number",
      "defaultValue": 0,
      "className": "col-3",
      "validations": {
        "required": true,
        "min": 0
      }
    },
    {
      "controlName": "esiEmployee",
      "label": "ESI Employee Contribution",
      "placeholder": "Enter ESI employee contribution",
      "type": "number",
      "defaultValue": 0,
      "className": "col-3",
      "validations": {
        "required": true,
        "min": 0
      }
    },
    {
      "controlName": "lwfEmployee",
      "label": "LWF Employee Contribution",
      "placeholder": "Enter LWF employee contribution",
      "type": "number",
      "defaultValue": 0,
      "className": "col-3",
      "validations": {
        "required": true,
        "min": 0
      }
    },
    {
      "controlName": "actualCtc",
      "label": "Actual CTC",
      "placeholder": "Enter actual CTC",
      "type": "number",
      "defaultValue": 0,
      "className": "col-3",
      "validations": {
        "required": true,
        "min": 0
      }
    },
    {
      "controlName": "fixedCtc",
      "label": "Fixed CTC",
      "placeholder": "Enter fixed CTC",
      "type": "number",
      "defaultValue": 0,
      "className": "col-3",
      "validations": {
        "required": true,
        "min": 0
      }
    },
    {
      "controlName": "grossSalary",
      "label": "Gross Salary",
      "placeholder": "Enter gross salary",
      "type": "number",
      "defaultValue": 0,
      "className": "col-3",
      "validations": {
        "required": true,
        "min": 0
      }
    },
    {
      "controlName": "basicSalary",
      "label": "Basic Salary",
      "placeholder": "Enter basic salary",
      "type": "number",
      "defaultValue": 0,
      "className": "col-3",
      "validations": {
        "required": true,
        "min": 0
      }
    },
    {
      "controlName": "hra",
      "label": "HRA",
      "placeholder": "Enter HRA",
      "type": "number",
      "defaultValue": 0,
      "className": "col-3",
      "validations": {
        "required": true,
        "min": 0
      }
    },
    {
      "controlName": "conveyanceAllowance",
      "label": "Conveyance Allowance",
      "placeholder": "Enter conveyance allowance",
      "type": "number",
      "defaultValue": 0,
      "className": "col-3",
      "validations": {
        "required": true,
        "min": 0
      }
    },
    {
      "controlName": "otherAllowance",
      "label": "Other Allowance",
      "placeholder": "Enter other allowance",
      "type": "number",
      "defaultValue": 0,
      "className": "col-3",
      "validations": {
        "required": true,
        "min": 0
      }
    },
    {
      "controlName": "medicalAllowance",
      "label": "Medical Allowance",
      "placeholder": "Enter medical allowance",
      "type": "number",
      "defaultValue": 0,
      "className": "col-3",
      "validations": {
        "required": true,
        "min": 0
      }
    },
    {
      "controlName": "remarks",
      "label": "Remarks",
      "placeholder": "Enter remarks",
      "type": "textarea",
      "defaultValue": "",
      "className": "col-3",
      "validations": {
        "required": false,
        "maxLength": 1000
      }
    },
    {
      "controlName": "employeeFamilyMembers",
      "label": "Family Members",
      "type": "formArray",
      "defaultValue": [],
      "className": "col-12",
      "controls": [
        {
          "controlName": "name",
          "label": "Name",
          "placeholder": "Enter family member name",
          "type": "text",
          "defaultValue": "",
          "className": "col-3",
          "validations": {
            "required": true,
            "minLength": 2,
            "maxLength": 100
          }
        },
        {
          "controlName": "yearOfBirth",
          "label": "Year of Birth",
          "placeholder": "Enter year of birth",
          "type": "text",
          "defaultValue": "",
          "className": "col-3",
          "validations": {
            "required": true,
            "pattern": "^[0-9]{4}$"
          }
        },
        {
          "controlName": "relation",
          "label": "Relation",
          "placeholder": "Select relation",
          "type": "select",
          "defaultValue": "",
          "className": "col-3",
          "validations": {
            "required": true
          },
          "options": [
            { "value": "spouse", "label": "Spouse" },
            { "value": "child", "label": "Child" },
            { "value": "parent", "label": "Parent" },
            { "value": "sibling", "label": "Sibling" }
          ]
        }
      ]
    },
    {
      "controlName": "employeeExperiences",
      "label": "Work Experience",
      "type": "formArray",
      "defaultValue": [],
      "className": "col-12",
      "controls": [
        {
          "controlName": "employerName",
          "label": "Employer Name",
          "placeholder": "Enter employer name",
          "type": "text",
          "defaultValue": "",
          "className": "col-3",
          "validations": {
            "required": true,
            "minLength": 2,
            "maxLength": 100
          }
        },
        {
          "controlName": "postHeld",
          "label": "Post Held",
          "placeholder": "Enter post held",
          "type": "text",
          "defaultValue": "",
          "className": "col-3",
          "validations": {
            "required": true
          }
        },
        {
          "controlName": "fromDate",
          "label": "From Date",
          "placeholder": "Select from date",
          "type": "date",
          "defaultValue": "",
          "className": "col-3",
          "validations": {
            "required": true
          }
        },
        {
          "controlName": "toDate",
          "label": "To Date",
          "placeholder": "Select to date",
          "type": "date",
          "defaultValue": "",
          "className": "col-3",
          "validations": {
            "required": true
          }
        },
        {
          "controlName": "reasonForLeaving",
          "label": "Reason for Leaving",
          "placeholder": "Enter reason for leaving",
          "type": "textarea",
          "defaultValue": "",
          "className": "col-3",
          "validations": {
            "required": true,
            "maxLength": 500
          }
        }
      ]
    }
  ]
}