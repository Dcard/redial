'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _propName = require('./propName');

var _propName2 = _interopRequireDefault(_propName);

exports['default'] = function (hooks) {
  return function (ComposedComponent) {
    ComposedComponent[_propName2['default']] = hooks;
    return ComposedComponent;
  };
};

module.exports = exports['default'];