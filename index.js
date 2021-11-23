const express = require("express");
const dotenv = require("dotenv");
require("./DB/db");
const app = express();
const PORT = process.env.PORT;
const morgan = require("morgan");
const cors = require("cors");
app.use(cors());
app.use(morgan("tiny"));
dotenv.config();
app.use(express.json());
const userRouter = require("./routers/routes/users");
const productsRouter = require("./routers/routes/products");
app.use("/products", productsRouter);
app.use("/users", userRouter);
///////////////////////////////////////////////////
// app.get("/j", (req, res) => {
//     res.status(200);
//     res.send('hi from backend');
//   });
// app.get("/", cors(), async (req, res) => {
//   res.send("this hell working");
// });

// app.post("/post_name", async (req, res) => {
//   let { name } = req.body;
//   console.log(name);
// });

// app.get("/home", cors(), async (req, res) => {
//   res.send("Shut up home page");
// });
/////////////////////////////////////////
app.listen(PORT, () => {
  console.log("SERVER Runing");
});
