class Hamster{
    owner = "";
    constructor(name){
        this.name = name;
    }
    price = 15;

    wheelRun(){
        console.log("squeak squeak")
    }
    eatFood(){
        console.log("nibble nibble")
    }
    getPrice(){
        return this.price;
    }
    setOwner(name){
        this.owner = name;
    }
}

class Person{
    constructor(name){
        this.name = name;
    }
    age = 0;
    height = 0;
    weight = 0;
    mood = 0;
    hamsters = [];
    bankaccount = 0;

    setAge(age){
        //this.age = age;
        for(let i=this.age;i<age;i++){
            this.ageUp();
        }
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getWeight(){
        return this.weight;
    }
    greet(name){
        console.log("Greetings ",name);
    }
    eat(){
        this.weight++;
        this.mood++;
    }
    exercise(){
        this.weight--;
    }

    ageUp(){
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankaccount+=10;
    }
    buyHamster(hamster){
        this.hamsters.push(hamster);
        this.mood+=10;
        this.bankaccount -= hamster.getPrice();
    }
    callEatOrExercise(numberoftimes,activity){
        for(let i=0;i<=numberoftimes;i++){
            if(activity.toLowerCase() == "eat")
                this.eat();
            else
                this.exercise();
        }
    }
}


const timmy = new Person("Timmy");
timmy.greet(timmy.getName());
timmy.setAge(5);
console.log(`${timmy.getName()}'s age is ${timmy.getAge()}`)
console.log(`${timmy.getName()}'s bank balance is ${timmy.bankaccount}`)
console.log(`${timmy.getName()}'s weight is ${timmy.weight}`)
timmy.callEatOrExercise(5,"eat");
timmy.callEatOrExercise(5,"exercise");
timmy.setAge(9);
console.log(`${timmy.getName()}'s age is ${timmy.getAge()}`)
console.log(`${timmy.getName()}'s bank balance is ${timmy.bankaccount}`)
console.log(`${timmy.getName()}'s weight is ${timmy.weight}`)
const pet = new Hamster("Gus");
pet.eatFood();
pet.wheelRun();
pet.setOwner(timmy.getName());
timmy.buyHamster(pet);
timmy.setAge(15);
console.log(`${timmy.getName()}'s age is ${timmy.getAge()}`)
console.log(`${timmy.getName()}'s bank balance is ${timmy.bankaccount}`)
console.log(`${timmy.getName()}'s weight is ${timmy.weight}`)
timmy.callEatOrExercise(2,"eat");
timmy.callEatOrExercise(2,"exercise");



