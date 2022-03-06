const express = require("express");

const router = express.Router();
router.post("/", (req, res) =>{
    res.json({ id : 1, contetn : "hellos"});
});

router.delete("/", (req, res) =>{
    res.json({ id : 1});
});

module.exports = router;