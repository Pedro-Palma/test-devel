
import { Router } from "express";
import * as poll from "../controllers/poll";

import { ensureAuth } from "../middlewares/md_authenticated";

const router = Router();

router
.post('/poll',ensureAuth,poll.addPoll)
.get('/poll/:id',ensureAuth,poll.getPollId)
.get('/poll',ensureAuth,poll.getPolls)
.put('/poll',ensureAuth,poll.updatePoll)
.delete('/poll',ensureAuth,poll.deletePoll)



export default router;