// routes/api/Pages.js

const router = require("express").Router();

const pagesController = require("../../controllers/PagesController");
 // get all records (read) 
router.route("/api/pages")
.get(pagesController.findAll)
// get one record with id  (read)
router.route("/api/pages/:id")
.get(pagesController.findOne)
//  post json file to database (create)
router.route("/api/pages")
.post(pagesController.create)
//  delete record from database by id  (delete)
router.route("/api/pages/:id")
.delete(pagesController.remove)
// update record in database by id (update)
router.route("/api/pages/update")
.patch(pagesController.update)

module.exports = router;




