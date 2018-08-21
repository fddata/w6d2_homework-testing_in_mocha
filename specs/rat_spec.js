const assert = require('assert');
const Rat = require('../models/rat.js');
const Food = require('../models/food.js');

let bread, rat;

describe('Rat', function(){
  beforeEach(function(){
    rat = new Rat();
    bread = new Food('bread', 15);
  });

  it('should be able to poison food by touching', function(){
    rat.touchFood(bread);
    const result = bread.isPoisonous;
    assert.strictEqual(result, true);
  });


});



// - Rats should be able to touch food,  if they do the food becomes poisonous.
// - Heroes that eat poisonous food should lose health.
