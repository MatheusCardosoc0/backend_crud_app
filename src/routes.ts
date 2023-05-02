import {Router} from "express";
import CreateUserController from "./controllers/user/createUserController";
import ShowUserController from "./controllers/user/showUserController";
import DeleteUserController from "./controllers/user/deleteUserController";
import UpdateUserController from "./controllers/user/updateUserController";

const route = Router()

route.get('/', new ShowUserController().handler)

route.post('/new_user', new CreateUserController().handler)

route.delete('/delete_user', new DeleteUserController().handle)

route.put('/user_update/:id', new UpdateUserController().handler)

export default route