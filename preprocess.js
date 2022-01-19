const fs = require('fs');
const pickle = require('pickle');

module.exports = class Preprocess {
  constructor(wordDictPath) {
    const wordDict = pickle.loads(fs.readFileSync(wordDictPath).);

    console.log(wordDict);
  }
};
