import express from "express";
const router = express.Router();
import memberController from "../src/controllers/member_controller";

/*Member */
router.post("/member/login", memberController.login);
router.post("/member/signup", memberController.signup);
router.get("/member/detail", memberController.verifyAuth);

/*Product */
/*Order*/
export default router;
