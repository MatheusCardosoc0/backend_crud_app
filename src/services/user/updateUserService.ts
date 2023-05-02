import { User } from "@prisma/client";
import { prisma } from "../../utils/prismadb";

interface UpdateUserServiceProps{
  id: string
  user: Omit<User, 'id'>
}

class UpdateUserService{
  async execute({
    id,
    user
  }: UpdateUserServiceProps){

    const updateUser = await prisma.user.update({
      where: {
        id
      },
      data: {
        dob: user.dob,
        education: user.education,
        email: user.email,
        experience: user.experience,
        firstName: user.firstName,
        lastName: user.lastName,
        genrer: user.genrer
      }
    })

    return updateUser
  }
}

export default UpdateUserService