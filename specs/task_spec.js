const assert = require('assert');
const Task = require('../models/task.js');

let task;

describe('Task', function(){
  beforeEach(function(){
    taskKillDragon = new Task('high', 'urgent', 'magic potion');
  });

  xit('should have a difficulty level');
  xit('should have an urgency level');
  xit('should have a reward');
  xit('should be able to be marked as completed');


});




// - A task has a difficulty level
// - A task has an urgency level
// - A task has a reward
// - A task should be able to be marked as completed
