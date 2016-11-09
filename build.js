const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE_NAME = 'data.json';

// Get FileNames of all Beer JSON files
const getFileNamesFromDir = (dir) => {

  const promise = new Promise((resolve, reject) => {
    fs.readdir(dir, (err, fileNamesArray) => {
      err ? reject(err) : resolve(fileNamesArray);
    });
  });

  return promise;
};

// There might be some invisible files in here such as .DS_Store so only get .json files
const filterNonJSONFiles = (fileNamesArray) => {
  return _.filter(fileNamesArray, (f) => path.extname(f) === '.json');
};

// Merge all the json files together into a giant array
const mergeJSONFiles = (fileNamesArray) => {
  const dataArray = [];
  fileNamesArray.forEach((f) => {
    dataArray.push(getFileData(f))
  });
  return dataArray;
};

// We need to get the data out of the file an easy way is to use require
const getFileData = (fileName) => {
  const dataFilePath = path.join(DATA_DIR, fileName);
  return require(dataFilePath);
};

// Pass all data to filseystem to write the file
const createDataFile = (data) => {
  const jsonData = JSON.stringify(data)
  fs.writeFile(DATA_FILE_NAME, jsonData, (err) => {
    if (err) throw err;
    console.log('File Saved!');
  })
};

// Kick off
getFileNamesFromDir(DATA_DIR)
.then(filterNonJSONFiles)
.then(mergeJSONFiles)
.then(createDataFile)
