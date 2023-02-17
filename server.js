const express= require("express");
const app= express;

require("/server/config/joker.config");

app.use(express.json(),express.urlencoded({extended: true}));

const AllMyUserRoutes= require("/server/routes/joker.routes");
AllMyUserRoutes(app);
app.listen(8000,()=>console.log("The sserver is all fired up on port 8000"));