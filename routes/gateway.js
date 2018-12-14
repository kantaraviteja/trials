const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
    console.log(`id is hit with : ${req.params.id}`);
    next();    
});

router.get("/:id", (req, res)=>{
    res.json({
        "status": "sucess",
        "user": {
            "id": req.params.id
        }
    });
});

module.exports = router;