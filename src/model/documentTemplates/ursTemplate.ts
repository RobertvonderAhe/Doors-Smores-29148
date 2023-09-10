/* eslint-disable @typescript-eslint/naming-convention */
import { DocumentNode } from "../documentNode";
import { newComment, newHeading } from "../newContext";

import { 
  createOverallDescription,
  documentStart
 } from "./documentParts";

export async function createNodesForURSFull(docNode:DocumentNode) {
  await documentStart(docNode);
  await createOverallDescription(docNode);
  const hNode2 = await newHeading(docNode, "User Requirements");
  newComment(hNode2, "If you plan on breaking requirements down into categories, explain that. Then get down to it.");
}
