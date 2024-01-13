const express = require("express");
const router = express.Router();
const Inscr = require("./../Models/inscription");
const multer = require('multer');
const path = require('path');

router.use(express.json());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './Uploads/CV');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: storage,
});
router.use('/Uploads/CV', express.static(path.join(__dirname, '/Uploads/CV')));

router.get('/CV/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, '../Uploads/CV', filename);
    console.log('File Path:', filePath);

    res.sendFile(filePath, (err) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
});
  


router.get("/", (req, res) => {
    Inscr.find().then((users) => {
        res.send(JSON.stringify(users))
    }).catch((err) => {
        console.log(err)
    })
})

router.delete("/", (req, res) => { //delete all inscriptions
    Inscr.deleteMany({}).then((users) => {
        res.send(JSON.stringify(users))
    }).catch((err) => {
        console.log(err)
    })
})

router.post("/", upload.single('CV'), (req, res) => {
    console.log(req.body)
    console.log(req.file);
    email = req.body.Email
    Inscr.findOne({Email:email}).then((user)=>{
        if(user){
            return res.status(422).send(JSON.stringify({error: 'Email already exists'}))
        }else{
            const newInscr = new Inscr({
                Nom: req.body.Nom,
                Prenom: req.body.Prenom,
                Email: req.body.Email,
                Phone: req.body.Phone,
                Birthday: req.body.Birthday,
                Genre: req.body.Genre,
                Region: req.body.Region,
                Status: req.body.Status,
                Universite: req.body.Universite,
                Classe: req.body.Classe,
                DomaineExpertise: req.body.DomaineExpertise,
                NiveauExperience: req.body.NiveauExperience,
                Partage: req.body.Partage,
        
            })
            if (req.file) {
                console.log(`File uploaded: ${req.file}`);
                newInscr.CV = req.file.filename; // Use req.file.filename to get the stored filename
            }
            
            newInscr.save().then((result) => {
                console.log(result)
                res.status(200).send(JSON.stringify(result))
            }).catch(err => {
                console.log(err)
                res.status(400).send(JSON.stringify({ error: "Error adding this to the db" }))
            })
        }
    }).catch(err=>{
        res.status(400).json({err:"error while finding mail"})
    })
    
})

// Delete a single inscription by email
router.delete("/single", async (req, res) => {
    try {
        const emailToDelete = req.body.email;

        if (!emailToDelete) {
            return res.status(400).json({ error: 'Email not provided in the request body' });
        }

        const deletedInscription = await Inscr.findOneAndDelete({ Email: emailToDelete });

        if (!deletedInscription) {
            return res.status(404).json({ error: 'Inscription not found' });
        }

        res.json(deletedInscription);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

Inscr.find({}).exec()
    .then((documents) => {
        // Access the CV field in each document
        documents.forEach((document) => {
            const cvValue = document.CV;
            if (cvValue !== null && cvValue !== undefined) {
                console.log(`CV value in document: ${cvValue}`);
            } else {
                console.log(`CV value in document is null or undefined`);
            }
        });
    })
    .catch((err) => {
        console.error(err);
    });




module.exports = router