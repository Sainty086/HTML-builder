let fs = require('fs');
let path = require('node:path');
const sourceFolder = path.join(__dirname, 'files');
const copyFolder = path.join(__dirname, 'files-copy');

fs.mkdir(copyFolder, { recursive: true }, (err) => {
  if (err) console.log(err);
});

try {
  fs.readdir(copyFolder, (err, files) => {
    if (err) console.log(err);
    files.forEach((file) => {
      fs.unlink(path.join(copyFolder, file), (err) => {
        if (err) console.log(err);
      });
    });
  });
} catch (err) {
  console.log('');
}

fs.readdir(sourceFolder, (err, files) => {
  if (err) console.log(err);
  files.forEach((file) => {
    fs.copyFile(
      path.join(sourceFolder, file),
      path.join(copyFolder, file),
      (err) => {
        if (err) console.log(err);
      },
    );
  });
});
