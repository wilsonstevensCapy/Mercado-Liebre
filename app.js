const express = require('express');
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
app.use(express.static(path.resolve(__dirname, "./public")));
app.get("/", (req, res) => {
    let htmlPath = path.resolve(__dirname,"./views/home.html");
    res.sendFile(htmlPath);
  });
app.listen(port, () => {
  console.log(`servidor corriendo en el puerto ${port}`);
 });
