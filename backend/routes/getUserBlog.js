const express = require("express");
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();
const router = express.Router();

function convertToNum(str){
    let num = 0;
    let curr = 1;
    for(let i = str.length-1; i>=0; i--){
        num = num + ((str[i] - "0") * curr);
        curr = curr * 10;
    }
    return num;
}
router.post("/", async (req, res) => {
    const {blogId} = req.body;
    const numberBlogId = convertToNum(blogId);
    const response = await prisma.post.findUnique({
        where: {
            "id" : numberBlogId
        }
    });
    res.json(response);
});

module.exports = router;