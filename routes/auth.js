/*
    User Routes / Auth
    host + /api/auth
*/

const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();
const { validateFields } = require("../middlewares/fields-validator");

// Auth functions imports
const {
  createUser,
  loginUser,
  revalidateToken,
} = require("../controllers/auth");

const { jwtValidator } = require("../middlewares/jwt-validator");

router.post(
  "/new",
  [
    // Middlewares
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").not().isEmpty(),
    check("email", "El email no es valido").isEmail(),
    check("password", "El password debe de ser minimo 6 caracteres").isLength({
      min: 6,
    }),
    validateFields,
  ],
  createUser
);

router.post(
  "/",
  [
    check("email", "El email es obligatorio").not().isEmpty(),
    check("email", "El email es incorrecto").isEmail(),
    check(
      "password",
      "El password debe de ser minimo de 6 caracteres"
    ).isLength({ min: 6 }),
    validateFields,
  ],
  loginUser
);

router.get("/renew", jwtValidator, revalidateToken);

module.exports = router;
