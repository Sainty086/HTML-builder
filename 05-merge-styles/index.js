let fs = require('fs');
let path = require('node:path');
const sourceFolder = path.join(__dirname, 'styles');
const bundleFolder = path.join(__dirname, 'project-dist');
const bundleFile = path.join(bundleFolder, 'bundle.css');

const wrStream = fs.createWriteStream(bundleFile);

fs.readdir(sourceFolder, { withFileTypes: true }, (err, files) => {
  if (err) console.log(err);
  else {
    files.forEach((file) => {
      const filePath = path.join(sourceFolder, file.name);
      if (file.isFile() && path.extname(file.name) === '.css') {
        const reader = fs.createReadStream(filePath);
        reader.on('data', function (chunk) {
          wrStream.write(chunk);
        });
      }
    });
  }
});
