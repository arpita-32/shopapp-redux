"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.remove = exports.add = exports.CartSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var CartSlice = (0, _toolkit.createSlice)({
  name: "cart",
  initialState: [],
  reducers: {
    add: function add(state, action) {
      state.push(action.payload);
    },
    remove: function remove(state, action) {
      return state.filter(function (item) {
        return item.id !== action.payload;
      });
    }
  }
});
exports.CartSlice = CartSlice;
var _CartSlice$actions = CartSlice.actions,
    add = _CartSlice$actions.add,
    remove = _CartSlice$actions.remove;
exports.remove = remove;
exports.add = add;
var _default = CartSlice.reducer;
exports["default"] = _default;
//# sourceMappingURL=CartSlice.dev.js.map
