const express = require("express");
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();
const router = express.Router();
const middleware = require("../middleware/middleware");

router.post("/", middleware, async (req, res) => {
    const response = await prisma.post.findMany({
        where : {
            authorId : req.headers._id
        }
    });
    res.json({
        "Blogs" : response
    });
});

module.exports = router;