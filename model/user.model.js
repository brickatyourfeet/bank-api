const fs = require('fs')
const uuid = require('uuid/v4')

//use mongoose and make this a model with required fields?
let User = [{
  id: uuid(),
  name: 'Name',
  bank: 'Bank',
  accountDescription: 'type of account',
  transactions: [{
    id: uuid(),
    title: 'mcdonalds',
    amount: 55,
    pending: true
  }, {
    id: uuid(),
    title: 'gym',
    amount: 12,
    pending: false
  }]
}]

//make new users , save to file

console.log(User)

let accountsDb = JSON.stringify(acct)
fs.writeFileSync('accountsDb.json', accountsDb)

//function getById
