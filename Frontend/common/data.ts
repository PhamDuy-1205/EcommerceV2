import media from "./media";

const mainData = {
    webName : 'Fruitables',
    address : '123 Street, New York',
    email : 'Email@Example.com',
    phone : '+0123 4567 8910',
}

const productData = [
    {
        id : 1,
        name : 'Oranges',
        category : 'Fruits',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
        price : 6,
        image : media.category_1,
    },
    {
        id : 2,
        name : 'Raspberries',
        category : 'Vegetables',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
        price : 4.99,
        image : media.category_2,
    },
]

export default {
    mainData,
    productData,
};