"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _CartSlice = require("./Slices/CartSlice");

var store = (0, _toolkit.configureStore)({
  reducer: {
    cart: _CartSlice.CartSlice
  }
});
exports.store = store;
//# sourceMappingURL=Store.dev.js.map
