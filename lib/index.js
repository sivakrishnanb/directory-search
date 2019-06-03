"use strict";

var fs = require("fs"),
  path = require("path");

const getAllFiles = dir =>
  fs
    .readdirSync(dir)
    .reduce(
      (files, file) =>
        fs.statSync(path.join(dir, file)).isDirectory()
          ? [...files, ...getAllFiles(path.join(dir, file))]
          : [...files, path.join(dir, file)],
      []
    );

const getMatchedFiles = (files, pattern) =>
  files.filter(file =>
    fs
      .readFileSync(file)
      .toString()
      .match(pattern)
  );

exports.default = (text, directory = ".") =>
  new Promise((resolve, reject) => {
    try {
      resolve(getMatchedFiles(getAllFiles(directory), new RegExp(text, "g")));
    } catch (err) {
      reject(err);
    }
  });
