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
    const blogId = convertToNum(req.body.blogId);
    const response = await prisma.post.update({
        where: {
            "id" : blogId,
        },
        data: {
            title : req.body.title,
            content : req.body.content,
            category : req.body.category
        }
    });
    res.json({});
});

module.exports = router;