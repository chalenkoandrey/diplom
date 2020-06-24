const express = require("express");
const cors = require("cors");
const app = express();
var http = require('http').createServer(app);
const socketEvents = require("./sockets");
const router = require("./route").Router;
const io = require("socket.io")(http);


app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(router);

socketEvents(io);

app.use(express.static('public'));
app.get('/video', function (req, res) {
  const path = 'public/video/programmer_humor.mp4'
  const stat = fs.statSync(path)
  const fileSize = stat.size
  const range = req.headers.range
  if (range) {
    const parts = range.replace(/bytes=/, "").split("-")
    const start = parseInt(parts[0], 10)
    const end = parts[1]
      ? parseInt(parts[1], 10)
      : fileSize - 1
    const chunksize = (end - start) + 1
    const file = fs.createReadStream(path, { start, end })
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4',
    }
    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
    }
    res.writeHead(200, head)
    fs.createReadStream(path).pipe(res)
  }
});
http.listen(9000, () => {
  console.log("Server running on port 9000");
});