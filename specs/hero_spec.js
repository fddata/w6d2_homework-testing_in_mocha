const assert = require('assert');
const Hero = require('../models/hero.js');
const Food = require('../models/food.js');
const Task = require('../models/task.js');

let hero, bread, steak, taskWashBoots, taskKillDragon, taskRescueMaiden;


describe('Hero', function(){
  beforeEach(function(){

    hero = new Hero('Arthur', 50, steak, [taskKillDragon, taskWashBoots, taskRescueMaiden]);
    bread = new Food('bread', 15);
    steak = new Food('steak', 30);
    taskKillDragon = new Task(85, 90, 'magic potion');
    taskRescueMaiden = new Task(50, 50, 'gold pieces');
    taskWashBoots = new Task(5, 100, 'clean boots');
  });

  it('should have a name', function(){
    const actual = hero.name;
    assert.strictEqual(actual, 'Arthur');
  });

  it('should have health', function(){
    const actual = hero.health;
    assert.strictEqual(actual, 50);
  });

  it('should have favourite food', function(){
    const actual = hero.favFood.name;
    assert.strictEqual(actual, 'steak');
  });

  it('should be able to speak their name', function(){
    const actual = hero.talk();
    assert.strictEqual(actual, "Hello, my name is Arthur, and I'm here to quest!");
  });

  it('should have a collection of tasks to complete', function(){
    const actual = hero.tasks;
    assert.deepEqual(actual, [taskKillDragon, taskWashBoots, taskRescueMaiden]);
  });

  it('should be able to eat food and increase health by replenishment value', function(){
    hero.eatFood(bread);
    const actual = hero.health;
    assert.strictEqual(actual, 65);
  });

  it('should be able to increase health by 1.5X replenishment value if is favourite food', function(){
    hero.eatFood(steak);
    const actual = hero.health;
    assert.strictEqual(actual, 95);
  });

  it('should be able to sort their tasks by difficulty', function(){
    hero.sortTaskDifficultyEasy();
    const actual = hero.tasks;
    assert.deepEqual(actual, [taskWashBoots,  taskRescueMaiden, taskKillDragon ]);
  });

  it('should be able to sort their tasks by difficulty reversed', function(){
    hero.sortTaskDifficultyHard();
    const actual = hero.tasks;
    assert.deepEqual(actual, [taskKillDragon, taskRescueMaiden, taskWashBoots ]);
  });

  it('should be able to sort their tasks by urgency', function(){
    hero.sortTaskUrgencyNotUrgent();
    const actual = hero.tasks;
    assert.deepEqual(actual, [taskRescueMaiden, taskKillDragon, taskWashBoots]
    );
  });

  it('should be able to sort their tasks by urgency reversed', function(){
    hero.sortTaskUrgencyUrgent();
    const actual = hero.tasks;
    assert.deepEqual(actual, [taskWashBoots, taskKillDragon, taskRescueMaiden]
    );
  });

});



// - A Hero has a name
// - A Hero has health
// - A Hero has a favourite food
// - A Hero can talk saying their name
// - A Hero has a collection of tasks to complete
