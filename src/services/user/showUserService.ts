import { prisma } from '../../utils/prismadb'

class ShowUserService {
  async execute() {
    const showUsers = await prisma.user.findMany()

    return showUsers
  }
}

export default ShowUserService
