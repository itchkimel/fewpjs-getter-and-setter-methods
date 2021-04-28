// Add your Circle class here
let pi = Math.pi

class Circle {
  constructor(radius){
    this.radius = radius
  }

  
  
  
  
  
  
  get diameter(){
    return Circle.diameter = this.radius * 2
  }
  get circumference(){
    return Circle.circumference = pi * this.diameter
  }
  get area(){
    return Circle.area = pi * (this.radius ** 2)
  }

  


   
}