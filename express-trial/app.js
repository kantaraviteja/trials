const express = require("express");
const app = express();
const port = 3000;

const gateway = require("./routes/gateway");

app.use("/gateway", gateway);
``
app.get("/:userId", (req,res)=>{
    res.send(`welcome ${req.params.userId}`);
});

app.listen(port, () => console.log(`Let's rock..!! at port: ${port}`));