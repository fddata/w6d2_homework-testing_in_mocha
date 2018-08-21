const Rat = function(){};

Rat.prototype.touchFood = function (food) {
  food.isPoisonous = true;
};

module.exports = Rat;



// - Create a constructor to create Rat objects.
// - Rats should be able to touch food,  if they do the food becomes poisonous.
// - Heroes that eat poisonous food should lose health.
