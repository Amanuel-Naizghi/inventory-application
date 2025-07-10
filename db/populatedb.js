const {Client} = require("pg");

const SQL = `
        CREATE TABLE IF NOT EXISTS inventory (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        name VARCHAR (255) NOT NULL,
        img VARCHAR (255),
        price INTEGER,
        quantity INTEGER,
        rating NUMERIC(3,1),
        category VARCHAR(255),
        description VARCHAR(1000)
        );

        INSERT INTO inventory (name,img,price,quantity,rating,category,description)
        VALUES
        ('Honda','Honda',3500,7,4.5,'vehicle','Reliable and comfortable vehicle. Excellent choice for long age and safe driving'),
        ('Toyota','Toyota',4500,3,4.8,'vehicle','Best interior and exterior design with a very reliable services for more than decades'),
        ('Mazda','Mazda',3000,5,4.0,'vehicle','Great vehicle with exceptional speed and performance'),
        ('Nissan','Nissan',2500,10,3.8,'vehicle','Convenient and excellent automobiles with an affordable price'),
        ('BMW','BMW',7000,2,4.9,'vehicle','One of the top 5 vehicle type in the world for a very long time. Best performance and design'),
        ('Ford Mustang','Ford',5000,8,4.7,'vehicle','Iconic American muscle car with high performance and a powerful engine'),
        ('Tesla','Tesla',9000,50,4.9,'vehicle','Luxury electric sedan with cutting-edge technology and long battery life'),
        ('Audi','Audi',8500,20,4.8,'vehicle','A sleek luxury sedan combining technology, comfort, and performance'),
        ('Margherita Pizza','Pizza',25,1,4.0,'food','Classic pizza topped with fresh mozzarella, basil, and tomatoes'),
        ('Avocado Toast','Toast',15,1,4.2,'food','Smashed avocado spread on toasted bread, often topped with a poached egg'),
        ('Chicken Tacos','Tacos',20,1,4.7,'food','Soft tortillas filled with seasoned chicken, lettuce, cheese, and salsa'),
        ('Chocolate Cake','Cake',18,1,4.5,'food','Rich, moist chocolate cake topped with decadent frosting'),
        ('BBQ Ribs','Ribs',28,1,4.4,'food','Tender, slow-cooked ribs glazed with a sweet and smoky barbecue sauce'),
        ('Sofa','Sofa',400,15,4.0,'furniture','Comfortable, durable sofa with removable and washable covers'),
        ('Writing Desk','Desk',250,85,4.8,'furniture','A sleek, minimalist desk ideal for home offices or small spaces'),
        ('Dresser','Dresser',500,8,4.0,'furniture','Stylish dresser with clean lines and plenty of storage space'),
        ('Kitchen Table','Table',150,15,4.5,'furniture','Flexible kitchen table and cabinet designed for saving much space'),
        ('Tape Concealer','Tape',9,150,4.0,'Makeup','Full coverage concealer that brightens and camouflages imperfections'),
        ('Filter Foundation','Foundation',7,200,4.2,'Makeup','Full coverage foundation with a flawless, matte finish'),
        ('Orgasm Blush','Blush',15,90,4.5,'Makeup','Iconic blush with a soft peachy-pink hue and gold shimmer');
`;

async function main (){
    console.log("Seeding.......");
    const client = new Client({
        connectionString: "postgresql://amanuel:Aman1491@localhost:5432/inventory_db",
    });
      await client.connect();
      await client.query(SQL);
      await client.end();
      console.log("done");
}

main();

module.exports ={ main };

