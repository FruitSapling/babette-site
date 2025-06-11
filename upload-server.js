const express = require('express');
const multer  = require('multer');
const path = require('path');

const app = express();
const uploadDir = path.join(__dirname, 'src/video');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

app.use('/video', express.static(uploadDir));

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en"><head><meta charset="UTF-8"><title>Upload Video</title></head>
  <body>
    <h1>Upload a Video</h1>
    <form method="post" enctype="multipart/form-data" action="/upload">
      <input type="file" name="video" accept="video/*" required>
      <button type="submit">Upload</button>
    </form>
  </body></html>`);
});

app.post('/upload', upload.single('video'), (req, res) => {
  res.send('Upload complete');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Upload server running on port ${PORT}`));
