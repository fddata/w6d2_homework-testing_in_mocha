const assert = require('assert');
const Food = require('../models/food.js');

let food;

describe('Food', function(){
  beforeEach(function(){
    bread = new Food('bread', 15);
  });

  it('should have a name', function(){
    const actual = bread.name;
    assert.strictEqual(actual, 'bread');
  });

  it('should have a replenishment value', function(){
    const actual = bread.replenishmentValue;
    assert.strictEqual(actual, 15);
  });

});



// - Food should have a name
// - Food should have a replenishment value
