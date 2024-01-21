const express = require("express");
const router = express.Router();
const Collab = require("./../Models/Collab");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../Uploads/collabImg")); // The public folder where files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // File name after upload
  },
});

const upload = multer({ storage: storage });

router.use('/Uploads/collabImg', express.static(path.join(__dirname, 'Uploads/collabImg')));

router.get('/collabImg/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, '../Uploads/collabImg', filename);
    console.log('File Path:', filePath);

    res.sendFile(filePath, (err) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
});

// Create a collab
router.post("/", upload.single("img"), async (req, res) => {
  try {
    const { partenaire, type, website, offer, postuleForm } = req.body;
    const img = req.file ? req.file.filename : "";
    console.log(req.file)
    const newCollab = new Collab({ partenaire, type, website, offer, postuleForm, img });
    const savedCollab = await newCollab.save();
    res.status(201).json(savedCollab);
  } catch (error) {
    console.error("Error creating collab:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Read all collabs
router.get("/", async (req, res) => {
  try {
    const collabs = await Collab.find();
    res.json(collabs);
  } catch (error) {
    console.error("Error getting collabs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Read a single collab by ID
router.get("/:id", async (req, res) => {
  try {
    const collab = await Collab.findById(req.params.id);
    if (!collab) {
      return res.status(404).json({ error: "Collab not found" });
    }
    res.json(collab);
  } catch (error) {
    console.error("Error getting collab:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update a collab by ID
router.put("/:id", async (req, res) => {
  try {
    const { partenaire, type, website, offer, postuleForm, img } = req.body;
    const updatedCollab = await Collab.findByIdAndUpdate(
      req.params.id,
      { partenaire, type, img, website, offer, postuleForm },
      { new: true }
    );
    if (!updatedCollab) {
      return res.status(404).json({ error: "Collab not found" });
    }
    res.json(updatedCollab);
  } catch (error) {
    console.error("Error updating collab:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete a collab by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedCollab = await Collab.findByIdAndDelete(req.params.id);
    if (!deletedCollab) {
      return res.status(404).json({ error: "Collab not found" });
    }
    res.json(deletedCollab);
  } catch (error) {
    console.error("Error deleting collab:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
