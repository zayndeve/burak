import mongoose, { Schema } from "mongoose";
import { MemberStatus, MemberType } from "../libs/enums/member.enum";
//Schema first & Code first
const memberSchema = new Schema(
  {
    memberType: {
      type: String,
      enum: MemberType,
      default: MemberType.USER,
    },
    memberStatus: {
      type: String,
      enum: MemberStatus,
      default: MemberStatus.ACTIVE,
    },
    memberNick: {
      type: String,
      index: { unique: true, sparse: true },
      required: true,
    },
    memberPhone: {
      type: String,
      index: { unique: true, sparse: true },
      required: true,
    },
    memberPassword: {
      type: String,
      select: false,
      required: true,
    },
    memberAdress: {
      type: String,
    },
    memberDesc: {
      type: String,
    },
    memberImage: {
      type: String,
    },
    memberPoints: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true } //updated at and created at kabi ma`lumtolarni qo`shib beryabti
);

export default mongoose.model("Member", memberSchema);
