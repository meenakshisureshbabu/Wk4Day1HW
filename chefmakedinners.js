class Dinner{
    constructor(appetizer,entree,dessert){
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;
    }
}


class Chefs{


    makeDinner(appetizer,entree,dessert){
        const dinner = new Dinner(appetizer,entree,dessert);
        return dinner;
    }
}

const chef = new Chefs();
console.log(chef.makeDinner("Deviled Eggs","Hot dogs","Apple Pie"));
console.log(chef.makeDinner("Hogs in a blanket","Hamburger","Texas Sheet Cake"))
console.log(chef.makeDinner("Baked chicken wings","Chicken Casserole","Brownies"));