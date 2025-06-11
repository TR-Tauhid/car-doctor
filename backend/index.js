import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

const uri =
  "mongodb+srv://tohiburtauhid:wOL5JISohIEvpQpr@cardoctorcollection.sgfep6s.mongodb.net/?retryWrites=true&w=majority&appName=carDoctorCollection";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    const database = client.db("carDoctorDB");
    const servicesCollection = database.collection("servicesCollection");

    // ============  Services  ===============
    app.get("/services", async (req, res) => {
      try {
        const cursor = servicesCollection.find({});
        const services = await cursor.toArray();
        res.status(200).send(services);
      } catch (err) {
        console.error("Error fetching services data: ", err);
        res.status(500).send({ message: "Failed to fetch services data." });
      }
    });

    app.get("/serviceDetails/:id", async (req, res) => {
      try {
        const { id } = req.params;
        const result = await servicesCollection.findOne({
          _id: new ObjectId(id),
        });

        if (!result) {
          return res.status(404).send({ message: "Service not found" });
        }
        res.status(200).send(result);
      } catch (err) {
        console.error("Error fetching service: ", err);
        res.status(500).send({ message: "Failed to fetch service data" });
      }
    });

    app.post("/order", async (req, res) => {
      try {
        const orderedData = req.body;
        const result = await database.collection("orders").insertOne(orderedData);
        console.log("Order placed successfully:", result);
        res.status(201).send({result});
      } catch (err) {
        console.error("Error placing order: ", err);
        res.status(500).send({
          message: "Failed to place order",
          error: err.message,
        });
      }
    });

    app.get("/checkout/:id", async (req, res) => {
      try {
        const { id } = req.params;
        const result = await servicesCollection.findOne({
          _id: new ObjectId(id),
        });

        if (!result) {
          return res.status(404).send({ message: "Service not found" });
        }
        res.status(200).send(result);
      } catch (err) {
        console.error("Error fetching service: ", err);
        res.status(500).send({ message: "Failed to fetch service data" });
      }
    });
  } finally {


  }
}
run().catch(console.dir);

app.get("/", async (req, res) => {
  res.send("Car doctor api is running");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
