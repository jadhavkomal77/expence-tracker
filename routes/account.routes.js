const { credit, debit } = require("../controllers/account.controller")

const router = require("express").Router()

router
    .post("/credit", credit)
    .post("/debit", debit)

module.exports = router