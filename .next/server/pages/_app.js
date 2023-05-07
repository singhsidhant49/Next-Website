(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: external "next-seo"
const external_next_seo_namespaceObject = require("next-seo");
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
;// CONCATENATED MODULE: ./pages/_app.js





const MyApp = ({ Component , pageProps  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Shero Incorp - Leading Website and Software Development Company"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Shero Incorp is a leading website and software development company that offers custom solutions for businesses of all sizes. Contact us today to learn more."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_namespaceObject.DefaultSeo, {
                title: "Shero Incorp - Leading Website and Software Development Company",
                description: "Shero Incorp is a leading website and software development company that offers custom solutions for businesses of all sizes. Contact us today to learn more.",
                canonical: "https://www.sheroincorp.com",
                openGraph: {
                    type: "website",
                    locale: "en_US",
                    url: "https://www.sheroincorp.com",
                    site_name: "Shero Incorp",
                    title: "Shero Incorp - Leading Website and Software Development Company",
                    description: "Shero Incorp is a leading website and software development company that offers custom solutions for businesses of all sizes. Contact us today to learn more.",
                    images: [
                        {
                            url: "https://www.sheroincorp.com/og-image.png",
                            width: 1200,
                            height: 630,
                            alt: "Shero Incorp - Leading Website and Software Development Company"
                        }
                    ]
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6697));
module.exports = __webpack_exports__;

})();