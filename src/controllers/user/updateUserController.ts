import { User } from "@prisma/client";
import { Request, Response } from "express";
import UpdateUserService from "../../services/user/updateUserService";

class UpdateUserController{
  async handler(
    req: Request,
    res: Response
  ){

    const id = req.params.id as string
    const {
      dob,
      education,
      email,
      experience,
      firstName,
      genrer,
      lastName
    }: User = req.body


    const service = new UpdateUserService()

    const updateUser = await service.execute({
      id,
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

    return res.json(updateUser)
  }
}

export default UpdateUserController