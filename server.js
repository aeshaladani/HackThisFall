const express = require("express");
const multer = require("multer");
const fs = require("fs");

const app = express();
const PORT = 3000;

// Multer setup for image upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});
const upload = multer({ storage: storage });

// Middleware to serve static files and parse JSON
app.use(express.json());
app.use(express.static("public"));

// Endpoint to handle form submission
app.post("/submit", upload.single("itemImage"), (req, res) => {
    const { itemName, itemQuantity, itemPrice, itemDescription, itemDetails, email, contact } = req.body;
    const itemImagePath = req.file ? req.file.path : null;

    // Create item object to store
    const itemData = {
        itemName,
        itemQuantity,
        itemPrice,
        itemDescription,
        itemDetails,
        email,
        contact,
        itemImagePath,
    };

    // Read existing data from JSON file
    const filePath = "items.json";
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return res.status(500).json({ error: "Could not read data." });
        }

        const items = data ? JSON.parse(data) : [];
        items.push(itemData);

        // Write updated data back to JSON file
        fs.writeFile(filePath, JSON.stringify(items, null, 2), (err) => {
            if (err) {
                console.error("Error writing file:", err);
                return res.status(500).json({ error: "Could not save data." });
            }

            res.status(200).json({ message: "Item saved successfully!" });
        });
    });
});
app.get("/items", (req, res) => {
    const filePath = "items.json";
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return res.status(500).json({ error: "Could not read data." });
        }

        const items = data ? JSON.parse(data) : [];
        res.json(items);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
app.use(express.static("public"));
// Serve the uploads folder as a static directory
app.use('/uploads', express.static('uploads'));


