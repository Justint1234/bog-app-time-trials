require('dotenv').config()
const mongoose = require('mongoose')
const { Creature } = require('./schema')

const godzilla = new Creature({
  name: 'Godzilla',
  description: "King of Monsters"
})

const kong = new Creature({
  name: 'King Kong',
  description: 'Giant Monkey',
})

const ghidorah = new Creature({
  name: 'King Ghidorah',
  description: '3 Headed Dragon'
})

Creature.remove({})
  .then(() => Creature.remove({}))
  .then(() => Creature.insertMany([godzilla, kong, ghidorah]))
  .then(() => console.log('Successful Save'))
  .then(() => mongoose.connection.close())