const express = require("express");
const router = express.Router();
const Article = require("./../Models/Article");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../Uploads/ArticleImg")); // Le dossier public où les fichiers seront stockés
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Nom du fichier après téléchargement
  },
});

const upload = multer({ storage: storage });


router.use('/Uploads/ArticleImg', express.static(path.join(__dirname, 'Uploads/ArticleImg')));


router.get('/ArticleImg/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, '../Uploads/ArticleImg', filename);
    console.log('File Path:', filePath);

    res.sendFile(filePath, (err) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
});

// Create an article
router.post("/", upload.single("img"), async (req, res) => {
  try {
    const { title, content, date } = req.body;
    const img = req.file ? req.file.filename : ""; // Obtenez le nom du fichier du champ img
    const newArticle = new Article({ title, content, date, img });
    const savedArticle = await newArticle.save();
    res.status(201).json(savedArticle);
  } catch (error) {
    console.error("Error creating article:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Read all articles
router.get("/", async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    console.error("Error getting articles:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Read a single article by ID
router.get("/:id", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ error: "Article not found" });
    }
    res.json(article);
  } catch (error) {
    console.error("Error getting article:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update an article by ID
router.put("/:id", async (req, res) => {
  try {
    const { title, content, date, img } = req.body;
    const updatedArticle = await Article.findByIdAndUpdate(
      req.params.id,
      { title, content, date, img },
      { new: true }
    );
    if (!updatedArticle) {
      return res.status(404).json({ error: "Article not found" });
    }
    res.json(updatedArticle);
  } catch (error) {
    console.error("Error updating article:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete an article by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedArticle = await Article.findByIdAndDelete(req.params.id);
    if (!deletedArticle) {
      return res.status(404).json({ error: "Article not found" });
    }
    res.json(deletedArticle);
  } catch (error) {
    console.error("Error deleting article:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
