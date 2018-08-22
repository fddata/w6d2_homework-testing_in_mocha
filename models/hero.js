const Hero = function (name, health, favFood, tasks){
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.tasks = tasks;
};

Hero.prototype.talk = function () {
  return `Hello, my name is ${this.name}, and I'm here to quest!`;
};

Hero.prototype.eatFood = function (food) {
  if (food.isPoisonous === true){
    this.health *= 0.5;
  }
  else if(this.favFood.name === food.name){
   this.health += (food.replenishmentValue * 1.5);
  }
 else {
   this.health += food.replenishmentValue;
 }
};


Hero.prototype.sortTasks = function (property) {
  this.tasks.sort(function(a,b){
    return a[property] - b[property];
  });
};


Hero.prototype.sortTasksReverse = function (property) {
  this.tasks.sort(function(a,b){
    return b[property] - a[property];
  });
};



Hero.prototype.viewTasksComplete = function () {
  // arrow function for tasks complete
   return this.tasks.filter(task => task.complete == true);
};

Hero.prototype.viewTasksIncomplete = function () {
  // arrow function for tasks incomplete
  return this.tasks.filter(task => task.complete == false);
};


module.exports = Hero;

// - A Hero has a name
// - A Hero has health
// - A Hero has a favourite food
// - A Hero can talk saying their name
// - A Hero has a collection of tasks to complete

// A hero should be able to eat food, and health should go up by the replenishment value
// - If the food is their favourite food, their health should go up by 1.5 * value.
// - A hero should be able to sort their tasks by difficulty, urgency or reward.
// - A hero should be able to view tasks that are marked as completed or incomplete.
