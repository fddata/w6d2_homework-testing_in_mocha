const assert = require('assert');
const Hero = require('../models/hero.js');

let hero;

describe('Hero', function(){
  beforeEach(function(){

    hero = new Hero('Arthur', 100, 'steak', ['kill the dragon', 'rescue the maiden']);
  });

  xit('should have a name');
  xit('should have health');
  xit('should have favourite food');
  xit('should be able to speak their name');
  xit('should have a collection of tasks to complete');

});



// - A Hero has a name
// - A Hero has health
// - A Hero has a favourite food
// - A Hero can talk saying their name
// - A Hero has a collection of tasks to complete
