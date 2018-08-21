const Task = function(difficulty, urgency, reward){
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.complete = false;
};


Task.prototype.markComplete = function () {
  this.complete = true;
};

module.exports = Task;


// - A task has a difficulty level
// - A task has an urgency level
// - A task has a reward
// - A task should be able to be marked as completed
