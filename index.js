const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
const ytpl = require("ytpl");

////////cors()

app.use(cors());

////////port open
app.listen(port, () => {
  console.log(`Server Works !!! At port ${port}`);
});

/////get request handel here get url for one video

app.get("/download", (req, res) => {
  var URL = req.query.URL;

  res.header("Content-Disposition", 'attachment; filename="video.mp4"');

  ytdl(URL, {
    format: "mp4",
    quality: "highest",
  }).pipe(res);
});
