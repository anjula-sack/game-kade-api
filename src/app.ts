import express from "express";
import itemRouter from "./routes/item.routes";
import categoryRouter from "./routes/category.routes";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/items", itemRouter);

app.use("/categories", categoryRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
