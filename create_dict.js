const fs = require('fs');

const readCorpusData = (path) => {
  const file = fs.readFileSync(path, { encoding: 'utf-8' });

  return file.split(/\r?\n/).map((value) => value.split('\t'));
};

readCorpusData('./data/corpus.txt');
