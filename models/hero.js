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

//generic task sorting ascending
Hero.prototype.sortTasks = function (property) {
  this.tasks.sort(function(a,b){
    return a[property] - b[property];
  });
};

//generic task sorting descending
Hero.prototype.sortTasksReverse = function (property) {
  this.tasks.sort(function(a,b){
    return b[property] - a[property];
  });
};



Hero.prototype.viewTasksComplete = function () {
  // arrow function for tasks complete, note == true isn't necessary
   // return this.tasks.filter(task => task.complete == true);
   return this.tasks.filter(task => task.complete);
};

Hero.prototype.viewTasksIncomplete = function () {
  // note == false is unnecessary as .complete is a boolean
  // return this.tasks.filter(task => task.complete == false);
  return this.tasks.filter(task => !task.complete);
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
