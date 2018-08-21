const Hero = function (name, health, favFood, tasks){
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.tasks = tasks;
};

Hero.prototype.talk = function () {
  return `Hello, my name is ${this.name}, and I'm here to quest!`;

};

module.exports = Hero;

// - A Hero has a name
// - A Hero has health
// - A Hero has a favourite food
// - A Hero can talk saying their name
// - A Hero has a collection of tasks to complete
