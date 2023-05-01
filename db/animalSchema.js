const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// #2 Animal sémadefiníció, minden dokumentumnak, amit a MongoDB-ben tárolni akarunk, kell egy séma definíció
const animalSchema = new mongoose.Schema({
    // a séma legfontosabb elemei az eltárolt dokumentumok adattagjai
    animalNumber:
    {
        type: Number
    },
  name: {
    type: String,
    required: true,
    unique : false
  },
  age: {
    type: String,
    required: true,
  }
}, {collection: 'animals'});

// #3 Az animal sémájához egy pre-hookot adunk hozzá, amely a mentés előtt fut le
animalSchema.pre('save', function(next) {
  const animalNumber = Math.floor((Math.random()*6)+1);
  this.animalNumber = animalNumber;
  return next();
});

// Animal modell
const Animal = mongoose.model('animal', animalSchema);

module.exports = Animal;