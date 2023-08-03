import express from "express";
import itemRouter from "./routes/item.routes";
import categoryRouter from "./routes/category.routes";
import shopRouter from "./routes/shop.routes";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/items", itemRouter);
app.use("/categories", categoryRouter);
app.use("/shops", shopRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
