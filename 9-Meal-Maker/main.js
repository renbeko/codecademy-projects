const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get appetizers() {
        return this._courses.appetizers;
    },
    get mains() {
        return this._courses.mains;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set appetizers(appetizersIn) {
        this._courses.appetizers = appetizersIn;
    },
    set mains(mainsIn) {
        this._courses.mains = mainsIn;
    },
    set desserts(dessertsIn) {
        this._courses.desserts = dessertsIn;
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts,
        };
    },

    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        return dishes[Math.floor(Math.random() * dishes.length)];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The total price is ${totalPrice}.`;
    },
};

menu.addDishToCourse('appetizers', 'guacamole', 7.00);
menu.addDishToCourse('appetizers', 'salad', 3.00);
menu.addDishToCourse('appetizers', 'burger', 6.00);

menu.addDishToCourse('mains', 'fries', 2.00);
menu.addDishToCourse('mains', 'steak', 10.00);
menu.addDishToCourse('mains', 'tofu', 4.00);

menu.addDishToCourse('desserts', 'tea', 2);
menu.addDishToCourse('desserts', 'ice cream', 4.55);
menu.addDishToCourse('desserts', 'cake', 6.00);

const meal = menu.generateRandomMeal();
console.log(meal);