'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _provideHooks = require('./provideHooks');

var _provideHooks2 = _interopRequireDefault(_provideHooks);

var _trigger = require('./trigger');

var _trigger2 = _interopRequireDefault(_trigger);

exports['default'] = {
  provideHooks: _provideHooks2['default'],
  trigger: _trigger2['default']
};
module.exports = exports['default'];