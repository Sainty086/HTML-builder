let fs = require('fs');
let path = require('node:path');
let rl = require('readline');
const pathTxt = path.join(__dirname, 'text.txt');
const wrStream = fs.createWriteStream(pathTxt);

let rlInterface = rl.createInterface(process.stdin, process.stdout);
rlInterface.setPrompt('Enter anything here:\n');
rlInterface.prompt();

rlInterface.on('line', (data) => {
  if (data === 'exit') {
    rlInterface.close();
  }
  wrStream.write(data + '\n');
});

rlInterface.on('close', () => {
  console.log('Goodbuy!');
});
