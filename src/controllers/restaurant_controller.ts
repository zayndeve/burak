import { Request, Response } from "express";
import { T } from "../libs/types/common";
//import MemberService from "src/models/Memeber.service";

const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    res.send("Home page");
    //send |
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
    console.log("processLogin page");
    res.send("processLogin");
  } catch (err) {
    console.log("Error processLogin:", err);
  }
};

restaurantController.processSignup = (req: Request, res: Response) => {
  try {
    console.log("processSignup page");
    res.send("processSignup");
  } catch (err) {
    console.log("Error processSignup:", err);
  }
};

export default restaurantController;
