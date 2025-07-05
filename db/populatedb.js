const {Client} = require("pg");

const SQL = `
        CREATE TABLE IF NOT EXISTS inventory (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        name VARCHAR (255) NOT NULL,
        quantity INTEGER,
        rating NUMERIC(3,1),
        category VARCHAR(255),
        description VARCHAR(1000)
        );

        INSERT INTO inventory (name,quantity,rating,category,description)
        VALUES
        ('Honda',7,4.5,'vehicle','Reliable and comfortable vehicle. Excellent choice for long age and safe driving'),
        ('Toyota',3,4.8,'vehicle','Best interior and exterior design with a very reliable services for more than decades'),
        ('Mazda',5,4.0,'vehicle','Great vehicle with exceptional speed and performance'),
        ('Nissan',10,3.8,'vehicle','Convenient and excellent automobiles with an affordable price'),
        ('BMW',2,4.9,'vehicle','One of the top 5 vehicle type in the world for a very long time. Best performance and design');

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

