exports.id = 597;
exports.ids = [597];
exports.modules = {

/***/ 131:
/***/ ((module) => {

// Exports
module.exports = {
	"BottomSectionContainer": "styles_BottomSectionContainer__f4Xi4",
	"BottomCard": "styles_BottomCard__WcpYW",
	"BottomCardHead": "styles_BottomCardHead__X0nTA"
};


/***/ }),

/***/ 716:
/***/ ((module) => {

// Exports
module.exports = {
	"cardsContainer": "styles_cardsContainer__yA3UU",
	"card": "styles_card__Vl5v2",
	"bgImg": "styles_bgImg__nw_86",
	"fnakImg": "styles_fnakImg__Itbgv",
	"detailCardContainer": "styles_detailCardContainer__XQMHK"
};


/***/ }),

/***/ 174:
/***/ ((module) => {

// Exports
module.exports = {
	"highlightContainer": "styles_highlightContainer__OEMg4",
	"titleSection": "styles_titleSection__95j74"
};


/***/ }),

/***/ 597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ highlight)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./components/highlight/cardSection/cardList/styles.module.scss
var styles_module = __webpack_require__(716);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./components/highlight/cardSection/cardList/Card.tsx



const Card = (props)=>{
    const { 0: DetailVisibility , 1: setDetailVisibility  } = (0,external_react_.useState)(false);
    const { 0: details , 1: setDetails  } = (0,external_react_.useState)({
        title: "SOLFENNEX",
        subTitle: "UNIVERSE",
        desc: "Our project is based on outstanding art with a variety ofhandcrafted features. Being one of the best an"
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (styles_module_default()).card,
                onMouseEnter: ()=>{
                    setDetailVisibility(true);
                },
                onMouseLeave: ()=>{
                    setDetailVisibility(false);
                },
                children: [
                    !DetailVisibility && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: (styles_module_default()).bgImg,
                        src: "assets/images/3/mac2.png"
                    }),
                    DetailVisibility && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: (styles_module_default()).bgImg,
                        src: "assets/svg/loz1.svg"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: (styles_module_default()).fnakImg,
                        src: props.fnakImg
                    })
                ]
            }),
            DetailVisibility && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (styles_module_default()).detailCardContainer,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        children: details.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        children: details.subTitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: details.desc
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const cardList_Card = (Card);

;// CONCATENATED MODULE: ./components/highlight/cardSection/cardList/consts.tsx
const cardList = [
    {
        fnakImg: "assets/images/3/fnak1.png",
        fnakDescreption: "test"
    },
    {
        fnakImg: "assets/images/3/fnak2.png",
        fnakDescreption: "test"
    },
    {
        fnakImg: "assets/images/3/fnak3.png",
        fnakDescreption: "test"
    },
    {
        fnakImg: "assets/images/3/fnak4.png",
        fnakDescreption: "test"
    },
    {
        fnakImg: "assets/images/3/fnak5.png",
        fnakDescreption: "test"
    }, 
];

;// CONCATENATED MODULE: ./components/highlight/cardSection/cardList/index.tsx




const CardList = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (styles_module_default()).cardsContainer,
        children: cardList.map((cardItem)=>{
            return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(cardList_Card, {
                    fnakImg: cardItem.fnakImg
                })
            }));
        })
    }));
};
/* harmony default export */ const cardSection_cardList = (CardList);

;// CONCATENATED MODULE: ./components/highlight/cardSection/index.tsx



const CardSection = ()=>{
    const { 0: details , 1: setDetails  } = (0,external_react_.useState)({
        title: "SOLFENNEX",
        subTitle: "UNIVERSE",
        desc: "Our project is based on outstanding art with a variety ofhandcrafted features. Being one of the best an"
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(cardSection_cardList, {})
    }));
};
/* harmony default export */ const cardSection = (CardSection);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: ./components/highlight/bottomSection/styles.module.scss
var bottomSection_styles_module = __webpack_require__(131);
var bottomSection_styles_module_default = /*#__PURE__*/__webpack_require__.n(bottomSection_styles_module);
;// CONCATENATED MODULE: ./components/highlight/bottomSection/index.tsx



const BottomSection = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (bottomSection_styles_module_default()).BottomSectionContainer,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (bottomSection_styles_module_default()).BottomCard,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (bottomSection_styles_module_default()).BottomCardHead,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "RISE OF SOLFENNEX"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Our project is based on outstanding art with a variety ofhandcrafted features. Being one of the best an"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (bottomSection_styles_module_default()).BottomCardBody,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: "/assets/images/3/layer1.png",
                            width: 380,
                            height: 212,
                            alt: "fnak"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (bottomSection_styles_module_default()).BottomCard,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (bottomSection_styles_module_default()).BottomCardHead,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "RISE OF SOLFENNEX"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Our project is based on outstanding art with a variety ofhandcrafted features. Being one of the best an"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (bottomSection_styles_module_default()).BottomCardBody,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: "/assets/images/3/layer1.png",
                            width: 380,
                            height: 212,
                            alt: "fnak"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (bottomSection_styles_module_default()).BottomCard,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (bottomSection_styles_module_default()).BottomCardHead,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "RISE OF SOLFENNEX"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Our project is based on outstanding art with a variety ofhandcrafted features. Being one of the best an"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (bottomSection_styles_module_default()).BottomCardBody,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: "/assets/images/3/layer1.png",
                            width: 380,
                            height: 212,
                            alt: "fnak"
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const bottomSection = (BottomSection);

// EXTERNAL MODULE: ./components/highlight/styles.module.scss
var highlight_styles_module = __webpack_require__(174);
var highlight_styles_module_default = /*#__PURE__*/__webpack_require__.n(highlight_styles_module);
;// CONCATENATED MODULE: ./components/highlight/index.tsx




const Highlight = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (highlight_styles_module_default()).highlightContainer,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (highlight_styles_module_default()).titleSection,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "HIGHLIGHT AND UTILITY"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "Our project is based on outstanding art with a variety ofhandcrafted features. Being one of the best and most innovative projects on all blockchains is our definition. So fasten seatbelts and enjoy the journey into the Solfennex universe,"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(cardSection, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(bottomSection, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {})
        ]
    }));
};
/* harmony default export */ const highlight = (Highlight);


/***/ })

};
;