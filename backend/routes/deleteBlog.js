const express = require("express");
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();
const router = express.Router();

router.post("/", async (req, res) => {
    const blogId = req.body.blogId;
    const response = await prisma.post.delete({
        where : {
            "id" : blogId,
        }
    });
    res.json({
        "msg" : "Blog removed"
    });
});

module.exports = router;