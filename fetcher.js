const fs = require('fs');
const readline = require('readline');
const request = require('request');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (answer) => { 
  console.log(`${answer}`);
  let splitted = answer.split(' ');
  let url = splitted[0];
  let fileName = splitted[1]; 

  request(`${url}`, (error, response, body) => { 
    fs.writeFile(`${fileName}`, (error, response && response.statusCode, body) , function (err) {
      if (err) throw err;
      console.log('Downloaded and saved 3261 bytes to ./index.html!');
    });
  })
  rl.close();
});
