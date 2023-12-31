const express = require("express");
const { create, verifyEmail, resendEmailVerificationToken, forgetPassword, sendResetPasswordTokenStatus } = require("../controllers/user");
const { isValidPassResetToken } = require("../middlewares/user");
const { userValidtor, validate } = require("../middlewares/validator");

const router = express.Router();

router.post("/create", userValidtor, validate, create);
router.post("/verify-email", verifyEmail);
router.post("/resend-email-verification-token", resendEmailVerificationToken);
router.post('/forget-password', forgetPassword)
router.post('/verify-pass-reset-token', isValidPassResetToken,sendResetPasswordTokenStatus)
router.post('/reset-password', isValidPassResetToken,sendResetPasswordTokenStatus)
module.exports = router;
