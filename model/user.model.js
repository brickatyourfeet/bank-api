const fs = require('fs')
const uuid = require('uuid/v4')

//JSON.parse(fs.readFileSync('accountsDb.json', 'utf-8'))
//this won't work will it? I don't think so
const read = JSON.parse(fs.readFileSync('accountsDb.json', 'utf-8'))




function get() {
  let accounts = read
  return accounts
}

function getById() {

}

function create() {

}
