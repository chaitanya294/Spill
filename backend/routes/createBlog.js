const express = require("express");
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();
const router = express.Router();
const middleware = require("../middleware/middleware");

router.post("/", middleware, async(req, res)=> {
    const {title, content, isAnonymous, category} = req.body;
    const authorId = req.headers._id;
    const response = await prisma.post.create({
        data : {
            title : title,
            content : content,
            isAnonymous : isAnonymous,
            category : category,
            authorId : authorId,
        }
    });
    res.json({
        "Blog" : response
    });
});

module.exports = router;