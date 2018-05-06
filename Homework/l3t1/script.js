/*
Task:
Parent class Machine is given below:
function Machine(power) {
 this._power = power;
 this._enabled = false;
 var self = this;
 this.enable = function() { self._enabled = true; };
 this.disable = function() { self._enabled = false; };
}
Create a class Fridge, which inherits from Machine. Fridge has private property food and public methods
addFood(..) and getFood(..).
- private property food is an array of food items.
- method addFood(item) adds to food array new food item, you may call it with several arguments:
addFood(item1, item2, …) for adding several food items at once.
- if the fridge is off, it is impossible to add food items (error)
- max quantity of food items is limited and equals to power / 100 - (where power is the power of our fridge
(from constructor)). tries to add more food items cause errors.
- public method getFood() returns food array from the fridge. work with this array shouldn’t affect the property
of the class.
*/

function Machine(power){
 this._power = power;
 this._enabled = false;
 var self = this;
 this.enable = function() { self._enabled = true; };
 this.disable = function() { self._enabled = false; };
}   

function Fridge(power){
	Machine.apply(this, arguments);
	var food = [];
	var maxQuantity = power/100;
	this.addFood = function(){		
		if (!this._enabled){ 
			alert("Turn please fridge on");
		} 
        else if ((food.length + arguments.length) > maxQuantity){
			alert("A lot of food! You may put only" + (maxQuantity - food.length) + " item(s)");
		} 
            else{
                for(var i = 0; i< arguments.length; i++) {
				food.push(arguments[i]);
			}
		}
	}
	
	this.getFood = function(){
		return food.slice();
	}		
}

var myFridge = new Fridge(1000);

myFridge.enable();

myFridge.addFood('soup', 'juce', 'second dish');
console.log(myFridge.getFood());

console.log(myFridge.getFood());

myFridge.addFood('apple', 'pineapple', 'lemon', 'carrot');
console.log(myFridge.getFood());
