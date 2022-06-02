module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/typeof.js":
/*!********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/typeof.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../node_modules/next/dist/client/link.js":
/*!************************************************!*\
  !*** ../node_modules/next/dist/client/link.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "../node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "../node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "../node_modules/next/dist/client/router.js":
/*!**************************************************!*\
  !*** ../node_modules/next/dist/client/router.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "../node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "../node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "../node_modules/next/dist/client/with-router.js":
/*!*******************************************************!*\
  !*** ../node_modules/next/dist/client/with-router.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "../node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/mitt.js":
/*!*********************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/mitt.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/router.js":
/*!******************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/router.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__(/*! url */ "url");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "../node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "../node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!****************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/utils.js":
/*!**********************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/utils.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__(/*! url */ "url");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "../node_modules/next/link.js":
/*!************************************!*\
  !*** ../node_modules/next/link.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "../node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./components/Chat/ChatHome.js":
/*!*************************************!*\
  !*** ./components/Chat/ChatHome.js ***!
  \*************************************/
/*! exports provided: UserContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContext", function() { return UserContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RoomForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RoomForm */ "./components/Chat/RoomForm.js");
/* harmony import */ var _ChatSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChatSection */ "./components/Chat/ChatSection.js");
/* harmony import */ var _utils_Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/Constants */ "./utils/Constants.js");
/* harmony import */ var _utils_Constants__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_Constants__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_Message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/Message */ "./utils/Message.js");
/* harmony import */ var _utils_Message__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_utils_Message__WEBPACK_IMPORTED_MODULE_5__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const UserContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);

const ChatHome = () => {
  const {
    0: socket,
    1: setSocket
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: roomUsers,
    1: setRoomUsers
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: messages,
    1: setMessages
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); // Initializing Socket

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!socket) {
      initSocket();
    }
  }, [socket]);
  /**
   * Initializing socket
   * Handling socket events
   */

  const initSocket = () => {
    var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1___default()();
    const {
      CHAT_MESSAGE,
      ROOM_USERS
    } = _utils_Constants__WEBPACK_IMPORTED_MODULE_4__["SOCKET_EVENTS"]; // listens for incoming message from server
    // 1. chat messages

    socket.on(CHAT_MESSAGE, message => {
      setMessages(messages => [...messages, message]);
    }); // 2. set room users

    socket.on(ROOM_USERS, info => {
      setRoomUsers(info.users);
    });
    socket.on("disconnect", () => {
      console.log("Disconnected");
    });
    setSocket(socket);
  };
  /**
   * On join from chat form
   * @param  {username:string, room:string} user
   */


  const onJoin = user => {
    setUser(user);
    const {
      username,
      room,
      key
    } = user; // join room

    socket.emit(_utils_Constants__WEBPACK_IMPORTED_MODULE_4__["SOCKET_EVENTS"].JOIN_ROOM, {
      username,
      room
    });
  };
  /**
   * On user have left the room
   */


  const onLeave = () => {
    setUser(null);
    setMessages([]);
    setSocket(null);
    socket.disconnect();
  };
  /**
   * Handles message sending by sending message to server
   * @param  {Message} Instance of class message
   */


  const sendMessage = message => {
    // emit message to server
    message.chatMessage = CryptoJS.AES.encrypt(message.chatMessage, user.pkey).toString();
    socket.emit(_utils_Constants__WEBPACK_IMPORTED_MODULE_4__["SOCKET_EVENTS"].CHAT_MESSAGE, message);
  };

  return __jsx("section", {
    style: {
      height: "100vh"
    }
  }, !user ? __jsx(_RoomForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleSubmit: onJoin
  }) : __jsx(UserContext.Provider, {
    value: user
  }, __jsx(_ChatSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onSend: sendMessage,
    roomUsers: roomUsers,
    messages: messages,
    onLeave: onLeave
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ChatHome);

/***/ }),

/***/ "./components/Chat/ChatMessage.js":
/*!****************************************!*\
  !*** ./components/Chat/ChatMessage.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ChatHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatHome */ "./components/Chat/ChatHome.js");
/* harmony import */ var _utils_Message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/Message */ "./utils/Message.js");
/* harmony import */ var _utils_Message__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_Message__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_chatmessage_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/chatmessage.scss */ "./styles/chatmessage.scss");
/* harmony import */ var _styles_chatmessage_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_chatmessage_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MessageHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MessageHeader */ "./components/Chat/MessageHeader.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const ChatMessage = ({
  message
}) => {
  // current user
  const userInfo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_ChatHome__WEBPACK_IMPORTED_MODULE_1__["UserContext"]);
  const {
    user,
    type,
    time
  } = message;
  const selfClass = userInfo.username === user ? "message-chat-self" : "";
  /**
   * Render file messages using their URL
   */

  const renderFileMessage = () => {
    const {
      fileUrl,
      fileName
    } = message;

    switch (type) {
      case _utils_Message__WEBPACK_IMPORTED_MODULE_2__["Message"].IMAGE:
        return __jsx("div", {
          className: `message message-chat message-media ${selfClass}`
        }, __jsx(_MessageHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
          isCurrentUser: selfClass === "" ? false : true,
          user: user,
          time: time
        }), __jsx("img", {
          className: "chat-image",
          src: fileUrl,
          alt: user + " " + time
        }));

      case _utils_Message__WEBPACK_IMPORTED_MODULE_2__["Message"].VIDEO:
        return __jsx("div", {
          className: `message message-chat message-media ${selfClass}`
        }, __jsx(_MessageHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
          isCurrentUser: selfClass === "" ? false : true,
          user: user,
          time: time
        }), __jsx("video", {
          className: "chat-video",
          controls: true
        }, __jsx("source", {
          src: fileUrl,
          type: "video/mp4"
        }), "Your browser does not support the video tag."));

      case _utils_Message__WEBPACK_IMPORTED_MODULE_2__["Message"].FILE:
        return __jsx("div", {
          className: `message message-chat message-media ${selfClass}`
        }, __jsx(_MessageHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
          isCurrentUser: selfClass === "" ? false : true,
          user: user,
          time: time
        }), __jsx("a", {
          className: "chat-file",
          href: fileUrl,
          target: "_blank"
        }, __jsx("i", {
          className: "fa fa-file fa-2x mr-2"
        }), __jsx("span", null, fileName)));
    }
  };
  /**
   * Render text messages
   */


  const renderChatMessage = () => {
    var {
      chatMessage
    } = message; // render bot messages

    if (type === _utils_Message__WEBPACK_IMPORTED_MODULE_2__["Message"].BOT) {
      return __jsx("div", {
        className: "message message-bot text-center"
      }, __jsx("small", null, chatMessage));
    }

    chatMessage = CryptoJS.AES.decrypt(message.chatMessage, userInfo.pkey).toString(CryptoJS.enc.Utf8);
    return __jsx("div", {
      className: `message message-chat ${selfClass}`
    }, __jsx(_MessageHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      isCurrentUser: selfClass === "" ? false : true,
      user: user,
      time: time
    }), __jsx("p", null, chatMessage));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, type === _utils_Message__WEBPACK_IMPORTED_MODULE_2__["Message"].TEXT || type === _utils_Message__WEBPACK_IMPORTED_MODULE_2__["Message"].BOT ? renderChatMessage() : renderFileMessage());
};

/* harmony default export */ __webpack_exports__["default"] = (ChatMessage);

/***/ }),

/***/ "./components/Chat/ChatMessageSendForm.js":
/*!************************************************!*\
  !*** ./components/Chat/ChatMessageSendForm.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_chatmessagesendform_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/chatmessagesendform.scss */ "./styles/chatmessagesendform.scss");
/* harmony import */ var _styles_chatmessagesendform_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_chatmessagesendform_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ChatHome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatHome */ "./components/Chat/ChatHome.js");
/* harmony import */ var _utils_Message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/Message */ "./utils/Message.js");
/* harmony import */ var _utils_Message__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_Message__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FloatingButtonList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FloatingButtonList */ "./components/Chat/FloatingButtonList.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const ChatMessageSendForm = ({
  handleMessageSend,
  setProgress
}) => {
  // current user
  const userInfo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_ChatHome__WEBPACK_IMPORTED_MODULE_2__["UserContext"]);
  const {
    0: message,
    1: setMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: isFloatBtnVisible,
    1: setFloatBtnVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const chatInputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    chatInputRef.current.focus();
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (message.trim() !== "") setError("");
  }, [message]); // handles text messages

  const onSendText = event => {
    event.preventDefault();
    const messageText = message.trim();
    const username = userInfo ? userInfo.username : "";

    if (messageText !== "") {
      handleMessageSend(new _utils_Message__WEBPACK_IMPORTED_MODULE_3__["TextMessage"](username, messageText, _utils_Message__WEBPACK_IMPORTED_MODULE_3__["Message"].TEXT));
      setMessage("");
      chatInputRef.current.focus();
    } else {
      setError("error");
    }
  }; // handles file messages


  const onSendFile = (url, fileName, type) => {
    const username = userInfo ? userInfo.username : "";
    handleMessageSend(new _utils_Message__WEBPACK_IMPORTED_MODULE_3__["FileMessage"](username, url, fileName, type));
  };

  const toggleFloatBtnVisibility = () => {
    setFloatBtnVisible(prevState => !prevState);
  };

  return __jsx("div", {
    className: "chatsend-form align-self-stretch"
  }, __jsx("form", {
    className: "d-flex justify-content-center align-items-center",
    onSubmit: onSendText
  }, __jsx("div", {
    className: "attachment-menu"
  }, __jsx(_FloatingButtonList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onSend: onSendFile,
    isVisible: isFloatBtnVisible,
    toggleVisibility: toggleFloatBtnVisibility,
    setProgress: setProgress
  }), __jsx("span", {
    className: "circular-btn",
    onClick: toggleFloatBtnVisibility
  }, __jsx("i", {
    className: "fa fa-paperclip"
  }))), __jsx("div", {
    className: "flex-grow-1"
  }, __jsx("input", {
    className: `form-control ${error}`,
    ref: chatInputRef,
    type: "text",
    placeholder: "Type your message here...",
    autoComplete: "off",
    value: message,
    onChange: e => setMessage(e.target.value)
  })), __jsx("button", {
    className: "btn btn-secondary ml-1",
    type: "submit"
  }, __jsx("i", {
    className: "fas fa-paper-plane"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ChatMessageSendForm);

/***/ }),

/***/ "./components/Chat/ChatSection.js":
/*!****************************************!*\
  !*** ./components/Chat/ChatSection.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ChatMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatMessage */ "./components/Chat/ChatMessage.js");
/* harmony import */ var _ChatMessageSendForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatMessageSendForm */ "./components/Chat/ChatMessageSendForm.js");
/* harmony import */ var _ChatSidePanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChatSidePanel */ "./components/Chat/ChatSidePanel.js");
/* harmony import */ var _styles_chatSection_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/chatSection.scss */ "./styles/chatSection.scss");
/* harmony import */ var _styles_chatSection_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_chatSection_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ProgressBar */ "./components/ProgressBar.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const ChatSection = ({
  onSend,
  roomUsers,
  messages,
  onLeave
}) => {
  const {
    0: isSidePanelVisible,
    1: setSidePanelVisibility
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: arrowDirection,
    1: setArrowDirection
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("up");
  const {
    0: progress,
    1: setProgress
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const ChatContainerEndRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener("resize", () => {
      window.innerWidth >= 575 ? setSidePanelVisibility(true) : "";
    }); // returned function will be called on component unmount

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isSidePanelVisible) setArrowDirection("up");else setArrowDirection("down");
  }, [isSidePanelVisible]);

  const handleMessageSend = message => {
    // scroll to end of message window
    ChatContainerEndRef.current.scrollIntoView({
      behavior: "smooth"
    });
    onSend(message);
  };

  return __jsx("div", {
    className: "chat-section container"
  }, __jsx("div", {
    className: "row justify-content-start text-start align-items-center m-0"
  }, __jsx("div", {
    className: "col"
  }, __jsx("img", {
    src: "/images/chat-logo1.png",
    alt: "logo"
  })), __jsx("input", {
    className: "btn btn-secondary ml-auto",
    type: "button",
    value: "Leave Room",
    onClick: onLeave
  })), __jsx("div", {
    className: "row justify-centent-between align-items-start secondary-bg flex-fill m-0"
  }, __jsx(_ChatSidePanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isVisible: isSidePanelVisible,
    roomUsers: roomUsers
  }), __jsx("button", {
    className: "btn sidebar-toggle",
    onClick: () => setSidePanelVisibility(prev => !prev)
  }, __jsx("i", {
    className: `fas fa-chevron-${arrowDirection}`
  })), __jsx("div", {
    className: "chat-box col-sm-9 white-bg",
    style: {
      height: "100%"
    }
  }, messages.map((msg, index) => {
    return __jsx(_ChatMessage__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: index,
      message: msg
    });
  }), progress > 0 && __jsx(_ProgressBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    progress: progress,
    color: "#3282b8"
  }), __jsx("div", {
    ref: ChatContainerEndRef
  }))), __jsx(_ChatMessageSendForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleMessageSend: handleMessageSend,
    setProgress: setProgress
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ChatSection);

/***/ }),

/***/ "./components/Chat/ChatSidePanel.js":
/*!******************************************!*\
  !*** ./components/Chat/ChatSidePanel.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ChatHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatHome */ "./components/Chat/ChatHome.js");
/* harmony import */ var _styles_chatSidepanel_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/chatSidepanel.scss */ "./styles/chatSidepanel.scss");
/* harmony import */ var _styles_chatSidepanel_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_chatSidepanel_scss__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ChatSidebar = ({
  roomUsers,
  isVisible
}) => {
  const userInfo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_ChatHome__WEBPACK_IMPORTED_MODULE_1__["UserContext"]);
  const roomInputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const {
    0: tooltipText,
    1: setTooltipText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("Copy");
  const {
    0: barAnimation,
    1: setBarAnimation
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isVisible) setBarAnimation("animate-reveal");else setBarAnimation("animate-hide");
  }, [isVisible]);
  /**
   * Copy text to clipboard
   */

  const copyToClipboard = () => {
    setTooltipText("Copied!");
    const roomTxt = roomInputRef.current;
    roomTxt.select();
    roomTxt.setSelectionRange(0, 99999);
    /*For mobile devices*/

    document.execCommand("copy");
  };

  return __jsx("div", {
    className: `chat-sidebar secondary-bg col-sm-3 pt-3 pb-3 ${barAnimation} `
  }, __jsx("div", {
    className: "d-flex flex-column"
  }, __jsx("h5", {
    className: "mb-3"
  }, __jsx("i", {
    className: "fa fa-home pr-2"
  }), "Room Name"), __jsx("div", {
    className: "d-flex align-items-center primary-bg"
  }, __jsx("div", {
    className: "room-name flex-grow-1 p-2"
  }, __jsx("input", {
    ref: roomInputRef,
    value: userInfo.room,
    readOnly: true
  })), __jsx("div", {
    className: "custom-tooltip custom-tooltip-top",
    "data-tooltip": tooltipText
  }, __jsx("button", {
    className: "btn m-0 p-2",
    onClick: copyToClipboard
  }, __jsx("i", {
    className: "fa fa-copy"
  })))), __jsx("small", null, "Invite others by sharing above room name!"), __jsx("h5", {
    className: "mt-3 mb-3"
  }, __jsx("i", {
    className: "fa fa-users pr-2"
  }), "Users"), __jsx("ul", null, roomUsers.map(user => {
    return __jsx("li", {
      key: user.id
    }, user.username);
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ChatSidebar);

/***/ }),

/***/ "./components/Chat/FloatButton.js":
/*!****************************************!*\
  !*** ./components/Chat/FloatButton.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const FloatButton = ({
  htmlFor,
  icon,
  type,
  color,
  accept,
  onClick,
  onChange
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("label", {
  style: {
    backgroundColor: `${color}`
  },
  className: "circular-btn",
  htmlFor: htmlFor
}, __jsx("i", {
  className: icon
})), __jsx("input", {
  id: htmlFor,
  accept: accept,
  type: "file",
  onClick: onClick,
  onChange: evt => onChange(evt, type)
}));

/* harmony default export */ __webpack_exports__["default"] = (FloatButton);

/***/ }),

/***/ "./components/Chat/FloatingButtonList.js":
/*!***********************************************!*\
  !*** ./components/Chat/FloatingButtonList.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_AWS_S3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/AWS_S3 */ "./utils/AWS_S3.js");
/* harmony import */ var _styles_floatingButtonList_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/floatingButtonList.scss */ "./styles/floatingButtonList.scss");
/* harmony import */ var _styles_floatingButtonList_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_floatingButtonList_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FloatButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FloatButton */ "./components/Chat/FloatButton.js");
/* harmony import */ var _utils_Message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/Message */ "./utils/Message.js");
/* harmony import */ var _utils_Message__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_Message__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const FloatingButtonList = ({
  onSend,
  isVisible,
  toggleVisibility,
  setProgress
}) => {
  let animate;
  if (isVisible) animate = "animate-reveal";else animate = "animate-hide";

  const uploadFile = (event, type) => {
    const file = event.target.files[0];
    if (!file) return; // creating an instance of AWS oprations class to use its s3 upload

    let up = new _utils_AWS_S3__WEBPACK_IMPORTED_MODULE_1__["default"]();
    const {
      uploadHandler,
      url
    } = up.uploadToS3(file);
    uploadHandler.on("httpUploadProgress", evt => {
      setProgress(Math.round(evt.loaded / evt.total * 100));
    }).promise().then(() => onSend(url, file.name, type)).catch(err => console.log(err)).finally(() => setProgress(0)); // this will make uploading progress bar hidden
  };

  return __jsx("ul", {
    className: `float-menu ${animate}`
  }, __jsx("li", {
    className: "mb-3"
  }, __jsx(_FloatButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    htmlFor: "image-upload",
    type: _utils_Message__WEBPACK_IMPORTED_MODULE_4__["Message"].IMAGE,
    icon: "fa fa-image",
    accept: "image/*",
    onClick: toggleVisibility,
    onChange: uploadFile,
    color: "#f05454"
  })), __jsx("li", {
    className: "mb-3"
  }, __jsx(_FloatButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    htmlFor: "video-upload",
    icon: "fa fa-play",
    type: _utils_Message__WEBPACK_IMPORTED_MODULE_4__["Message"].VIDEO,
    accept: "video/*",
    onClick: toggleVisibility,
    onChange: uploadFile,
    color: "#a685e2"
  })), __jsx("li", {
    className: "mb-4"
  }, __jsx(_FloatButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    htmlFor: "doc-upload",
    icon: "fa fa-file",
    type: _utils_Message__WEBPACK_IMPORTED_MODULE_4__["Message"].FILE,
    accept: ".doc,.docx,.xml,.pdf,.txt",
    onClick: toggleVisibility,
    onChange: uploadFile,
    color: "#70af85"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (FloatingButtonList);

/***/ }),

/***/ "./components/Chat/MessageHeader.js":
/*!******************************************!*\
  !*** ./components/Chat/MessageHeader.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "dayjs");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/customParseFormat */ "dayjs/plugin/customParseFormat");
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const MessageHeader = ({
  isCurrentUser,
  time,
  user
}) => {
  dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.extend(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_2___default.a);
  return __jsx("p", null, isCurrentUser ? __jsx("small", null, "You") : __jsx("small", null, user), __jsx("small", null, dayjs__WEBPACK_IMPORTED_MODULE_1___default()(time).format("h:mm:ss a")));
};

/* harmony default export */ __webpack_exports__["default"] = (MessageHeader);

/***/ }),

/***/ "./components/Chat/RoomForm.js":
/*!*************************************!*\
  !*** ./components/Chat/RoomForm.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/Constants */ "./utils/Constants.js");
/* harmony import */ var _utils_Constants__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_Constants__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_roomForm_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/roomForm.scss */ "./styles/roomForm.scss");
/* harmony import */ var _styles_roomForm_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_roomForm_scss__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const RoomForm = ({
  handleSubmit
}) => {
  const {
    0: username,
    1: setUsername
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: room,
    1: setRoom
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: key,
    1: setKey
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: errors,
    1: setErrors
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    usernameErr: null,
    roomErr: null,
    keyErr: null
  });

  const onJoin = event => {
    event.preventDefault();
    const {
      usernameErr,
      roomErr,
      keyErr
    } = errors;

    if (username !== "" && room !== "" && key !== "" && usernameErr == null && roomErr == null && keyErr == null) {
      //Decrypt Room list
      //Check if room exists
      //Get Room Key
      var aes_rooms = null;
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.open("GET", 'roomkeys.aes', false);
      xmlhttp.send();

      if (xmlhttp.status == 200) {
        aes_rooms = xmlhttp.responseText;
      }

      try {
        var json_rooms = CryptoJS.AES.decrypt(aes_rooms, key).toString(CryptoJS.enc.Utf8);
        var rooms = JSON.parse(json_rooms);

        if (rooms.rooms[room] !== undefined) {
          var pkey = rooms.rooms[room];
          const user = {
            username,
            room,
            pkey
          };
          handleSubmit(user);
        } else {
          setErrors({
            usernameErr: null,
            roomErr: "Room does not exist!",
            keyErr: null
          });
        }
      } catch (e) {
        console.log(e);
        setErrors({
          usernameErr: null,
          roomErr: null,
          keyErr: "Wrong key!"
        });
      }
    } else {
      // if both the field are null
      if (!usernameErr && !roomErr && !keyErr) {
        setErrors({
          usernameErr: "Username can't be empty!",
          roomErr: "Room name can't be empty!",
          keyErr: "Key can't be empty!"
        });
      }
    }
  };
  /**
   * Validating form fields
   * @param  {String} {name
   * @param  {String} value}
   */


  const validate = ({
    name,
    value
  }) => {
    let {
      usernameErr,
      roomErr,
      keyErr
    } = errors;

    switch (name) {
      case "username":
        if (value.length == 0) usernameErr = "Username can't be empty!";else if (value.length < _utils_Constants__WEBPACK_IMPORTED_MODULE_2__["MIN_USERNAME_LENGTH"]) usernameErr = "Username is too short!";else usernameErr = null;
        break;

      case "room":
        if (value.length == 0) roomErr = "Room name can't be empty!";else if (value.length > 0 && value.includes(" ")) roomErr = "Room name can't have spaces!";else roomErr = null;
        break;

      case "key":
        if (value.length == 0) keyErr = "Room key can't be empty!";else if (value.length !== 12) keyErr = "Room key must be 12 characters!";else keyErr = null;
        break;
    }

    setErrors({
      usernameErr,
      roomErr,
      keyErr
    });
  };
  /**
   * add error class if error exist
   * @param  {String} error
   */


  const addErrorClass = error => {
    if (error) return "error";
    return "";
  };

  return __jsx("div", {
    className: "chat-form-container container"
  }, __jsx("div", {
    className: "row justify-content-center m-0 text-center"
  }, __jsx("h2", {
    className: "mt-5 mb-5"
  }, "Welcome again to An0n Chat!")), __jsx("div", {
    className: "row justify-content-center align-items center m-0"
  }, __jsx("div", {
    className: "chat-form col-11 col-sm-6 col-md-4 p-0"
  }, __jsx("div", {
    className: "row justify-content-center align-items-center m-0"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, __jsx("a", null, __jsx("img", {
    src: "/images/chat-logo1.png",
    alt: "icon"
  })))), __jsx("form", {
    onSubmit: onJoin
  }, __jsx("div", {
    className: `form-group ${addErrorClass(errors.usernameErr)}`
  }, __jsx("label", null, "Display name"), __jsx("input", {
    className: "form-control",
    type: "text",
    name: "username",
    value: username,
    onChange: event => {
      setUsername(event.target.value);
      validate(event.target);
    }
  }), errors.usernameErr ? __jsx("span", null, __jsx("i", {
    className: "fa fa-exclamation-triangle"
  }), __jsx("small", {
    className: "pl-2"
  }, errors.usernameErr)) : null), __jsx("div", {
    className: `form-group ${addErrorClass(errors.roomErr)}`
  }, __jsx("label", null, "Room name"), __jsx("input", {
    className: "form-control",
    type: "text",
    name: "room",
    value: room,
    onChange: event => {
      setRoom(event.target.value);
      validate(event.target);
    }
  }), errors.roomErr ? __jsx("span", null, __jsx("i", {
    className: "fa fa-exclamation-triangle"
  }), __jsx("small", {
    className: "pl-2"
  }, errors.roomErr)) : null), __jsx("div", {
    className: `form-group ${addErrorClass(errors.keyErr)}`
  }, __jsx("label", null, "Key"), __jsx("input", {
    className: "form-control",
    type: "text",
    name: "key",
    value: key,
    onChange: event => {
      setKey(event.target.value);
      validate(event.target);
    }
  }), errors.keyErr ? __jsx("span", null, __jsx("i", {
    className: "fa fa-exclamation-triangle"
  }), __jsx("small", {
    className: "pl-2"
  }, errors.keyErr)) : null), __jsx("input", {
    className: "btn",
    type: "submit",
    value: "Join Chat"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (RoomForm);

/***/ }),

/***/ "./components/ProgressBar.js":
/*!***********************************!*\
  !*** ./components/ProgressBar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_progressBar_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/progressBar.scss */ "./styles/progressBar.scss");
/* harmony import */ var _styles_progressBar_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_progressBar_scss__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ProgressBar = ({
  progress,
  color
}) => {
  const progressBarRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    var bar = progressBarRef.current;
    if (bar) bar.style.width = progress + "%";
  }, [progress]);
  return __jsx("div", {
    className: "progress-wrapper"
  }, __jsx("small", null, "Uploading..."), __jsx("div", {
    className: "progress"
  }, __jsx("div", {
    ref: progressBarRef,
    className: "progress-bar progress-bar-striped",
    style: {
      backgroundColor: color
    },
    role: "progressbar"
  }, __jsx("span", null, progress, "%"))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProgressBar);

/***/ }),

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Chat_ChatHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Chat/ChatHome */ "./components/Chat/ChatHome.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ChatPage = () => __jsx(_components_Chat_ChatHome__WEBPACK_IMPORTED_MODULE_1__["default"], null);

/* harmony default export */ __webpack_exports__["default"] = (ChatPage);

/***/ }),

/***/ "./styles/chatSection.scss":
/*!*********************************!*\
  !*** ./styles/chatSection.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/chatSidepanel.scss":
/*!***********************************!*\
  !*** ./styles/chatSidepanel.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/chatmessage.scss":
/*!*********************************!*\
  !*** ./styles/chatmessage.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/chatmessagesendform.scss":
/*!*****************************************!*\
  !*** ./styles/chatmessagesendform.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/floatingButtonList.scss":
/*!****************************************!*\
  !*** ./styles/floatingButtonList.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/progressBar.scss":
/*!*********************************!*\
  !*** ./styles/progressBar.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/roomForm.scss":
/*!******************************!*\
  !*** ./styles/roomForm.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./utils/AWS_S3.js":
/*!*************************!*\
  !*** ./utils/AWS_S3.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ "aws-sdk");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);
function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }

function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }



class AWS_Ops {
  constructor() {
    aws_sdk__WEBPACK_IMPORTED_MODULE_0___default.a.config.update({
      accessKeyId: _classStaticPrivateFieldSpecGet(AWS_Ops, AWS_Ops, _CONFIG).AWS_KEY,
      secretAccessKey: _classStaticPrivateFieldSpecGet(AWS_Ops, AWS_Ops, _CONFIG).AWS_SECRET
    });
  }

  getUrl(fileName) {
    return `https://${_classStaticPrivateFieldSpecGet(AWS_Ops, AWS_Ops, _CONFIG).bucketName}.s3.${_classStaticPrivateFieldSpecGet(AWS_Ops, AWS_Ops, _CONFIG).region}.amazonaws.com/${fileName}`;
  }

  uploadToS3(file) {
    const params = {
      ACL: "public-read",
      Key: file.name,
      ContentType: file.type,
      Body: file,
      Bucket: _classStaticPrivateFieldSpecGet(AWS_Ops, AWS_Ops, _CONFIG).bucketName
    };
    const s3 = new aws_sdk__WEBPACK_IMPORTED_MODULE_0___default.a.S3();
    return {
      uploadHandler: s3.upload(params),
      url: this.getUrl(file.name)
    };
  }

}

var _CONFIG = {
  writable: true,
  value: {
    AWS_KEY: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY,
    AWS_SECRET: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
    bucketName: process.env.NEXT_PUBLIC_BUCKET_NAME,
    region: process.env.NEXT_PUBLIC_REGION
  }
};
/* harmony default export */ __webpack_exports__["default"] = (AWS_Ops);

/***/ }),

/***/ "./utils/Constants.js":
/*!****************************!*\
  !*** ./utils/Constants.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  APP_NAME: "An0n Chat",
  DESCRIPTION: "Now chat anonymously and securely",
  SOCAIL_LINKS: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/"
  },
  SOCKET_EVENTS: {
    JOIN_ROOM: "joinRoom",
    CHAT_BOT: "chatbot",
    CHAT_MESSAGE: "chatMessage",
    ROOM_USERS: "roomUsers",
    DISCONNECT: "disconnect"
  },
  MIN_USERNAME_LENGTH: 3
};

/***/ }),

/***/ "./utils/Message.js":
/*!**************************!*\
  !*** ./utils/Message.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const dayjs = __webpack_require__(/*! dayjs */ "dayjs");

class Message {
  constructor(username, type) {
    this.user = username;
    this.time = dayjs(new Date());
    this.type = type;
  }

}

class TextMessage extends Message {
  constructor(username, chatMessage, type) {
    super(username, type);
    this.chatMessage = chatMessage;
  }

}

class FileMessage extends Message {
  constructor(username, fileUrl, fileName, type) {
    super(username, type);
    this.fileUrl = fileUrl;
    this.fileName = fileName;
  }

} // message types


Message.TEXT = "text";
Message.BOT = "bot";
Message.IMAGE = "image";
Message.VIDEO = "video";
Message.FILE = "file";
Message.OTHERS = "others";
module.exports = {
  Message,
  TextMessage,
  FileMessage
};

/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/home.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\teldeeb\kitchen\Anomly\functions\pages\home.js */"./pages/home.js");


/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dayjs");

/***/ }),

/***/ "dayjs/plugin/customParseFormat":
/*!*************************************************!*\
  !*** external "dayjs/plugin/customParseFormat" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dayjs/plugin/customParseFormat");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2hhdC9DaGF0SG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoYXQvQ2hhdE1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGF0L0NoYXRNZXNzYWdlU2VuZEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGF0L0NoYXRTZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2hhdC9DaGF0U2lkZVBhbmVsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2hhdC9GbG9hdEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoYXQvRmxvYXRpbmdCdXR0b25MaXN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2hhdC9NZXNzYWdlSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2hhdC9Sb29tRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2dyZXNzQmFyLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvQVdTX1MzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL0NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9NZXNzYWdlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF3cy1zZGtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXlqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRheWpzL3BsdWdpbi9jdXN0b21QYXJzZUZvcm1hdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNvY2tldC5pby1jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJ1cmwiLCJvcmlnaW4iLCJsYXN0SHJlZiIsImxhc3RBcyIsImxhc3RSZXN1bHQiLCJocmVmIiwiYXMiLCJyZXN1bHQiLCJmb3JtYXRGdW5jIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwib2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJnZXRPYnNlcnZlciIsImNvbnNvbGUiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInAiLCJtZW1vaXplZEZvcm1hdFVybCIsImZvcm1hdFVybCIsImFzSHJlZiIsImUiLCJub2RlTmFtZSIsInRhcmdldCIsImlzTG9jYWwiLCJzY3JvbGwiLCJSb3V0ZXIiLCJzaGFsbG93Iiwic3VjY2VzcyIsImRvY3VtZW50IiwicHJvcHMiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImdldFBhdGhzIiwicmVzb2x2ZWRIcmVmIiwicGFyc2VkQXMiLCJoYW5kbGVSZWYiLCJyZWYiLCJpc1ByZWZldGNoZWQiLCJwcmVmZXRjaCIsInBhdGhzIiwiZXJyIiwicmVuZGVyIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiZWwiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsIm9uQ2xpY2siLCJwcm9jZXNzIiwiUmVhY3QiLCJ3YXJuIiwiUHJvcFR5cGVzIiwicmVxdWlyZSIsImV4YWN0IiwiTGluayIsInJlcGxhY2UiLCJwYXNzSHJlZiIsInZhbHVlIiwic2luZ2xldG9uUm91dGVyIiwicm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsImdldCIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnQiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInBhdGgiLCJwcmVwYXJlUm91dGUiLCJ0b1JvdXRlIiwiYXR0ZW1wdHMiLCJpc1NlcnZlclJlbmRlciIsInBhdGhuYW1lIiwiYWRkQmFzZVBhdGgiLCJfX05FWFRfREFUQV9fIiwiYnVpbGRJZCIsImRlbEJhc2VQYXRoIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJnZXRSZXNwb25zZSIsImRhdGEiLCJyb3V0ZSIsInF1ZXJ5IiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJQcm9taXNlIiwiZmV0Y2hOZXh0RGF0YSIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0IiwidXBkYXRlIiwibW9kIiwibmV3RGF0YSIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwib3B0aW9ucyIsImNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyZXNvbHZlIiwibWV0aG9kIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJyZWplY3QiLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiZXJyb3IiLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJnZXRSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJoYW5kbGVFcnJvciIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImZldGNoQ29tcG9uZW50IiwiY2FuY2VsbGVkIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJURVNUX1JPVVRFIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwiZXNjYXBlZFJvdXRlIiwiZXNjYXBlUmVnZXgiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiaXNPcHRpb25hbCIsIiQxIiwiaXNDYXRjaEFsbCIsInBvcyIsInJlcGVhdCIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwia2V5IiwibmFtZWRSZWdleCIsInVzZWQiLCJwcm90b2NvbCIsImhvc3RuYW1lIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiVXNlckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQ2hhdEhvbWUiLCJzb2NrZXQiLCJzZXRTb2NrZXQiLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwicm9vbVVzZXJzIiwic2V0Um9vbVVzZXJzIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsInVzZUVmZmVjdCIsImluaXRTb2NrZXQiLCJpbyIsIkNIQVRfTUVTU0FHRSIsIlJPT01fVVNFUlMiLCJTT0NLRVRfRVZFTlRTIiwiaW5mbyIsInVzZXJzIiwibG9nIiwib25Kb2luIiwidXNlcm5hbWUiLCJyb29tIiwiSk9JTl9ST09NIiwib25MZWF2ZSIsImRpc2Nvbm5lY3QiLCJzZW5kTWVzc2FnZSIsImNoYXRNZXNzYWdlIiwiQ3J5cHRvSlMiLCJBRVMiLCJlbmNyeXB0IiwicGtleSIsInRvU3RyaW5nIiwiaGVpZ2h0IiwiQ2hhdE1lc3NhZ2UiLCJ1c2VySW5mbyIsInVzZUNvbnRleHQiLCJ0eXBlIiwidGltZSIsInNlbGZDbGFzcyIsInJlbmRlckZpbGVNZXNzYWdlIiwiZmlsZVVybCIsImZpbGVOYW1lIiwiTWVzc2FnZSIsIklNQUdFIiwiVklERU8iLCJGSUxFIiwicmVuZGVyQ2hhdE1lc3NhZ2UiLCJCT1QiLCJkZWNyeXB0IiwiZW5jIiwiVXRmOCIsIlRFWFQiLCJDaGF0TWVzc2FnZVNlbmRGb3JtIiwiaGFuZGxlTWVzc2FnZVNlbmQiLCJzZXRQcm9ncmVzcyIsInNldE1lc3NhZ2UiLCJzZXRFcnJvciIsImlzRmxvYXRCdG5WaXNpYmxlIiwic2V0RmxvYXRCdG5WaXNpYmxlIiwiY2hhdElucHV0UmVmIiwidXNlUmVmIiwiY3VycmVudCIsImZvY3VzIiwidHJpbSIsIm9uU2VuZFRleHQiLCJwcmV2ZW50RGVmYXVsdCIsIm1lc3NhZ2VUZXh0IiwiVGV4dE1lc3NhZ2UiLCJvblNlbmRGaWxlIiwiRmlsZU1lc3NhZ2UiLCJ0b2dnbGVGbG9hdEJ0blZpc2liaWxpdHkiLCJwcmV2U3RhdGUiLCJDaGF0U2VjdGlvbiIsIm9uU2VuZCIsImlzU2lkZVBhbmVsVmlzaWJsZSIsInNldFNpZGVQYW5lbFZpc2liaWxpdHkiLCJhcnJvd0RpcmVjdGlvbiIsInNldEFycm93RGlyZWN0aW9uIiwicHJvZ3Jlc3MiLCJDaGF0Q29udGFpbmVyRW5kUmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsImlubmVyV2lkdGgiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsInByZXYiLCJtYXAiLCJtc2ciLCJpbmRleCIsIkNoYXRTaWRlYmFyIiwiaXNWaXNpYmxlIiwicm9vbUlucHV0UmVmIiwidG9vbHRpcFRleHQiLCJzZXRUb29sdGlwVGV4dCIsImJhckFuaW1hdGlvbiIsInNldEJhckFuaW1hdGlvbiIsImNvcHlUb0NsaXBib2FyZCIsInJvb21UeHQiLCJzZWxlY3QiLCJzZXRTZWxlY3Rpb25SYW5nZSIsImV4ZWNDb21tYW5kIiwiaWQiLCJGbG9hdEJ1dHRvbiIsImh0bWxGb3IiLCJpY29uIiwiY29sb3IiLCJhY2NlcHQiLCJvbkNoYW5nZSIsImJhY2tncm91bmRDb2xvciIsImV2dCIsIkZsb2F0aW5nQnV0dG9uTGlzdCIsInRvZ2dsZVZpc2liaWxpdHkiLCJhbmltYXRlIiwidXBsb2FkRmlsZSIsImZpbGUiLCJmaWxlcyIsInVwIiwiQVdTX09wcyIsInVwbG9hZEhhbmRsZXIiLCJ1cGxvYWRUb1MzIiwiTWF0aCIsInJvdW5kIiwibG9hZGVkIiwidG90YWwiLCJwcm9taXNlIiwidGhlbiIsImNhdGNoIiwiZmluYWxseSIsIk1lc3NhZ2VIZWFkZXIiLCJpc0N1cnJlbnRVc2VyIiwiZGF5anMiLCJleHRlbmQiLCJjdXN0b21QYXJzZUZvcm1hdCIsImZvcm1hdCIsIlJvb21Gb3JtIiwiaGFuZGxlU3VibWl0Iiwic2V0VXNlcm5hbWUiLCJzZXRSb29tIiwic2V0S2V5IiwiZXJyb3JzIiwic2V0RXJyb3JzIiwidXNlcm5hbWVFcnIiLCJyb29tRXJyIiwia2V5RXJyIiwiYWVzX3Jvb21zIiwieG1saHR0cCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNlbmQiLCJzdGF0dXMiLCJyZXNwb25zZVRleHQiLCJqc29uX3Jvb21zIiwicm9vbXMiLCJKU09OIiwicGFyc2UiLCJ1bmRlZmluZWQiLCJ2YWxpZGF0ZSIsImxlbmd0aCIsIk1JTl9VU0VSTkFNRV9MRU5HVEgiLCJpbmNsdWRlcyIsImFkZEVycm9yQ2xhc3MiLCJQcm9ncmVzc0JhciIsInByb2dyZXNzQmFyUmVmIiwiYmFyIiwic3R5bGUiLCJ3aWR0aCIsIkNoYXRQYWdlIiwiQVdTIiwiY29uZmlnIiwiYWNjZXNzS2V5SWQiLCJBV1NfS0VZIiwic2VjcmV0QWNjZXNzS2V5IiwiQVdTX1NFQ1JFVCIsImdldFVybCIsImJ1Y2tldE5hbWUiLCJyZWdpb24iLCJBQ0wiLCJLZXkiLCJDb250ZW50VHlwZSIsIkJvZHkiLCJCdWNrZXQiLCJzMyIsIlMzIiwidXBsb2FkIiwiZW52IiwiTkVYVF9QVUJMSUNfQVdTX0FDQ0VTU19LRVkiLCJORVhUX1BVQkxJQ19BV1NfU0VDUkVUX0FDQ0VTU19LRVkiLCJORVhUX1BVQkxJQ19CVUNLRVRfTkFNRSIsIk5FWFRfUFVCTElDX1JFR0lPTiIsIm1vZHVsZSIsImV4cG9ydHMiLCJBUFBfTkFNRSIsIkRFU0NSSVBUSU9OIiwiU09DQUlMX0xJTktTIiwiZ2l0aHViIiwibGlua2VkaW4iLCJDSEFUX0JPVCIsIkRJU0NPTk5FQ1QiLCJEYXRlIiwiT1RIRVJTIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7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cGFnZXNcXGhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiZGVjbGFyZSBjb25zdCBfX05FWFRfREFUQV9fOiBhbnlcblxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCByZXNvbHZlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQcmVmZXRjaE9wdGlvbnMgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyBhZGRCYXNlUGF0aCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuXG5mdW5jdGlvbiBpc0xvY2FsKGhyZWY6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCB1cmwgPSBwYXJzZShocmVmLCBmYWxzZSwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gcGFyc2UoZ2V0TG9jYXRpb25PcmlnaW4oKSwgZmFsc2UsIHRydWUpXG5cbiAgcmV0dXJuIChcbiAgICAhdXJsLmhvc3QgfHwgKHVybC5wcm90b2NvbCA9PT0gb3JpZ2luLnByb3RvY29sICYmIHVybC5ob3N0ID09PSBvcmlnaW4uaG9zdClcbiAgKVxufVxuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBGb3JtYXRSZXN1bHQgPSB7IGhyZWY6IHN0cmluZzsgYXM/OiBzdHJpbmcgfVxuXG5mdW5jdGlvbiBtZW1vaXplZEZvcm1hdFVybChmb3JtYXRGdW5jOiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4gRm9ybWF0UmVzdWx0KSB7XG4gIGxldCBsYXN0SHJlZjogbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RBczogdW5kZWZpbmVkIHwgbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RSZXN1bHQ6IG51bGwgfCBGb3JtYXRSZXN1bHQgPSBudWxsXG4gIHJldHVybiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4ge1xuICAgIGlmIChsYXN0UmVzdWx0ICYmIGhyZWYgPT09IGxhc3RIcmVmICYmIGFzID09PSBsYXN0QXMpIHtcbiAgICAgIHJldHVybiBsYXN0UmVzdWx0XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gZm9ybWF0RnVuYyhocmVmLCBhcylcbiAgICBsYXN0SHJlZiA9IGhyZWZcbiAgICBsYXN0QXMgPSBhc1xuICAgIGxhc3RSZXN1bHQgPSByZXN1bHRcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0VXJsKHVybDogVXJsKTogc3RyaW5nIHtcbiAgcmV0dXJuIHVybCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCkgOiB1cmxcbn1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG5cbmxldCBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChvYnNlcnZlcikge1xuICAgIHJldHVybiBvYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBDb21wb25lbnQ8TGlua1Byb3BzPiB7XG4gIHA6IGJvb2xlYW5cblxuICBjb25zdHJ1Y3Rvcihwcm9wczogTGlua1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuICB9XG5cbiAgY2xlYW5VcExpc3RlbmVycyA9ICgpID0+IHt9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcbiAgfVxuXG4gIGdldFBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBjb25zdCB7IGhyZWY6IHBhcnNlZEhyZWYsIGFzOiBwYXJzZWRBcyB9ID0gdGhpcy5mb3JtYXRVcmxzKFxuICAgICAgdGhpcy5wcm9wcy5ocmVmLFxuICAgICAgdGhpcy5wcm9wcy5hc1xuICAgIClcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRIcmVmKVxuICAgIHJldHVybiBbcmVzb2x2ZWRIcmVmLCBwYXJzZWRBcyA/IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEFzKSA6IHJlc29sdmVkSHJlZl1cbiAgfVxuXG4gIGhhbmRsZVJlZihyZWY6IEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wICYmIEludGVyc2VjdGlvbk9ic2VydmVyICYmIHJlZiAmJiByZWYudGFnTmFtZSkge1xuICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcblxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgICAgcHJlZmV0Y2hlZFtcbiAgICAgICAgICB0aGlzLmdldFBhdGhzKCkuam9pbihcbiAgICAgICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICAgICAnJSdcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycyA9IGxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnByZWZldGNoKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbiAgLy8gYXMgcGVyIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sXG4gIGZvcm1hdFVybHMgPSBtZW1vaXplZEZvcm1hdFVybCgoaHJlZiwgYXNIcmVmKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IGFkZEJhc2VQYXRoKGZvcm1hdFVybChocmVmKSksXG4gICAgICBhczogYXNIcmVmID8gYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGFzSHJlZikpIDogYXNIcmVmLFxuICAgIH1cbiAgfSlcblxuICBsaW5rQ2xpY2tlZCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyBub2RlTmFtZSwgdGFyZ2V0IH0gPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgICBpZiAoXG4gICAgICBub2RlTmFtZSA9PT0gJ0EnICYmXG4gICAgICAoKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgICAgIGUubWV0YUtleSB8fFxuICAgICAgICBlLmN0cmxLZXkgfHxcbiAgICAgICAgZS5zaGlmdEtleSB8fFxuICAgICAgICAoZS5uYXRpdmVFdmVudCAmJiBlLm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKSlcbiAgICApIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuXG4gICAgaWYgKCFpc0xvY2FsKGhyZWYpKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBocmVmID0gcmVzb2x2ZShwYXRobmFtZSwgaHJlZilcbiAgICBhcyA9IGFzID8gcmVzb2x2ZShwYXRobmFtZSwgYXMpIDogaHJlZlxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBsZXQgeyBzY3JvbGwgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgICB9XG5cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICBSb3V0ZXJbdGhpcy5wcm9wcy5yZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgc2hhbGxvdzogdGhpcy5wcm9wcy5zaGFsbG93LFxuICAgIH0pLnRoZW4oKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcHJlZmV0Y2gob3B0aW9ucz86IFByZWZldGNoT3B0aW9ucyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wIHx8IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgY29uc3QgcGF0aHMgPSB0aGlzLmdldFBhdGhzKClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgUm91dGVyLnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8gMF0sIHBhdGhzWy8qIGFzUGF0aCAqLyAxXSwgb3B0aW9ucykuY2F0Y2goXG4gICAgICAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgIHRocm93IGVyclxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICAgIHByZWZldGNoZWRbXG4gICAgICBwYXRocy5qb2luKFxuICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAnJSdcbiAgICAgIClcbiAgICBdID0gdHJ1ZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICAgIH1cblxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICAgIGNvbnN0IHByb3BzOiB7XG4gICAgICBvbk1vdXNlRW50ZXI6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgaHJlZj86IHN0cmluZ1xuICAgICAgcmVmPzogYW55XG4gICAgfSA9IHtcbiAgICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVSZWYoZWwpXG5cbiAgICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTW91c2VFbnRlcjogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZWZldGNoKHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICAgIH0sXG4gICAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICB0aGlzLmxpbmtDbGlja2VkKGUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfVxuXG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKFxuICAgICAgdGhpcy5wcm9wcy5wYXNzSHJlZiB8fFxuICAgICAgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpXG4gICAgKSB7XG4gICAgICBwcm9wcy5ocmVmID0gYXMgfHwgaHJlZlxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICBpZiAoXG4gICAgICAgIHByb3BzLmhyZWYgJiZcbiAgICAgICAgdHlwZW9mIF9fTkVYVF9EQVRBX18gIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydFxuICAgICAgKSB7XG4gICAgICAgIHByb3BzLmhyZWYgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChwcm9wcy5ocmVmKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzKVxuICB9XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCB3YXJuID0gZXhlY09uY2UoY29uc29sZS5lcnJvcilcblxuICAvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbiAgY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpXG4gIGNvbnN0IGV4YWN0ID0gcmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpXG4gIC8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbiAgTGluay5wcm9wVHlwZXMgPSBleGFjdCh7XG4gICAgaHJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsXG4gICAgYXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBwcmVmZXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hhbGxvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGFzc0hyZWY6IFByb3BUeXBlcy5ib29sLFxuICAgIHNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAocHJvcHM6IGFueSwgcHJvcE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIGBXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9LFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgOiBwYXRoXG59XG5cbmZ1bmN0aW9uIHRvUm91dGUocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLydcbn1cblxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGg6IHN0cmluZykgPT5cbiAgdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpXG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbnR5cGUgQ29tcG9uZW50UmVzID0geyBwYWdlOiBDb21wb25lbnRUeXBlOyBtb2Q6IGFueSB9XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG50eXBlIFJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogYW55XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFJvdXRlSW5mbywgQXBwPzogQ29tcG9uZW50VHlwZSkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IGFueSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5IHwgbnVsbCxcbiAgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4sXG4gIGNiPzogKC4uLmFyZ3M6IGFueSkgPT4gYW55XG4pIHtcbiAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMVxuICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBmZXRjaChcbiAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmBcbiAgICAgICAgKSxcbiAgICAgICAgcXVlcnksXG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICB9XG4gICAgKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgIC8vIGxvb3AuXG4gICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgIDsoZXJyIGFzIGFueSkuY29kZSA9ICdQQUdFX0xPQURfRVJST1InXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQ29tcG9uZW50VHlwZVxuICAgICAgd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBhc1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcbiAgICB9XG4gIH1cblxuICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAoXG4gICAgICBlLnN0YXRlICYmXG4gICAgICB0aGlzLmlzU3NyICYmXG4gICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgcGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lXG4gICAgKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5J1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgdXBkYXRlKHJvdXRlOiBzdHJpbmcsIG1vZDogYW55KSB7XG4gICAgY29uc3QgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlID0gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBDb21wb25lbnQsXG4gICAgICBfX05fU1NHOiBtb2QuX19OX1NTRyxcbiAgICAgIF9fTl9TU1A6IG1vZC5fX05fU1NQLFxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGFcblxuICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICBfdXJsOiBVcmwsXG4gICAgX2FzOiBVcmwsXG4gICAgb3B0aW9uczogYW55XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgICB9XG4gICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICBpZiAoU1QpIHtcbiAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsXG4gICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXNcblxuICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKVxuICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcylcblxuICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpXG5cbiAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcylcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSBwYXJzZSh1cmwsIHRydWUpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgIH1cblxuICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZShhcylcbiAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZWplY3QoXG4gICAgICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4oXG4gICAgICAgIChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpXG4gICAgICAgICAgICAgIHRocm93IGVycm9yXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVFcnJvciA9IChcbiAgICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICAgICkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXNcbiAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvOiBSb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIH0gYXMgYW55KS50aGVuKFxuICAgICAgICAgICAgICAgICAgKHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAoZ2lwRXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsXG4gICAgICAgICAgICAgICAgICAgICAgZ2lwRXJyXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpXG4gICAgICAgIClcbiAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgIH1cblxuICAgIHJldHVybiAobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oXG4gICAgICAgIChyZXMpID0+XG4gICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pLFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz4pXG4gICAgICAudGhlbigocm91dGVJbmZvOiBSb3V0ZUluZm8pID0+IHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YTxSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICAgIClcbiAgICAgICAgKS50aGVuKChwcm9wcykgPT4ge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpXG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybClcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpXG4gICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdClcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Q29tcG9uZW50UmVzPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG4gICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGFyc2UoYXNQYXRoKS5wYXRobmFtZSEpXG5cbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgIDogZmV0Y2hOZXh0RGF0YShcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHRoaXMuaXNTc3IsXG4gICAgICAgICAgKGRhdGEpID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKVxuICAgICAgICApXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZShhc1BhdGgsIHRydWUpXG4gICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUhKVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJylcbiAgICAgIDsoZSBhcyBhbnkpLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfVxufSB7XG4gIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG5cbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAoXywgJDEpID0+IHtcbiAgICAgIGNvbnN0IGlzT3B0aW9uYWwgPSAvXlxcXFxcXFsuKlxcXFxcXF0kLy50ZXN0KCQxKVxuICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSgyLCAtMilcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgIGlmIChpc0NhdGNoQWxsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoNilcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1tcbiAgICAgICAgJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9XG4gICAgICByZXR1cm4gaXNDYXRjaEFsbCA/IChpc09wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgfVxuICApXG5cbiAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgICAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG5cbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksXG4gICAgZ3JvdXBzLFxuICAgIG5hbWVkUmVnZXg6IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICA/IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYFxuICAgICAgOiB1bmRlZmluZWQsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZvcm1hdCwgVVJMRm9ybWF0T3B0aW9ucywgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBhbnlcbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBzdGF0aWNNYXJrdXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkZXZGaWxlczogc3RyaW5nW11cbiAgZmlsZXM6IHN0cmluZ1tdXG4gIGxvd1ByaW9yaXR5RmlsZXM6IHN0cmluZ1tdXG4gIHBvbHlmaWxsRmlsZXM6IHN0cmluZ1tdXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaHRtbFByb3BzOiBhbnlcbiAgYm9keVRhZ3M6IGFueVtdXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICB1cmw6IFVybE9iamVjdCxcbiAgb3B0aW9ucz86IFVSTEZvcm1hdE9wdGlvbnNcbik6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXQodXJsIGFzIFVSTCwgb3B0aW9ucylcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGlvIGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUm9vbUZvcm0gZnJvbSBcIi4vUm9vbUZvcm1cIjtcclxuaW1wb3J0IENoYXRTZWN0aW9uIGZyb20gXCIuL0NoYXRTZWN0aW9uXCI7XHJcbmltcG9ydCB7IFNPQ0tFVF9FVkVOVFMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvQ29uc3RhbnRzXCI7XHJcbmltcG9ydCBNZXNzYWdlIGZyb20gXCIuLi8uLi91dGlscy9NZXNzYWdlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xyXG5cclxuY29uc3QgQ2hhdEhvbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbc29ja2V0LCBzZXRTb2NrZXRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtyb29tVXNlcnMsIHNldFJvb21Vc2Vyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICAvLyBJbml0aWFsaXppbmcgU29ja2V0XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghc29ja2V0KSB7XHJcbiAgICAgICAgICAgIGluaXRTb2NrZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbc29ja2V0XSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXppbmcgc29ja2V0XHJcbiAgICAgKiBIYW5kbGluZyBzb2NrZXQgZXZlbnRzXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGluaXRTb2NrZXQgPSAoKSA9PiB7XHJcbiAgICAgICAgdmFyIHNvY2tldCA9IGlvKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgQ0hBVF9NRVNTQUdFLCBST09NX1VTRVJTIH0gPSBTT0NLRVRfRVZFTlRTO1xyXG5cclxuICAgICAgICAvLyBsaXN0ZW5zIGZvciBpbmNvbWluZyBtZXNzYWdlIGZyb20gc2VydmVyXHJcbiAgICAgICAgLy8gMS4gY2hhdCBtZXNzYWdlc1xyXG4gICAgICAgIHNvY2tldC5vbihDSEFUX01FU1NBR0UsIChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2VzKChtZXNzYWdlcykgPT4gWy4uLm1lc3NhZ2VzLCBtZXNzYWdlXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gMi4gc2V0IHJvb20gdXNlcnNcclxuICAgICAgICBzb2NrZXQub24oUk9PTV9VU0VSUywgKGluZm8pID0+IHtcclxuICAgICAgICAgICAgc2V0Um9vbVVzZXJzKGluZm8udXNlcnMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzb2NrZXQub24oXCJkaXNjb25uZWN0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaXNjb25uZWN0ZWRcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldFNvY2tldChzb2NrZXQpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE9uIGpvaW4gZnJvbSBjaGF0IGZvcm1cclxuICAgICAqIEBwYXJhbSAge3VzZXJuYW1lOnN0cmluZywgcm9vbTpzdHJpbmd9IHVzZXJcclxuICAgICAqL1xyXG4gICAgY29uc3Qgb25Kb2luID0gKHVzZXIpID0+IHtcclxuICAgICAgICBzZXRVc2VyKHVzZXIpO1xyXG5cclxuICAgICAgICBjb25zdCB7IHVzZXJuYW1lLCByb29tLCBrZXkgfSA9IHVzZXI7XHJcblxyXG4gICAgICAgIC8vIGpvaW4gcm9vbVxyXG4gICAgICAgIHNvY2tldC5lbWl0KFNPQ0tFVF9FVkVOVFMuSk9JTl9ST09NLCB7IHVzZXJuYW1lLCByb29tIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE9uIHVzZXIgaGF2ZSBsZWZ0IHRoZSByb29tXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IG9uTGVhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcihudWxsKTtcclxuICAgICAgICBzZXRNZXNzYWdlcyhbXSk7XHJcbiAgICAgICAgc2V0U29ja2V0KG51bGwpO1xyXG4gICAgICAgIHNvY2tldC5kaXNjb25uZWN0KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlcyBtZXNzYWdlIHNlbmRpbmcgYnkgc2VuZGluZyBtZXNzYWdlIHRvIHNlcnZlclxyXG4gICAgICogQHBhcmFtICB7TWVzc2FnZX0gSW5zdGFuY2Ugb2YgY2xhc3MgbWVzc2FnZVxyXG4gICAgICovXHJcbiAgICBjb25zdCBzZW5kTWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgLy8gZW1pdCBtZXNzYWdlIHRvIHNlcnZlclxyXG4gICAgICAgIG1lc3NhZ2UuY2hhdE1lc3NhZ2UgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdChtZXNzYWdlLmNoYXRNZXNzYWdlLCB1c2VyLnBrZXkpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgc29ja2V0LmVtaXQoU09DS0VUX0VWRU5UUy5DSEFUX01FU1NBR0UsIG1lc3NhZ2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IGhlaWdodDogXCIxMDB2aFwiIH19PlxyXG4gICAgICAgICAgICB7IXVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICA8Um9vbUZvcm0gaGFuZGxlU3VibWl0PXtvbkpvaW59IC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3VzZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGF0U2VjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNlbmQ9e3NlbmRNZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb29tVXNlcnM9e3Jvb21Vc2Vyc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXM9e21lc3NhZ2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkxlYXZlPXtvbkxlYXZlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0SG9tZTtcclxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuL0NoYXRIb21lXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiLi4vLi4vdXRpbHMvTWVzc2FnZVwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvY2hhdG1lc3NhZ2Uuc2Nzc1wiO1xyXG5pbXBvcnQgTWVzc2FnZUhlYWRlciBmcm9tIFwiLi9NZXNzYWdlSGVhZGVyXCI7XHJcblxyXG5jb25zdCBDaGF0TWVzc2FnZSA9ICh7IG1lc3NhZ2UgfSkgPT4ge1xyXG4gICAgLy8gY3VycmVudCB1c2VyXHJcbiAgICBjb25zdCB1c2VySW5mbyA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG5cclxuICAgIGNvbnN0IHsgdXNlciwgdHlwZSwgdGltZSB9ID0gbWVzc2FnZTtcclxuICAgIGNvbnN0IHNlbGZDbGFzcyA9IHVzZXJJbmZvLnVzZXJuYW1lID09PSB1c2VyID8gXCJtZXNzYWdlLWNoYXQtc2VsZlwiIDogXCJcIjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbmRlciBmaWxlIG1lc3NhZ2VzIHVzaW5nIHRoZWlyIFVSTFxyXG4gICAgICovXHJcbiAgICBjb25zdCByZW5kZXJGaWxlTWVzc2FnZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGZpbGVVcmwsIGZpbGVOYW1lIH0gPSBtZXNzYWdlO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBNZXNzYWdlLklNQUdFOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1lc3NhZ2UgbWVzc2FnZS1jaGF0IG1lc3NhZ2UtbWVkaWEgJHtzZWxmQ2xhc3N9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlSGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0N1cnJlbnRVc2VyPXtzZWxmQ2xhc3MgPT09IFwiXCIgPyBmYWxzZSA6IHRydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZT17dGltZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hhdC1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ZpbGVVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3VzZXIgKyBcIiBcIiArIHRpbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBNZXNzYWdlLlZJREVPOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1lc3NhZ2UgbWVzc2FnZS1jaGF0IG1lc3NhZ2UtbWVkaWEgJHtzZWxmQ2xhc3N9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlSGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0N1cnJlbnRVc2VyPXtzZWxmQ2xhc3MgPT09IFwiXCIgPyBmYWxzZSA6IHRydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZT17dGltZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZpZGVvIGNsYXNzTmFtZT1cImNoYXQtdmlkZW9cIiBjb250cm9scz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXtmaWxlVXJsfSB0eXBlPVwidmlkZW8vbXA0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSB2aWRlbyB0YWcuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdmlkZW8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBNZXNzYWdlLkZJTEU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbWVzc2FnZSBtZXNzYWdlLWNoYXQgbWVzc2FnZS1tZWRpYSAke3NlbGZDbGFzc31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQ3VycmVudFVzZXI9e3NlbGZDbGFzcyA9PT0gXCJcIiA/IGZhbHNlIDogdHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lPXt0aW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjaGF0LWZpbGVcIiBocmVmPXtmaWxlVXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZpbGUgZmEtMnggbXItMlwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntmaWxlTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbmRlciB0ZXh0IG1lc3NhZ2VzXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHJlbmRlckNoYXRNZXNzYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIHZhciB7IGNoYXRNZXNzYWdlIH0gPSBtZXNzYWdlO1xyXG5cclxuICAgICAgICAvLyByZW5kZXIgYm90IG1lc3NhZ2VzXHJcbiAgICAgICAgaWYgKHR5cGUgPT09IE1lc3NhZ2UuQk9UKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UgbWVzc2FnZS1ib3QgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c21hbGw+e2NoYXRNZXNzYWdlfTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hhdE1lc3NhZ2UgPSBDcnlwdG9KUy5BRVMuZGVjcnlwdChtZXNzYWdlLmNoYXRNZXNzYWdlLHVzZXJJbmZvLnBrZXkpLnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1lc3NhZ2UgbWVzc2FnZS1jaGF0ICR7c2VsZkNsYXNzfWB9PlxyXG4gICAgICAgICAgICAgICAgPE1lc3NhZ2VIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICBpc0N1cnJlbnRVc2VyPXtzZWxmQ2xhc3MgPT09IFwiXCIgPyBmYWxzZSA6IHRydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgICAgICAgICAgICB0aW1lPXt0aW1lfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxwPntjaGF0TWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3R5cGUgPT09IE1lc3NhZ2UuVEVYVCB8fCB0eXBlID09PSBNZXNzYWdlLkJPVFxyXG4gICAgICAgICAgICAgICAgPyByZW5kZXJDaGF0TWVzc2FnZSgpXHJcbiAgICAgICAgICAgICAgICA6IHJlbmRlckZpbGVNZXNzYWdlKCl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdE1lc3NhZ2U7XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvY2hhdG1lc3NhZ2VzZW5kZm9ybS5zY3NzXCI7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4vQ2hhdEhvbWVcIjtcclxuaW1wb3J0IHsgTWVzc2FnZSwgVGV4dE1lc3NhZ2UsIEZpbGVNZXNzYWdlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL01lc3NhZ2VcIjtcclxuaW1wb3J0IEZsb2F0aW5nQnV0dG9uTGlzdCBmcm9tIFwiLi9GbG9hdGluZ0J1dHRvbkxpc3RcIjtcclxuXHJcbmNvbnN0IENoYXRNZXNzYWdlU2VuZEZvcm0gPSAoeyBoYW5kbGVNZXNzYWdlU2VuZCwgc2V0UHJvZ3Jlc3MgfSkgPT4ge1xyXG4gICAgLy8gY3VycmVudCB1c2VyXHJcbiAgICBjb25zdCB1c2VySW5mbyA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG5cclxuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtpc0Zsb2F0QnRuVmlzaWJsZSwgc2V0RmxvYXRCdG5WaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGNoYXRJbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNoYXRJbnB1dFJlZi5jdXJyZW50LmZvY3VzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChtZXNzYWdlLnRyaW0oKSAhPT0gXCJcIikgc2V0RXJyb3IoXCJcIik7XHJcbiAgICB9LCBbbWVzc2FnZV0pO1xyXG5cclxuICAgIC8vIGhhbmRsZXMgdGV4dCBtZXNzYWdlc1xyXG4gICAgY29uc3Qgb25TZW5kVGV4dCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZVRleHQgPSBtZXNzYWdlLnRyaW0oKTtcclxuICAgICAgICBjb25zdCB1c2VybmFtZSA9IHVzZXJJbmZvID8gdXNlckluZm8udXNlcm5hbWUgOiBcIlwiO1xyXG5cclxuICAgICAgICBpZiAobWVzc2FnZVRleHQgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgaGFuZGxlTWVzc2FnZVNlbmQoXHJcbiAgICAgICAgICAgICAgICBuZXcgVGV4dE1lc3NhZ2UodXNlcm5hbWUsIG1lc3NhZ2VUZXh0LCBNZXNzYWdlLlRFWFQpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2UoXCJcIik7XHJcbiAgICAgICAgICAgIGNoYXRJbnB1dFJlZi5jdXJyZW50LmZvY3VzKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0RXJyb3IoXCJlcnJvclwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGhhbmRsZXMgZmlsZSBtZXNzYWdlc1xyXG4gICAgY29uc3Qgb25TZW5kRmlsZSA9ICh1cmwsIGZpbGVOYW1lLCB0eXBlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSB1c2VySW5mbyA/IHVzZXJJbmZvLnVzZXJuYW1lIDogXCJcIjtcclxuXHJcbiAgICAgICAgaGFuZGxlTWVzc2FnZVNlbmQobmV3IEZpbGVNZXNzYWdlKHVzZXJuYW1lLCB1cmwsIGZpbGVOYW1lLCB0eXBlKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZUZsb2F0QnRuVmlzaWJpbGl0eSA9ICgpID0+IHtcclxuICAgICAgICBzZXRGbG9hdEJ0blZpc2libGUoKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0c2VuZC1mb3JtIGFsaWduLXNlbGYtc3RyZXRjaFwiPlxyXG4gICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXtvblNlbmRUZXh0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXR0YWNobWVudC1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsb2F0aW5nQnV0dG9uTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNlbmQ9e29uU2VuZEZpbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmlzaWJsZT17aXNGbG9hdEJ0blZpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVZpc2liaWxpdHk9e3RvZ2dsZUZsb2F0QnRuVmlzaWJpbGl0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJvZ3Jlc3M9e3NldFByb2dyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2lyY3VsYXItYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRmxvYXRCdG5WaXNpYmlsaXR5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGFwZXJjbGlwXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7ZXJyb3J9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtjaGF0SW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgbWVzc2FnZSBoZXJlLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBtbC0xXCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wYXBlci1wbGFuZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdE1lc3NhZ2VTZW5kRm9ybTtcclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDaGF0TWVzc2FnZSBmcm9tIFwiLi9DaGF0TWVzc2FnZVwiO1xyXG5pbXBvcnQgQ2hhdE1lc3NhZ2VTZW5kRm9ybSBmcm9tIFwiLi9DaGF0TWVzc2FnZVNlbmRGb3JtXCI7XHJcbmltcG9ydCBDaGF0U2lkZVBhbmVsIGZyb20gXCIuL0NoYXRTaWRlUGFuZWxcIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2NoYXRTZWN0aW9uLnNjc3NcIjtcclxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCIuLi9Qcm9ncmVzc0JhclwiO1xyXG5cclxuY29uc3QgQ2hhdFNlY3Rpb24gPSAoeyBvblNlbmQsIHJvb21Vc2VycywgbWVzc2FnZXMsIG9uTGVhdmUgfSkgPT4ge1xyXG4gICAgY29uc3QgW2lzU2lkZVBhbmVsVmlzaWJsZSwgc2V0U2lkZVBhbmVsVmlzaWJpbGl0eV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFthcnJvd0RpcmVjdGlvbiwgc2V0QXJyb3dEaXJlY3Rpb25dID0gdXNlU3RhdGUoXCJ1cFwiKTtcclxuICAgIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBDaGF0Q29udGFpbmVyRW5kUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCA+PSA1NzUgPyBzZXRTaWRlUGFuZWxWaXNpYmlsaXR5KHRydWUpIDogXCJcIjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gcmV0dXJuZWQgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgb24gY29tcG9uZW50IHVubW91bnRcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7fSk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc1NpZGVQYW5lbFZpc2libGUpIHNldEFycm93RGlyZWN0aW9uKFwidXBcIik7XHJcbiAgICAgICAgZWxzZSBzZXRBcnJvd0RpcmVjdGlvbihcImRvd25cIik7XHJcbiAgICB9LCBbaXNTaWRlUGFuZWxWaXNpYmxlXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTWVzc2FnZVNlbmQgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgIC8vIHNjcm9sbCB0byBlbmQgb2YgbWVzc2FnZSB3aW5kb3dcclxuICAgICAgICBDaGF0Q29udGFpbmVyRW5kUmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcclxuICAgICAgICBvblNlbmQobWVzc2FnZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LXNlY3Rpb24gY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1zdGFydCB0ZXh0LXN0YXJ0IGFsaWduLWl0ZW1zLWNlbnRlciBtLTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2NoYXQtbG9nbzEucG5nXCIgYWx0PVwibG9nb1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IG1sLWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiTGVhdmUgUm9vbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25MZWF2ZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jZW50ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtc3RhcnQgc2Vjb25kYXJ5LWJnIGZsZXgtZmlsbCBtLTBcIj5cclxuICAgICAgICAgICAgICAgIHsvKlNpZGVQYW5lbCAqL31cclxuICAgICAgICAgICAgICAgIDxDaGF0U2lkZVBhbmVsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNWaXNpYmxlPXtpc1NpZGVQYW5lbFZpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgcm9vbVVzZXJzPXtyb29tVXNlcnN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBzaWRlYmFyLXRvZ2dsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2lkZVBhbmVsVmlzaWJpbGl0eSgocHJldikgPT4gIXByZXYpfT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2BmYXMgZmEtY2hldnJvbi0ke2Fycm93RGlyZWN0aW9ufWB9PjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBNZXNzYWdlQXJlYSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaGF0LWJveCBjb2wtc20tOSB3aGl0ZS1iZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogTWVzc2FnZSAqL31cclxuICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZXMubWFwKChtc2csIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q2hhdE1lc3NhZ2Uga2V5PXtpbmRleH0gbWVzc2FnZT17bXNnfSAvPjtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICB7LyogL01lc3NhZ2UgKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBQcm9ncmVzcyBiYXIgZm9yIGFueSBmaWxlIHNoYXJpbmcgKi99XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2dyZXNzID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzc0JhciBwcm9ncmVzcz17cHJvZ3Jlc3N9IGNvbG9yPXtcIiMzMjgyYjhcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPXtDaGF0Q29udGFpbmVyRW5kUmVmfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogL01lc3NhZ2VBcmVhICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPENoYXRNZXNzYWdlU2VuZEZvcm1cclxuICAgICAgICAgICAgICAgIGhhbmRsZU1lc3NhZ2VTZW5kPXtoYW5kbGVNZXNzYWdlU2VuZH1cclxuICAgICAgICAgICAgICAgIHNldFByb2dyZXNzPXtzZXRQcm9ncmVzc31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0U2VjdGlvbjtcclxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4vQ2hhdEhvbWVcIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2NoYXRTaWRlcGFuZWwuc2Nzc1wiO1xyXG5cclxuY29uc3QgQ2hhdFNpZGViYXIgPSAoeyByb29tVXNlcnMsIGlzVmlzaWJsZSB9KSA9PiB7XHJcbiAgICBjb25zdCB1c2VySW5mbyA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gICAgY29uc3Qgcm9vbUlucHV0UmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgW3Rvb2x0aXBUZXh0LCBzZXRUb29sdGlwVGV4dF0gPSB1c2VTdGF0ZShcIkNvcHlcIik7XHJcbiAgICBjb25zdCBbYmFyQW5pbWF0aW9uLCBzZXRCYXJBbmltYXRpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaXNWaXNpYmxlKSBzZXRCYXJBbmltYXRpb24oXCJhbmltYXRlLXJldmVhbFwiKTtcclxuICAgICAgICBlbHNlIHNldEJhckFuaW1hdGlvbihcImFuaW1hdGUtaGlkZVwiKTtcclxuICAgIH0sIFtpc1Zpc2libGVdKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvcHkgdGV4dCB0byBjbGlwYm9hcmRcclxuICAgICAqL1xyXG4gICAgY29uc3QgY29weVRvQ2xpcGJvYXJkID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFRvb2x0aXBUZXh0KFwiQ29waWVkIVwiKTtcclxuICAgICAgICBjb25zdCByb29tVHh0ID0gcm9vbUlucHV0UmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgcm9vbVR4dC5zZWxlY3QoKTtcclxuICAgICAgICByb29tVHh0LnNldFNlbGVjdGlvblJhbmdlKDAsIDk5OTk5KTsgLypGb3IgbW9iaWxlIGRldmljZXMqL1xyXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGNoYXQtc2lkZWJhciBzZWNvbmRhcnktYmcgY29sLXNtLTMgcHQtMyBwYi0zICR7YmFyQW5pbWF0aW9ufSBgfT5cclxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1ob21lIHByLTJcIj48L2k+Um9vbSBOYW1lXHJcbiAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHByaW1hcnktYmdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb20tbmFtZSBmbGV4LWdyb3ctMSBwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Jvb21JbnB1dFJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VySW5mby5yb29tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS10b29sdGlwIGN1c3RvbS10b29sdGlwLXRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9vbHRpcD17dG9vbHRpcFRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gbS0wIHAtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjb3B5VG9DbGlwYm9hcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY29weVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbD5JbnZpdGUgb3RoZXJzIGJ5IHNoYXJpbmcgYWJvdmUgcm9vbSBuYW1lITwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibXQtMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdXNlcnMgcHItMlwiPjwvaT5Vc2Vyc1xyXG4gICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICB7cm9vbVVzZXJzLm1hcCgodXNlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17dXNlci5pZH0+e3VzZXIudXNlcm5hbWV9PC9saT47XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDwvZGl2PiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0U2lkZWJhcjtcclxuIiwiY29uc3QgRmxvYXRCdXR0b24gPSAoe1xyXG4gICAgaHRtbEZvcixcclxuICAgIGljb24sXHJcbiAgICB0eXBlLFxyXG4gICAgY29sb3IsXHJcbiAgICBhY2NlcHQsXHJcbiAgICBvbkNsaWNrLFxyXG4gICAgb25DaGFuZ2UsXHJcbn0pID0+IChcclxuICAgIDw+XHJcbiAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogYCR7Y29sb3J9YCB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjaXJjdWxhci1idG5cIlxyXG4gICAgICAgICAgICBodG1sRm9yPXtodG1sRm9yfT5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtpY29ufT48L2k+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9e2h0bWxGb3J9XHJcbiAgICAgICAgICAgIGFjY2VwdD17YWNjZXB0fVxyXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiBvbkNoYW5nZShldnQsIHR5cGUpfVxyXG4gICAgICAgIC8+XHJcbiAgICA8Lz5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZsb2F0QnV0dG9uO1xyXG4iLCJpbXBvcnQgQVdTX09wcyBmcm9tIFwiLi4vLi4vdXRpbHMvQVdTX1MzXCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9mbG9hdGluZ0J1dHRvbkxpc3Quc2Nzc1wiO1xyXG5pbXBvcnQgRmxvYXRCdXR0b24gZnJvbSBcIi4vRmxvYXRCdXR0b25cIjtcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gXCIuLi8uLi91dGlscy9NZXNzYWdlXCI7XHJcblxyXG5jb25zdCBGbG9hdGluZ0J1dHRvbkxpc3QgPSAoe1xyXG4gICAgb25TZW5kLFxyXG4gICAgaXNWaXNpYmxlLFxyXG4gICAgdG9nZ2xlVmlzaWJpbGl0eSxcclxuICAgIHNldFByb2dyZXNzLFxyXG59KSA9PiB7XHJcbiAgICBsZXQgYW5pbWF0ZTtcclxuICAgIGlmIChpc1Zpc2libGUpIGFuaW1hdGUgPSBcImFuaW1hdGUtcmV2ZWFsXCI7XHJcbiAgICBlbHNlIGFuaW1hdGUgPSBcImFuaW1hdGUtaGlkZVwiO1xyXG5cclxuICAgIGNvbnN0IHVwbG9hZEZpbGUgPSAoZXZlbnQsIHR5cGUpID0+IHtcclxuICAgICAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICAgIGlmICghZmlsZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBjcmVhdGluZyBhbiBpbnN0YW5jZSBvZiBBV1Mgb3ByYXRpb25zIGNsYXNzIHRvIHVzZSBpdHMgczMgdXBsb2FkXHJcbiAgICAgICAgbGV0IHVwID0gbmV3IEFXU19PcHMoKTtcclxuICAgICAgICBjb25zdCB7IHVwbG9hZEhhbmRsZXIsIHVybCB9ID0gdXAudXBsb2FkVG9TMyhmaWxlKTtcclxuXHJcbiAgICAgICAgdXBsb2FkSGFuZGxlclxyXG4gICAgICAgICAgICAub24oXCJodHRwVXBsb2FkUHJvZ3Jlc3NcIiwgKGV2dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0UHJvZ3Jlc3MoTWF0aC5yb3VuZCgoZXZ0LmxvYWRlZCAvIGV2dC50b3RhbCkgKiAxMDApKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnByb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiBvblNlbmQodXJsLCBmaWxlLm5hbWUsIHR5cGUpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSlcclxuICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4gc2V0UHJvZ3Jlc3MoMCkpOyAvLyB0aGlzIHdpbGwgbWFrZSB1cGxvYWRpbmcgcHJvZ3Jlc3MgYmFyIGhpZGRlblxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9e2BmbG9hdC1tZW51ICR7YW5pbWF0ZX1gfT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgIDxGbG9hdEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9e1wiaW1hZ2UtdXBsb2FkXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT17TWVzc2FnZS5JTUFHRX1cclxuICAgICAgICAgICAgICAgICAgICBpY29uPXtcImZhIGZhLWltYWdlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjZXB0PXtcImltYWdlLypcIn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVWaXNpYmlsaXR5fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGxvYWRGaWxlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXtcIiNmMDU0NTRcIn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8RmxvYXRCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBodG1sRm9yPXtcInZpZGVvLXVwbG9hZFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGljb249e1wiZmEgZmEtcGxheVwifVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e01lc3NhZ2UuVklERU99XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjZXB0PXtcInZpZGVvLypcIn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVWaXNpYmlsaXR5fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGxvYWRGaWxlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXtcIiNhNjg1ZTJcIn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICA8RmxvYXRCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBodG1sRm9yPXtcImRvYy11cGxvYWRcIn1cclxuICAgICAgICAgICAgICAgICAgICBpY29uPXtcImZhIGZhLWZpbGVcIn1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPXtNZXNzYWdlLkZJTEV9XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjZXB0PXtcIi5kb2MsLmRvY3gsLnhtbCwucGRmLC50eHRcIn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVWaXNpYmlsaXR5fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGxvYWRGaWxlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXtcIiM3MGFmODVcIn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGbG9hdGluZ0J1dHRvbkxpc3Q7XHJcbiIsImltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IGN1c3RvbVBhcnNlRm9ybWF0IGZyb20gXCJkYXlqcy9wbHVnaW4vY3VzdG9tUGFyc2VGb3JtYXRcIjtcclxuXHJcbmNvbnN0IE1lc3NhZ2VIZWFkZXIgPSAoeyBpc0N1cnJlbnRVc2VyLCB0aW1lLCB1c2VyIH0pID0+IHtcclxuICAgIGRheWpzLmV4dGVuZChjdXN0b21QYXJzZUZvcm1hdCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8cD5cclxuICAgICAgICAgICAge2lzQ3VycmVudFVzZXIgPyA8c21hbGw+WW91PC9zbWFsbD4gOiA8c21hbGw+e3VzZXJ9PC9zbWFsbD59XHJcbiAgICAgICAgICAgIDxzbWFsbD57ZGF5anModGltZSkuZm9ybWF0KFwiaDptbTpzcyBhXCIpfTwvc21hbGw+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VIZWFkZXI7XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgTUlOX1VTRVJOQU1FX0xFTkdUSCB9IGZyb20gXCIuLi8uLi91dGlscy9Db25zdGFudHNcIjtcclxuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL3Jvb21Gb3JtLnNjc3NcIjtcclxuXHJcbmNvbnN0IFJvb21Gb3JtID0gKHsgaGFuZGxlU3VibWl0IH0pID0+IHtcclxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbcm9vbSwgc2V0Um9vbV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtrZXksIHNldEtleV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgdXNlcm5hbWVFcnI6IG51bGwsXHJcbiAgICAgICAgcm9vbUVycjogbnVsbCxcclxuXHRcdGtleUVycjogbnVsbCxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG9uSm9pbiA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgdXNlcm5hbWVFcnIsIHJvb21FcnIsIGtleUVyciB9ID0gZXJyb3JzO1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHVzZXJuYW1lICE9PSBcIlwiICYmIHJvb20gIT09IFwiXCIgJiYga2V5ICE9PSBcIlwiICYmXHJcbiAgICAgICAgICAgIHVzZXJuYW1lRXJyID09IG51bGwgJiYgcm9vbUVyciA9PSBudWxsICYmIGtleUVyciA9PSBudWxsXHJcbiAgICAgICAgKSB7XHJcblx0XHRcdC8vRGVjcnlwdCBSb29tIGxpc3RcclxuXHRcdFx0Ly9DaGVjayBpZiByb29tIGV4aXN0c1xyXG5cdFx0XHQvL0dldCBSb29tIEtleVxyXG5cclxuICAgICAgICAgICAgdmFyIGFlc19yb29tcyA9IG51bGw7XHJcbiAgICAgICAgICAgIHZhciB4bWxodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIHhtbGh0dHAub3BlbihcIkdFVFwiLCAncm9vbWtleXMuYWVzJywgZmFsc2UpO1xyXG4gICAgICAgICAgICB4bWxodHRwLnNlbmQoKTtcclxuICAgICAgICAgICAgaWYgKHhtbGh0dHAuc3RhdHVzPT0yMDApIHtcclxuICAgICAgICAgICAgICAgIGFlc19yb29tcyA9IHhtbGh0dHAucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIganNvbl9yb29tcyA9IENyeXB0b0pTLkFFUy5kZWNyeXB0KGFlc19yb29tcywga2V5KS50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgcm9vbXMgPSBKU09OLnBhcnNlKGpzb25fcm9vbXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvb21zLnJvb21zW3Jvb21dICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwa2V5ID0gcm9vbXMucm9vbXNbcm9vbV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb20sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQodXNlcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9ycyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lRXJyOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb29tRXJyOiBcIlJvb20gZG9lcyBub3QgZXhpc3QhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleUVycjogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3JzKHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZUVycjogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICByb29tRXJyOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGtleUVycjogXCJXcm9uZyBrZXkhXCIsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGlmIGJvdGggdGhlIGZpZWxkIGFyZSBudWxsXHJcbiAgICAgICAgICAgIGlmICghdXNlcm5hbWVFcnIgJiYgIXJvb21FcnIgJiYgIWtleUVycikge1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3JzKHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZUVycjogXCJVc2VybmFtZSBjYW4ndCBiZSBlbXB0eSFcIixcclxuICAgICAgICAgICAgICAgICAgICByb29tRXJyOiBcIlJvb20gbmFtZSBjYW4ndCBiZSBlbXB0eSFcIixcclxuICAgICAgICAgICAgICAgICAgICBrZXlFcnI6IFwiS2V5IGNhbid0IGJlIGVtcHR5IVwiLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBWYWxpZGF0aW5nIGZvcm0gZmllbGRzXHJcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IHtuYW1lXHJcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IHZhbHVlfVxyXG4gICAgICovXHJcbiAgICBjb25zdCB2YWxpZGF0ZSA9ICh7IG5hbWUsIHZhbHVlIH0pID0+IHtcclxuICAgICAgICBsZXQgeyB1c2VybmFtZUVyciwgcm9vbUVyciwga2V5RXJyIH0gPSBlcnJvcnM7XHJcblxyXG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwidXNlcm5hbWVcIjpcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT0gMCkgdXNlcm5hbWVFcnIgPSBcIlVzZXJuYW1lIGNhbid0IGJlIGVtcHR5IVwiO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUubGVuZ3RoIDwgTUlOX1VTRVJOQU1FX0xFTkdUSClcclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZUVyciA9IFwiVXNlcm5hbWUgaXMgdG9vIHNob3J0IVwiO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB1c2VybmFtZUVyciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJvb21cIjpcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT0gMCkgcm9vbUVyciA9IFwiUm9vbSBuYW1lIGNhbid0IGJlIGVtcHR5IVwiO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUubGVuZ3RoID4gMCAmJiB2YWx1ZS5pbmNsdWRlcyhcIiBcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgcm9vbUVyciA9IFwiUm9vbSBuYW1lIGNhbid0IGhhdmUgc3BhY2VzIVwiO1xyXG4gICAgICAgICAgICAgICAgZWxzZSByb29tRXJyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwia2V5XCI6XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09IDApIGtleUVyciA9IFwiUm9vbSBrZXkgY2FuJ3QgYmUgZW1wdHkhXCI7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh2YWx1ZS5sZW5ndGggIT09IDEyKVxyXG4gICAgICAgICAgICAgICAgICAgIGtleUVyciA9IFwiUm9vbSBrZXkgbXVzdCBiZSAxMiBjaGFyYWN0ZXJzIVwiO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBrZXlFcnIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0XHR9XHJcbiAgICAgICAgc2V0RXJyb3JzKHtcclxuICAgICAgICAgICAgdXNlcm5hbWVFcnIsXHJcbiAgICAgICAgICAgIHJvb21FcnIsXHJcblx0XHRcdGtleUVycixcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgZXJyb3IgY2xhc3MgaWYgZXJyb3IgZXhpc3RcclxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gZXJyb3JcclxuICAgICAqL1xyXG4gICAgY29uc3QgYWRkRXJyb3JDbGFzcyA9IChlcnJvcikgPT4ge1xyXG4gICAgICAgIGlmIChlcnJvcikgcmV0dXJuIFwiZXJyb3JcIjtcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtZm9ybS1jb250YWluZXIgY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgbS0wIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXQtNSBtYi01XCI+V2VsY29tZSBhZ2FpbiB0byBBbjBuIENoYXQhPC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMgY2VudGVyIG0tMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWZvcm0gY29sLTExIGNvbC1zbS02IGNvbC1tZC00IHAtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIG0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2NoYXQtbG9nbzEucG5nXCIgYWx0PVwiaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25Kb2lufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1ncm91cCAke2FkZEVycm9yQ2xhc3MoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnVzZXJuYW1lRXJyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkRpc3BsYXkgbmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlKGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLnVzZXJuYW1lRXJyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1leGNsYW1hdGlvbi10cmlhbmdsZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInBsLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMudXNlcm5hbWVFcnJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWdyb3VwICR7YWRkRXJyb3JDbGFzcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMucm9vbUVyclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Sb29tIG5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJvb21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyb29tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Um9vbShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZShldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5yb29tRXJyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1leGNsYW1hdGlvbi10cmlhbmdsZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInBsLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMucm9vbUVycn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tZ3JvdXAgJHthZGRFcnJvckNsYXNzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5rZXlFcnJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+S2V5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJrZXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRLZXkoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMua2V5RXJyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1leGNsYW1hdGlvbi10cmlhbmdsZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInBsLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMua2V5RXJyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJKb2luIENoYXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb29tRm9ybTtcclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL3Byb2dyZXNzQmFyLnNjc3NcIjtcclxuXHJcbmNvbnN0IFByb2dyZXNzQmFyID0gKHsgcHJvZ3Jlc3MsIGNvbG9yIH0pID0+IHtcclxuICAgIGNvbnN0IHByb2dyZXNzQmFyUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgdmFyIGJhciA9IHByb2dyZXNzQmFyUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgaWYgKGJhcikgYmFyLnN0eWxlLndpZHRoID0gcHJvZ3Jlc3MgKyBcIiVcIjtcclxuICAgIH0sIFtwcm9ncmVzc10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxzbWFsbD5VcGxvYWRpbmcuLi48L3NtYWxsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtwcm9ncmVzc0JhclJlZn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXIgcHJvZ3Jlc3MtYmFyLXN0cmlwZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogY29sb3IgfX1cclxuICAgICAgICAgICAgICAgICAgICByb2xlPVwicHJvZ3Jlc3NiYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cHJvZ3Jlc3N9JTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc0JhcjtcclxuIiwiaW1wb3J0IENoYXRIb21lIGZyb20gXCIuLi9jb21wb25lbnRzL0NoYXQvQ2hhdEhvbWVcIjtcclxuXHJcbmNvbnN0IENoYXRQYWdlID0gKCkgPT4gPENoYXRIb21lIC8+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdFBhZ2U7XHJcbiIsImltcG9ydCBBV1MgZnJvbSBcImF3cy1zZGtcIjtcclxuXHJcbmNsYXNzIEFXU19PcHMge1xyXG4gICAgc3RhdGljICNDT05GSUcgPSB7XHJcbiAgICAgICAgQVdTX0tFWTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVdTX0FDQ0VTU19LRVksXHJcbiAgICAgICAgQVdTX1NFQ1JFVDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVdTX1NFQ1JFVF9BQ0NFU1NfS0VZLFxyXG4gICAgICAgIGJ1Y2tldE5hbWU6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JVQ0tFVF9OQU1FLFxyXG4gICAgICAgIHJlZ2lvbjogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkVHSU9OLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBBV1MuY29uZmlnLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBBV1NfT3BzLiNDT05GSUcuQVdTX0tFWSxcclxuICAgICAgICAgICAgc2VjcmV0QWNjZXNzS2V5OiBBV1NfT3BzLiNDT05GSUcuQVdTX1NFQ1JFVCxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRVcmwoZmlsZU5hbWUpIHtcclxuICAgICAgICByZXR1cm4gYGh0dHBzOi8vJHtBV1NfT3BzLiNDT05GSUcuYnVja2V0TmFtZX0uczMuJHtcclxuICAgICAgICAgICAgQVdTX09wcy4jQ09ORklHLnJlZ2lvblxyXG4gICAgICAgIH0uYW1hem9uYXdzLmNvbS8ke2ZpbGVOYW1lfWA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBsb2FkVG9TMyhmaWxlKSB7XHJcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICBBQ0w6IFwicHVibGljLXJlYWRcIixcclxuICAgICAgICAgICAgS2V5OiBmaWxlLm5hbWUsXHJcbiAgICAgICAgICAgIENvbnRlbnRUeXBlOiBmaWxlLnR5cGUsXHJcbiAgICAgICAgICAgIEJvZHk6IGZpbGUsXHJcbiAgICAgICAgICAgIEJ1Y2tldDogQVdTX09wcy4jQ09ORklHLmJ1Y2tldE5hbWUsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgczMgPSBuZXcgQVdTLlMzKCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdXBsb2FkSGFuZGxlcjogczMudXBsb2FkKHBhcmFtcyksXHJcbiAgICAgICAgICAgIHVybDogdGhpcy5nZXRVcmwoZmlsZS5uYW1lKSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBV1NfT3BzO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIEFQUF9OQU1FOiBcIkFuMG4gQ2hhdFwiLFxyXG4gICAgREVTQ1JJUFRJT046IFwiTm93IGNoYXQgYW5vbnltb3VzbHkgYW5kIHNlY3VyZWx5XCIsXHJcblxyXG4gICAgU09DQUlMX0xJTktTOiB7XHJcbiAgICAgICAgZ2l0aHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9cIixcclxuICAgICAgICBsaW5rZWRpbjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIFNPQ0tFVF9FVkVOVFM6IHtcclxuICAgICAgICBKT0lOX1JPT006IFwiam9pblJvb21cIixcclxuICAgICAgICBDSEFUX0JPVDogXCJjaGF0Ym90XCIsXHJcbiAgICAgICAgQ0hBVF9NRVNTQUdFOiBcImNoYXRNZXNzYWdlXCIsXHJcbiAgICAgICAgUk9PTV9VU0VSUzogXCJyb29tVXNlcnNcIixcclxuICAgICAgICBESVNDT05ORUNUOiBcImRpc2Nvbm5lY3RcIixcclxuICAgIH0sXHJcbiAgICBNSU5fVVNFUk5BTUVfTEVOR1RIOiAzLFxyXG59O1xyXG4iLCJjb25zdCBkYXlqcyA9IHJlcXVpcmUoXCJkYXlqc1wiKTtcclxuXHJcbmNsYXNzIE1lc3NhZ2Uge1xyXG4gICAgY29uc3RydWN0b3IodXNlcm5hbWUsIHR5cGUpIHtcclxuICAgICAgICB0aGlzLnVzZXIgPSB1c2VybmFtZTtcclxuICAgICAgICB0aGlzLnRpbWUgPSBkYXlqcyhuZXcgRGF0ZSgpKTtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBUZXh0TWVzc2FnZSBleHRlbmRzIE1lc3NhZ2Uge1xyXG4gICAgY29uc3RydWN0b3IodXNlcm5hbWUsIGNoYXRNZXNzYWdlLCB0eXBlKSB7XHJcbiAgICAgICAgc3VwZXIodXNlcm5hbWUsIHR5cGUpO1xyXG4gICAgICAgIHRoaXMuY2hhdE1lc3NhZ2UgPSBjaGF0TWVzc2FnZTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgRmlsZU1lc3NhZ2UgZXh0ZW5kcyBNZXNzYWdlIHtcclxuICAgIGNvbnN0cnVjdG9yKHVzZXJuYW1lLCBmaWxlVXJsLCBmaWxlTmFtZSwgdHlwZSkge1xyXG4gICAgICAgIHN1cGVyKHVzZXJuYW1lLCB0eXBlKTtcclxuICAgICAgICB0aGlzLmZpbGVVcmwgPSBmaWxlVXJsO1xyXG4gICAgICAgIHRoaXMuZmlsZU5hbWUgPSBmaWxlTmFtZTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gbWVzc2FnZSB0eXBlc1xyXG5NZXNzYWdlLlRFWFQgPSBcInRleHRcIjtcclxuTWVzc2FnZS5CT1QgPSBcImJvdFwiO1xyXG5NZXNzYWdlLklNQUdFID0gXCJpbWFnZVwiO1xyXG5NZXNzYWdlLlZJREVPID0gXCJ2aWRlb1wiO1xyXG5NZXNzYWdlLkZJTEUgPSBcImZpbGVcIjtcclxuTWVzc2FnZS5PVEhFUlMgPSBcIm90aGVyc1wiO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBNZXNzYWdlLFxyXG4gICAgVGV4dE1lc3NhZ2UsXHJcbiAgICBGaWxlTWVzc2FnZSxcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXdzLXNka1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXlqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXlqcy9wbHVnaW4vY3VzdG9tUGFyc2VGb3JtYXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNvY2tldC5pby1jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=