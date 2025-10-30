import { Schema, model, models } from "mongoose";

const ChallengeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, default: "" },
  difficulty: { 
    type: String, 
    enum: ["Easy", "Medium", "Hard"], 
    default: "Easy" 
  },
  tags: { type: [String], default: [] },
  starterCode: { type: String, required: true },
  targetCode: { type: String, required: true }, // renamed from componentCode
  createdAt: { type: Date, default: Date.now },
});

const Challenge = models.Challenge || model("Challenge", ChallengeSchema);
export default Challenge;
