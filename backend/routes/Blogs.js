const express = require("express");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const router = express.Router();

router.post("/", async (req, res) => {
    const response = await prisma.post.findMany();
    res.json({
        "Blogs" : response
    });
});

module.exports = router;