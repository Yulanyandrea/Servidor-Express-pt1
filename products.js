const express = require("express");
const app = express();

const product=[
    {
      "id": 1,
      "title": "new Title marcos",
      "price": 100004,
      "description": "new Description",
      "images": [
        "https://api.lorem.space/image/shoes?w=640&h=480&r=5193",
        "https://api.lorem.space/image/shoes?w=640&h=480&r=2221",
        "https://api.lorem.space/image/shoes?w=640&h=480&r=2672"
      ]
    },
    {
      "id": 3,
      "title": "new try",
      "price": 29,
      "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
      "images": [
        "https://api.lorem.space/image/fashion?w=640&h=480&r=4308",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=4555",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=4493"
      ]
    },
    {
      "id": 4,
      "title": "Licensed Plastic Table",
      "price": 808,
      "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      "images": [
        "https://api.lorem.space/image/fashion?w=640&h=480&r=6769",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=6810",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=2350"
      ]
    },
    {
      "id": 5,
      "title": "Refined Plastic Shirt",
      "price": 252,
      "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      "images": [
        "https://api.lorem.space/image/watch?w=640&h=480&r=9592",
        "https://api.lorem.space/image/watch?w=640&h=480&r=6436",
        "https://api.lorem.space/image/watch?w=640&h=480&r=4565"
      ]
    }
  ]

const about={
    "name": "Yulany Munévar",
    "age": "29",
    "email": "andra_852@hotmail.com",
    "phone": "32338745",
    "address":"street 1 73 03",
    "city":"Bogotá",
    "headline":"Head of mentors",
    "links": [{
        "name":"LinkedIn",
        "url":"https://www.linkedin.com/in/yulanymunevar/",

    },{
        "name":"Github",
        "url":"https://github.com/Yulanyandrea"
    
    },
      
    ],
    "skills": [{
        "name":"Python",
        "level":"basic",

    },{
        "name":"JavaScript",
        "level":"basic"
    
    },{
        "name":"Java",
        "level":"basic"
    
    },
      
    ],
    
  }

app.get("/api/product", (req, res) => {
    res.json(product);
  });

app.get("/info",(req,res)=>{
    res.send(`<p>Our store has info for ${product.length} products </p>
    <p>${new Date()}</p>`
    )
})

app.get("/about",(req,res)=>{
    res.json(about)
})


  app.listen(8080)
  console.log(`Server on port ${8080}`)