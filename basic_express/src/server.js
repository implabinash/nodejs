import express from "express";
import bodyParser from "body-parser";

import adminRoute from "./routes/admin.js";
import shopRoute from "./routes/shop.js";

const PORT = "3000";
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoute);

app.use(shopRoute);

app.use((req, res, next) => {
    res.status(404).send("Page not found");
});

app.listen(PORT, () => {
    console.log("Listing on port: ", PORT);
});
