require("dotenv").config();
import app from "./server";

app.listen(process.env.PORT, () =>
  console.log(
    `✅ Server is successfully lauched at http://localhost:${process.env.PORT}`
  )
);
