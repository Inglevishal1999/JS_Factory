var products = {
    name: "Iphone 14 pro",
    price: 115000,
    rating: 4.6,
    stock: true,
    category:"Electronic",
    price: 60000
};
console.log(products)

//modify andupdate the property

products.name = "Samsung Galaxy S23 Ultra"
products.price = 125000

delete products.stock
console.log(products)
