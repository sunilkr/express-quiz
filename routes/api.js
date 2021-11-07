const express = require("express");
const { NotImplemented } = require("http-errors");

var router = express.Router();

router.get("start", function (req, res, next) {
    throw NotImplemented();
});

router.get("next", function (req, res, next) {
    throw NotImplemented();
});

router.get("previous", function (req, res, next) {
    throw NotImplemented();
});

router.post("check", function (req, res, next) {
    throw NotImplemented();
});

router.post("finalize", function (req, res, next) {
    throw NotImplemented();
});

module.exports =  router;
