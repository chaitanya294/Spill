const express = require("express");
const middleware = require("../middleware/middleware");
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();
const router = express.Router();

router.post("/", middleware, async (req, res) => {
    const content = req.body.content;
    const blogId = req.body.blogId;
    const updateBlog = await prisma.post.update({
        where: {
          id: blogId,
        },
        data: {
          content: content,
        },
    });
    res.json({
        "msg" : "Blog is updated"
    });
});

module.exports = router;