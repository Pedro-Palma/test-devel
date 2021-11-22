
import { Router } from "express";
import * as type from "../controllers/type"
import { ensureAuth } from "../middlewares/md_authenticated";

const router = Router();

router
.post('/type',ensureAuth,type.andType)
.get('/type/:id',ensureAuth,type.getTypeId)
.get('/type',ensureAuth,type.getTypes)
.put('/type',ensureAuth,type.updateTypes)
.delete('/type',ensureAuth,type.deleteType)




export default router;