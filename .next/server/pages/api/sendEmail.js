"use strict";
(() => {
var exports = {};
exports.id = 719;
exports.ids = [719];
exports.modules = {

/***/ 2507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "nodemailer"
const external_nodemailer_namespaceObject = require("nodemailer");
var external_nodemailer_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/sendEmail.js

const transporter = external_nodemailer_default().createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: "singhsidhant338@gmail.com",
        pass: "fyivkohjcjesjwct"
    }
});
async function handler(req, res) {
    const { name , email , message , phone , subject  } = req.body;
    try {
        await transporter.sendMail({
            from: "singhsidhant338@gmail.com",
            to: "info@sheroincorp.com",
            subject: `New message from ${name}`,
            text: `${message} ${phone} ${email} ${subject}`
        });
        res.status(200).send("Email sent successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error sending email");
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2507));
module.exports = __webpack_exports__;

})();