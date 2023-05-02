import { prisma } from "../../utils/prismadb"

interface DeleteUserServiceProps{
  id: string
}

class DeleteUserService{
  async execute({
    id
  }: DeleteUserServiceProps){

    const deleteUser = await prisma.user.delete({
      where: {
        id
      }
    })

    return deleteUser
  }
}

export default DeleteUserService