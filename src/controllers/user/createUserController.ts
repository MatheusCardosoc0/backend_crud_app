import { Request, Response } from 'express'
import CreateUserService from '../../services/user/createUserService'
import { User } from '@prisma/client'

class CreateUserController {
  async handler(req: Request, res: Response) {
    const {
      dob,
      education,
      email,
      experience,
      firstName,
      genrer,
      lastName
    }: User = req.body

    const service = new CreateUserService()

    const createUser = await service.execute({
      user: {
        dob,
        education,
        email,
        experience,
        firstName,
        genrer,
        lastName
      }
    })

    return res.json(createUser)
  }
}

export default CreateUserController
