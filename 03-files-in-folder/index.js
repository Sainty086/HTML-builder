let fs = require('fs');
let path = require('node:path');
const pathFolder = path.join(__dirname, 'secret-folder');

fs.readdir(pathFolder, { withFileTypes: true }, (err, files) => {
  if (err) console.log(err);
  else {
    files.forEach((file) => {
      if (file.isFile()) {
        const filePath = path.join(pathFolder, file.name);
        const fileName = path.basename(filePath, path.extname(filePath));
        const fileExt = path.extname(filePath).toString().replace('.', '');
        fs.stat(filePath, (err, stats) => {
          if (err) console.log(err);
          else {
            const fileSize = stats.size;
            console.log(`${fileName} - ${fileExt} - ${fileSize}b`);
          }
        });
      }
    });
  }
});
