/*
 *   Events Routes / Events
 *   /api/events
 */

const { Router } = require("express");
const router = Router();
const { check } = require("express-validator");
const { jwtValidator } = require("../middlewares/jwt-validator");
const { validateFields } = require("../middlewares/fields-validator");
const { isDate } = require("../helpers/isDate");

const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/events");

//! Validate jsonwebtoken in all the routes
router.use(jwtValidator);

// ! Get Events
router.get("/", getEvents);

// ! Create Events
router.post(
  "/",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatoria").custom(isDate),
    check("end", "Fecha de finalizacion es obligatoria").custom(isDate),
    validateFields,
  ],
  createEvent
);

// ! Update Events
router.put("/:id", updateEvent);

// ! Delete Events
router.delete("/:id", deleteEvent);

module.exports = router;
