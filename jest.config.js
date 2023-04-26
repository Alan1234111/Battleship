module.exports = {
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "./src/factories/test/__mocks__/fileMock",
    "\\.(css|less)$": "./src/factories/test/__mocks__/styleMock.js",
  },
};
