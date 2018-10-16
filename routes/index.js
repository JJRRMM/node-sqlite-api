// index.js 

const router = require("express").Router();
const pagesRoutes = require("./api/Pages");


//  routes
router.use("/", pagesRoutes);

module.exports = router;