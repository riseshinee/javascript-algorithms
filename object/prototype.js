function Animal(name, type){
  this.name = name;
  this.type = type;
}

/**
 * prototype: 해당 객체의 자바스크립트 object 속성을 동적으로 확장
 */
Animal.prototype.sayName = function(){
  console.log(this.name)
}

Animal.prototype.sayType = function(){
  console.log(this.type)
}

function Dog(name){
  Animal.call(this, name, "Dog");

  Dog.prototype = Object.create(Animal.prototype);
  let myAnimal = new Animal('ditto', 'pokemon');
  myAnimal.sayName();
  myAnimal.sayType();
}