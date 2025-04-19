var user = {
    name:"Tiya Verma",
    id: 101,
    isPlaced:true,
    //nested object
    adress: {
        city: "Pune",
        state: "MH",
        pincode: 836545582,
        area: {
            area1: "FC Road",
            area2: "Hin",
            area3: "Khardi"
        }
    }
}

console.log(user.adress.city)

console.log(user.adress.area.area1 )

user.adress.city = "Mumbai"
console.log(user )