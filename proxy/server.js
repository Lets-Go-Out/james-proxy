const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
require("newrelic");
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/loaderio-70bc2f38772bf69a689ad3dbd135c6a1.txt", (_, res) => {
  res.sendFile(
    path.join(__dirname, "./loaderio-70bc2f38772bf69a689ad3dbd135c6a1.txt")
  );
});
app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
