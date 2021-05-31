"use strict"

require("ts-node").register({
  transpileOnly: true,
  compilerOptions: {
    module: "commonjs",
    target: "es5",
  },
})

module.exports = require("./gatsby/node")
