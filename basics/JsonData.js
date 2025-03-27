// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const jsonData = '{"name" :"Vishal","age":26}'; //json as string
const obj = JSON.parse(jsonData);

console.log("Converting JSON as string into js object: ",obj);

const jsond = JSON.stringify(obj);

console.log("Converting the js object into json string: ",jsond);


const objname = { name: "Amit", marks: 97, distinction:true};

const jData = JSON.stringify(objname);
console.log(jData);


const ap = JSON.parse(jData)
console.log(ap);


const DataJ = `{
  "users": [
    { "id": 1, "name": "Alice Johnson", "email": "alice@example.com" },
    { "id": 2, "name": "Bob Smith", "email": "bob@example.com" },
    { "id": 3, "name": "Rina Malik", "email": "Rina@example.com" },
    { "id": 4, "name": "John Thomson", "email": "john@example.com" }
  ],
  "products": [
    { "id": 101, "name": "Gold Ring", "price": 199.99 },
    { "id": 102, "name": "Silver Necklace", "price": 79.99 },
    { "id": 103, "name": "Silver Ring", "price": 249.99 },
    { "id": 104, "name": "Gold Necklace", "price": 279.99 }
  ]
}`;

// console.log(DataJ)
    
    const data = JSON.parse(DataJ);
    
    // console.log(data);
    
    data.users.forEach(user =>{
        console.log(`ID:${user.id}, Name:${user.name}, Email: ${user.email}`);
    });
    
    
    // data.products.forEach(product =>{
    //     console.log(`ID:${product.id}, Name:${product.name}, Email: ${product.email}`);
   // Find the most expensive product
let maxProduct = data.products[0];

data.products.forEach(product => {
  if (product.price > maxProduct.price) {
    maxProduct = product;
  }
});

console.log("Most Expensive Product:", maxProduct);

// Display specific user and product
console.log("\nSecond User Name:", data.users[1].name);
console.log("Second Product Name:", data.products[1].name);
