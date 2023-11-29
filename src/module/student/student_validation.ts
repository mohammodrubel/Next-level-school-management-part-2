import { z } from 'zod'

const userNameSchema = z.object({
  firstName: z.string(),
  middelName: z.string(),
  lastName: z.string(),
})

const guardianSchema = z.object({
  fathersName: z.string(),
  fathersOccupation: z.string(),
  fathersContactNumber: z.string(),
  mothersName: z.string(),
  mothersOccupation: z.string(),
  mothersContactNumber: z.string(),
})

const localGuardianSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
})

const studentValidationSchema = z.object({
  body: z.object({
    student: z.object({
      password: z.string(),
      name: userNameSchema,
      gender: z.enum(['male', 'female', 'others']),
      dateOfBirth: z.string(),
      email: z.string().email(),
      contactNumber: z.string(),
      bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
      presentAddress: z.string(),
      parmanentAddress: z.string(),
      guardian: guardianSchema,
      localGuardian: localGuardianSchema,
      profileImage: z.string(),
      admisstionSemester:z.string()
    }),
  }),
})

export const studentValidation = { studentValidationSchema }
