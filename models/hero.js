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
 if(this.favFood.name === food.name){
   this.health += (food.replenishmentValue * 1.5);
 }
 else {
   this.health += food.replenishmentValue;
 }
};


Hero.prototype.sortTaskDifficultyEasy = function () {
  this.tasks.sort(function(a,b){
    return a.difficulty - b.difficulty;
  });
};

Hero.prototype.sortTaskDifficultyHard = function () {
  this.tasks.sort(function(a,b){
    return b.difficulty - a.difficulty;
  });
};


Hero.prototype.sortTaskUrgencyNotUrgent = function () {
  this.tasks.sort(function(a,b){
    return a.urgency - b.urgency;
  });
};

Hero.prototype.sortTaskUrgencyUrgent = function () {
  this.tasks.sort(function(a,b){
    return b.urgency - a.urgency;
  });
};


Hero.prototype.viewTasksComplete = function () {
   return this.tasks.filter(function(i) {return (i.complete == true);

   });
};

Hero.prototype.viewTasksIncomplete = function () {
   return this.tasks.filter(function(i) {return (i.complete == false);

   });
};

// ar = [ 1, 2, 3, 4 ];
// ar = ar.filter( function(item) {
//     return !(item > 3);
// });



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
