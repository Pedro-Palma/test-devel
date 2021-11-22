
import { Router } from "express";
import * as question from "../controllers/question";

import { ensureAuth } from "../middlewares/md_authenticated";

const router = Router();

router
.post('/question',ensureAuth,question.addQuestion)
.get('/question',ensureAuth,question.getQuestions)
.get('/question/:id',ensureAuth,question.getQuestionId)
.put('/question',ensureAuth,question.updateQuestion)
.delete('/question',ensureAuth,question.deleteQuestion)
.get('/pollQuestions/:id',question.getQuestionPoll)



export default router;