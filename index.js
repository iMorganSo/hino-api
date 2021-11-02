require("dotenv").config()
let fetch = require("node-fetch")
const API = require("./api")

console.log(`${API.name} connected`)

module.exports.API = require("./api.js")