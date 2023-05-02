import { Request, Response } from "express";
import DeleteUserService from "../../services/user/deleteUserService";

class DeleteUserController{
  async handle(
    req: Request,
    res: Response
  ){

    const id = req.query.id as string

    const service = new DeleteUserService()

    const deleteUser = await service.execute({
      id
    })

    return res.json(deleteUser)
  }
}

export default DeleteUserController