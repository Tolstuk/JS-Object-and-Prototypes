// `Food` object.
function Food(){
}

// method to `juice()` 
Food.prototype.juice = function(){
  console.log('juicing! '+ this.name);
}

// Add a method to print the name of the fruit called `sayName()`.
Food.prototype.sayName = function(){
  console.log('I am food and my name is '+ this.name);
}

// Create a `fruit` object that inherits from Food. Fruits have names. Make sure to save them.
function Fruit(){
}
Fruit.prototype =Object.create(Food.prototype);


// Create an `Apple` object that inherits 

function Apple(name){
  this.name=name;
  this.hasSkin = true
  this.peel = function (){
    console.log("skinning "+this.name);
    this.hasSkin = false
  }
}

Apple.prototype=Object.create(Fruit.prototype)

var Fuji = new Apple("Fuji");
var Gala = new Apple("Gala");

// * Create a `Vegetable` object that inherits from Food. 

function Vegetable(name){
  this.name=name;
  }
//where it inherits
Vegetable.prototype=Object.create(Food.prototype)

Vegetable.prototype.wash = function(){
  console.log("washing "+this.name);
}
// Create a `Carrot` object that inherits 
var Carrot= new Vegetable("Carrots");

var x =
  Fuji.sayName()+
  Gala.sayName()+
  Fuji.peel()+
  Gala.peel()+
  Fuji.juice()+
  Gala.juice()+
  Carrot.sayName()+
  Carrot.wash()+
  Carrot.juice()

