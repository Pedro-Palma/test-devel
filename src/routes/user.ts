
import { Router } from "express";
import * as user from "../controllers/user";

import { ensureAuth } from "../middlewares/md_authenticated";

const router = Router();

router
.post('/user',user.addUser)
.post('/userLogin',user.login)
.get('/user',user.getUsers)
.get('/user/:id',user.getUserId)
.put('/user',user.updateUser)


export default router;