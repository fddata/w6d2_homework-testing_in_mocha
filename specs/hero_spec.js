const assert = require('assert');
const Hero = require('../models/hero.js');

let hero;

describe('Hero', function(){
  beforeEach(function(){

    hero = new Hero('Arthur', 80, 'steak', ['kill the dragon', 'rescue the maiden']);
  });

  it('should have a name', function(){
    const actual = hero.name;
    assert.strictEqual(actual, 'Arthur');
  });

  it('should have health', function(){
    const actual = hero.health;
    assert.strictEqual(actual, 80);
  });

  it('should have favourite food', function(){
    const actual = hero.favFood;
    assert.strictEqual(actual, 'steak');
  });

  it('should be able to speak their name', function(){
    const actual = hero.talk();
    assert.strictEqual(actual, "Hello, my name is Arthur, and I'm here to quest!");
  });

  it('should have a collection of tasks to complete', function(){
    const actual = hero.tasks;
    assert.deepEqual(actual, ['kill the dragon', 'rescue the maiden']);
  });

});



// - A Hero has a name
// - A Hero has health
// - A Hero has a favourite food
// - A Hero can talk saying their name
// - A Hero has a collection of tasks to complete
