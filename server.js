const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.get("*", (req, res) => {
  const index = path.join(__dirname, "public", "index.html");
  res.sendFile(index);
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
