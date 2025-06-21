import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {
  ConnectionCheckOutStartedEvent,
  MongoClient,
  ObjectId,
  ServerApiVersion,
} from "mongodb";

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
    const ordersCollection = database.collection("ordersCollection");

    // ============  Services  ===============
    app.get("/services", async (req, res) => {
      try {
        const result = await servicesCollection.find({}).toArray();
        res.status(200).send(result);
      } catch (err) {
        console.error("Error fetching services data: ", err);
        res.status(400).json({ message: "Failed to fetch services data." });
      }
    });

    // ===========  Service Details   =============

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
        res.status(400).json({ message: "Failed to fetch service data" });
      }
    });

    // ============  Cart Data  ===============

    app.get("/cart/:uid", async (req, res) => {
      try {
        const { uid } = req.params;
        const result = await ordersCollection.find({ uid: uid }).toArray();
        res.status(201).send(result);
      } catch {
        (err) => console.error(err);
        res.status(400).json({ message: "Faild to fetch cart data...!!!" });
      }

      // {
      //   try {
      //     const { id } = req.params;
      //     const cartItems = await ordersCollection.find({ uid: id }).toArray();

      //     const cartItemIdSet = new Set();

      //     try {
      //       cartItems.forEach((item) => {
      //         if (item.serviceId) {
      //           cartItemIdSet.add(new ObjectId(item.serviceId));
      //         }
      //       });
      //     } catch {
      //       console.error("Invalid service id found in the cart item.");
      //     }

      //     const cartItemIdArray = Array.from(cartItemIdSet);

      //     const result = await servicesCollection
      //       .find({ _id: { $in: cartItemIdArray } })
      //       .toArray();

      //     res.status(201).send(result);
      //   } catch {
      //     (err) => console.error(err);
      //   }

      // }

    });

    // =========== Delete Cart Item   =============

    app.delete("/deleteCartItem/:uid", async (req, res) => {
      const { uid } = req.params;
      const { id } = req.body;
      const result = await ordersCollection.deleteOne({
        _id: new ObjectId(id),
        uid: uid,
      });
      res.status(200).json({ message: "Cart Item Deleted Successfully...!!!" });
    });

    // =========== Delete All Cart Data   =================

    app.delete("/delete-cart/:uid", async (req, res) => {
      try {
        const { uid } = req.params;
        const result = await ordersCollection.deleteMany({ uid: uid });
        res.status(201).send(result);
      } catch {
        (err) => res.status(401).send([{ message: err.message }]);
      }
    });

    // ===========  Manage Orders   ==============

    app.get("/getOrders", async (req, res) => {
      try {
        const result = await ordersCollection.find({}).toArray();
        res.status(201).send(result);
      } catch {
        (err) => res.status(401).send([{ message: err.message }]);
      }
    });

    app.patch("/manageOrders/:uid", async (req, res) => {
      try {
        const { uid } = req.params;
        const { id, approvalStatus } = req.body;
        if (uid === "68JNcuRz5Rhn9FSewm730fhaODo1") {
          const result = await ordersCollection.updateOne(
            { _id: new ObjectId(id) },
            { $set: { approvalStatus: approvalStatus } }
          );
          res.send(result);
        } else {
          res
            .status(400)
            .json({ message: "You are not authorized to modify orders...!!!" });
        }
      } catch {
        (err) => console.error(err);
      }
    });

    // ============  Add Service  ===============

    app.post("/addService", async (req, res) => {
      try {
        const serviceData = req.body.data;
        const result = await servicesCollection.insertOne(serviceData);
        res.status(201).send({ result });
      } catch (err) {
        console.error("Error in addService: ", err);
        res.status(400).json({
          message: "Failed to add service",
          error: err.message,
        });
      }
    });

    // ============  Add Order  ===============

    app.post("/order", async (req, res) => {
      try {
        const orderedData = req.body;
        const result = await database
          .collection("ordersCollection")
          .insertOne(orderedData);
        res.status(201).send({ result });
      } catch (err) {
        console.error("Error placing order: ", err);
        res.status(400).json({
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
        res.status(400).json({ message: "Failed to fetch service data" });
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
