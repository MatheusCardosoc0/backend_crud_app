import { User } from "@prisma/client";
import { prisma } from "../../utils/prismadb";

interface CreateUserServiceProps{
  user: Omit<User, 'id'>
}

class CreateUserService{
  async execute({
    user
  }: CreateUserServiceProps){

    const createUser = await prisma.user.create({
      data: {
        dob: user.dob,
        firstName: user.firstName,
        lastName: user.lastName,
        education: user.education,
        email: user.email,
        experience: user.experience,
        genrer: user.genrer
      }
    })

    return createUser
  }
}

export default  CreateUserService