import express from "express";
import {
  addNewFurniture,
  findFurnitureByModel,
  getAllFurniture,
} from "./src/furniture.js";

const app = express();
const PORT = 3030;
app.use(express.json());

app.get(" /", (req, res) => {
  res.send(" working");
});

app.post("/furniture", addNewFurniture);
app.get("/furniture", getAllFurniture);
app.get("/furniture/:search", findFurnitureByModel);

app.listen(PORT, () =>
  console.log(`Listening on http://localhost:${PORT}... `)
);
