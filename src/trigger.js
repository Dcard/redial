import propName from './propName';

export default (name, components, locals) => Promise.all((Array.isArray(components) ? components : [components])

  // Filter out falsy components
  .filter(component => component)

  // Get component lifecycle hooks
  .map(component => ({ component, hooks: component[propName] }))

  // Filter out components that haven't been decorated
  // or has not the hook of the same name
  .filter(({ hooks }) => hooks && typeof hooks[name] === 'function')

  // Calculate locals if required, execute hooks and store promises
  .reduce((promises, { component, hooks }) => {
    return promises.concat(execute());

    function execute() {
      try {
        return hooks[name](getLocals(), promises);
      } catch (err) {
        return Promise.reject(err);
      }
    }

    function getLocals() {
      return typeof locals === 'function' ? locals(component) : locals
    }
  }, []));
