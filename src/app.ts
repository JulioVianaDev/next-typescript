interface Greetable{
 name: string;
 greet(phrase: string): void 
}

class Person implements Greetable{
  name: string;
  age = 30; 
  constructor(n:string){
    this.name = n;
  }
  greet(phrase: string): void {
     console.log(phrase + " " + this.name)
  }
}
let user1: Greetable;
user1 = new Person('tomate');

user1.greet("olá ")