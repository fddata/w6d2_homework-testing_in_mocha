const assert = require('assert');
const Task = require('../models/task.js');

let task;

describe('Task', function(){
  beforeEach(function(){
    taskKillDragon = new Task(85, 90, 'magic potion');
  });

  it('should have a difficulty level', function(){
    const actual = taskKillDragon.difficulty;
    assert.strictEqual(actual, 85);
  });

  it('should have an urgency level',function(){
    const actual = taskKillDragon.urgency;
    assert.strictEqual(actual, 90);
  });

  it('should have a reward', function(){
    const actual = taskKillDragon.reward;
    assert.strictEqual(actual, 'magic potion');
  });

  it('should be able to be marked as completed', function(){
    taskKillDragon.markComplete();
    const actual = taskKillDragon.complete;
    assert.strictEqual(actual, true);
  });



});




// - A task has a difficulty level
// - A task has an urgency level
// - A task has a reward
// - A task should be able to be marked as completed
