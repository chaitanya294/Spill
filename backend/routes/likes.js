const express = require("express");
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();
const router = express.Router();

router.post("/", async (req, res) => {
    const blogId = req.body.blogId;
    const updatePosts = await prisma.post.update({
        where : {
            "id" : blogId
        },
        data: {
          like: {
            increment: 1,
          },
        },
    });
    res.json({
        "msg" : "Liked"
    })
})

module.exports = router;