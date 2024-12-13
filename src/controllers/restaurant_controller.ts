import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Memeber.service";
import { MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
//import MemberService from "src/models/Memeber.service";

const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    res.send("Home page");
  } catch (err) {
    console.log("Error goHome:", err);
  }
};
restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin");
    res.send("Login page");
  } catch (err) {
    console.log("Error getLogin:", err);
  }
};
restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");
    res.send("Sing-up page");
  } catch (err) {
    console.log("Error getSignup:", err);
  }
};
restaurantController.processLogin = (req: Request, res: Response) => {
  try {
    console.log("processLogin");
    res.send("processLogin");
  } catch (err) {
    console.log("Error processLogin:", err);
  }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("processSignup");

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;

    const memberService = new MemberService();
    const result = await memberService.processSignup(newMember);

    res.send(result);
  } catch (err) {
    console.log("Error, processSignup:", err);
    res.send(err);
  }
};

export default restaurantController;
