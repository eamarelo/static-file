// const Register = require("./auth/register.js")
// const Login = require("./auth/login.js")
// const ResetPassword = require("./auth/resetPassword.js")

// const ReadUser = require("./users/read.js")
const GetPdf = require("./pdf/getPdf.js")
const ReadPdf = require("./pdf/readPdf.js")

module.exports = {
  pdf: {
    GetPdf,
    ReadPdf
  }
}
