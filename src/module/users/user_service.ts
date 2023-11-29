import config from '../../config'
import { AcademicSemister } from '../academic_semester/academic_semester_interface'
import { AcademicSemesterModel } from '../academic_semester/academic_semester_model'
import { Tstudent } from '../student/student_interface'
import StudentModel from '../student/student_model' // student schema
import { NewUser, Tuser } from './user_interface'
import { User } from './user_model' // user schema
import { generateStudentId } from './user_utill_'

const createStudentToDb = async (password: string, studentData: Tstudent) => {
  const userData: Partial<Tuser> = {}
  // if password not given , then we genarate password
  userData.password = password || (config.defaultPassword as string)
  // set role
  userData.role = 'student'
  // create user
  // genarateId

  


const addmitionSemister = await AcademicSemesterModel.findById(studentData.admisstionSemester)
  if(!addmitionSemister){
    throw new Error('Admisstion sesmister not found')
  }
  userData.id = await generateStudentId(addmitionSemister)
  // create a user
  const result = await User.create(userData)
  // create a student
  if (Object.keys(result).length) {
    // set id and set _id set a user
    studentData.id = result.id
    // set user id
    studentData.user = result._id //refarence Id

    const newStudent = await StudentModel.create(studentData)
    return newStudent
  }
}

export const userService = {
  createStudentToDb,
}
