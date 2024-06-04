import media from "./media";

const mainData = {
    webName : 'Fruitables',
    address : '123 Street, New York',
    email : 'Email@Example.com',
    phone : '+0123 4567 8910',
}

const categoryList = ["All", "Vegetables", "Fruits", "Bread", "Meat"]

const productData = [
    {
        id : 1,
        name : 'Oranges',
        category : 'Fruits',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
        price : 6,
        image : media.orange,
    },
    {
        id : 2,
        name : 'Raspberries',
        category : 'Vegetables',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
        price : 44.99,
        image : media.raspberry,
    },
    {
        id : 3,
        name : 'Apple',
        category : 'Fruits',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
        price : 5,
        image : media.apple,
    },
    {
        id : 4,
        name : 'Banana',
        category : 'Fruits',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
        price : 5,
        image : media.banana,
    },
    {
        id : 5,
        name : 'Bell Pepper',
        category : 'Vegetables',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
        price : 5,
        image : media.bell_pepper,
    },
    {
        id : 6,
        name : 'Broccoli',
        category : 'Vegetables',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
        price : 5,
        image : media.broccoli,
    },
    {
        id : 7,
        name : 'Potato',
        category : 'Vegetables',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
        price : 5,
        image : media.potato,
    },
    {
        id : 8,
        name : 'Strawberry',
        category : 'Fruits',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
        price : 5,
        image : media.strawberry,
    },
    {
        id : 9,
        name : 'Strawberry',
        category : 'Vegetables',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
        price : 5,
        image : media.tomato,
    },
]

export default {
    mainData,
    categoryList,
    productData,
};