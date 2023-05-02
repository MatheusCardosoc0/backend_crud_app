import { Request, Response } from "express";
import ShowUserService from "../../services/user/showUserService";

class ShowUserController{
  async handler(
    req: Request,
    res: Response
  ){

    const service = new ShowUserService()

    const showUsers = await service.execute()

    return res.json(showUsers)
  }
}

export default ShowUserController