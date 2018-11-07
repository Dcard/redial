'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _propName = require('./propName');

var _propName2 = _interopRequireDefault(_propName);

exports['default'] = function (name, components, locals) {
  return Promise.all((Array.isArray(components) ? components : [components]).

  // Filter out falsy components
  filter(function (component) {
    return component;
  })

  // Get component lifecycle hooks
  .map(function (component) {
    return { component: component, hooks: component[_propName2['default']] };
  })

  // Filter out components that haven't been decorated
  // or has not the hook of the same name
  .filter(function (_ref) {
    var hooks = _ref.hooks;
    return hooks && typeof hooks[name] === 'function';
  })

  // Calculate locals if required, execute hooks and store promises
  .reduce(function (promises, _ref2) {
    var component = _ref2.component;
    var hooks = _ref2.hooks;

    return promises.concat(execute());

    function execute() {
      try {
        return hooks[name](getLocals(), promises);
      } catch (err) {
        return Promise.reject(err);
      }
    }

    function getLocals() {
      return typeof locals === 'function' ? locals(component) : locals;
    }
  }, []));
};

module.exports = exports['default'];