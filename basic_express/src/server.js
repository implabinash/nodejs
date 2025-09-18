import express from "express";
import bodyParser from "body-parser";

const PORT = "3000";
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
    res.send(
        '<form method="POST" action="/product"><input type="text" name="message" /> <button type="submit">Send</button></form>',
    );
});

app.post("/product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});

app.use("/", (req, res, next) => {
    res.send("Hello");
});

app.listen(PORT, () => {
    console.log("Listing on port: ", PORT);
});
