console.log('sanity')
// Rides
// Create a Child class that takes a height, name, and age.
// Create a Ride class that takes a minimum and maximum height.
// Create two instances of each.
// Write a function that takes a ride object and a child object as arguments and determines if the child is take enough for the ride (return true or false).

var Rides = function(height, name, age) {
  this.height = height;
  this.name = name;
  this.age = age;
};

var adam = new Rides(5.5, 'Adam', 30);
var sam = new Rides(5.2, 'Sam', 30);

Rides.prototype.tallEnough = function(ride, child) {
  if (this.age > 10 && this.height > 5.4) {
    return true;
  } else {
    return false;
  }
};

console.log(adam.tallEnough());
console.log(sam.tallEnough());

console.log(sam +"s" + adam + "a");

// Miles
// Create a Car class that takes the miles per gallon and gallons in a tank.
// Create a Route class that takes the total miles to the destination, the destination name, and location (city and state).
// Create two instances of each.
// Write a function that takes a car object and a route object as arguments and determines if the car has enough gas to make the entire route (return true or false).

var Class = function ( mpg, gallons) {
  this.mpg = mpg;
  this.gallons = gallons;
};

var ford = new Class(30, 15);
var toyota = new Class(50, 12);

var Route = function (totalMiles, name, city, state) {
  this.totalMiles = totalMiles;
  this.name = name;
  this.city = city;
  this.state = state;
};

var breakfast = new Route(10, 'food', 'Denver', 'CO');
var alaska = new Route(1000, 'cold', 'Anchorage', 'Alaska');

Class.prototype.enoughGas = function (car, route) {
  if ((car.mpg * car.gallons) > route.totalMiles) {
    return true;
  } else {
    return false;
  }
};

console.log(ford.enoughGas(ford, alaska));
