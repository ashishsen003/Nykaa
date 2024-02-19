const express = require("express");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.route");
const { productsRouter } = require("./routes/product.route");
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors())

app.use("/", userRouter);
app.use("/products", productsRouter);

app.listen(8000, async () => {
  try {
    await connection;
    console.log("server is running at 8000");
  } catch (error) {
    console.log(error);
  }
});
