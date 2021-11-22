
import { Router } from "express";
import * as answer from "../controllers/answer";

import { ensureAuth } from "../middlewares/md_authenticated";

const router = Router();

router
.post('/answer/:id',answer.addAnswer)
.get('/answer/:id',ensureAuth,answer.getAnswerPoll)



export default router;