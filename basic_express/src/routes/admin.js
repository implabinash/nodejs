import express from "express";

const router = express.Router();

router.get("/add-product", (req, res, next) => {
    res.send(
        '<form method="POST" action="/product"><input type="text" name="message" /> <button type="submit">Send</button></form>',
    );
});

router.post("/product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});

export default router;
