import { Router } from "express";
import { cadaster, login } from "../controllers/auth.controller";

const router = Router();

router.post('/login', login);
router.post('/cadaster', cadaster);

export default router;