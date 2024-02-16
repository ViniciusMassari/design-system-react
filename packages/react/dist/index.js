'use strict';
const __create = Object.create;
const __defProp = Object.defineProperty;
const __getOwnPropDesc = Object.getOwnPropertyDescriptor;
const __getOwnPropNames = Object.getOwnPropertyNames;
const __getProtoOf = Object.getPrototypeOf;
const __hasOwnProp = Object.prototype.hasOwnProperty;
const __commonJS = (cb, mod) =>
  function __require() {
    return (
      mod ||
        (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod),
      mod.exports
    );
  };
const __export = (target, all) => {
  for (const name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
const __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === 'object') || typeof from === 'function') {
    for (const key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
  }
  return to;
};
const __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule
      ? __defProp(target, 'default', { value: mod, enumerable: true })
      : target,
    mod
  )
);
const __toCommonJS = (mod) =>
  __copyProps(__defProp({}, '__esModule', { value: true }), mod);

// ../../node_modules/react/cjs/react.production.min.js
const require_react_production_min = __commonJS({
  '../../node_modules/react/cjs/react.production.min.js'(exports2) {
    'use strict';
    const l = Symbol.for('react.element');
    const n = Symbol.for('react.portal');
    const p = Symbol.for('react.fragment');
    const q = Symbol.for('react.strict_mode');
    const r = Symbol.for('react.profiler');
    const t = Symbol.for('react.provider');
    const u = Symbol.for('react.context');
    const v = Symbol.for('react.forward_ref');
    const w = Symbol.for('react.suspense');
    const x = Symbol.for('react.memo');
    const y = Symbol.for('react.lazy');
    const z = Symbol.iterator;
    function A(a) {
      if (a === null || typeof a !== 'object') return null;
      a = (z && a[z]) || a['@@iterator'];
      return typeof a === 'function' ? a : null;
    }
    const B = {
      isMounted: function () {
        return false;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    };
    const C = Object.assign;
    const D = {};
    function E(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    E.prototype.isReactComponent = {};
    E.prototype.setState = function (a, b) {
      if (typeof a !== 'object' && typeof a !== 'function' && a != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, a, b, 'setState');
    };
    E.prototype.forceUpdate = function (a) {
      this.updater.enqueueForceUpdate(this, a, 'forceUpdate');
    };
    function F() {}
    F.prototype = E.prototype;
    function G(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    const H = (G.prototype = new F());
    H.constructor = G;
    C(H, E.prototype);
    H.isPureReactComponent = true;
    const I = Array.isArray;
    const J = Object.prototype.hasOwnProperty;
    const K = { current: null };
    const L = { key: true, ref: true, __self: true, __source: true };
    function M(a, b, e) {
      let d;
      const c = {};
      let k = null;
      let h = null;
      if (b != null)
        for (d in (void 0 !== b.ref && (h = b.ref),
        void 0 !== b.key && (k = '' + b.key),
        b))
          J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
      let g = arguments.length - 2;
      if (g === 1) c.children = e;
      else if (g > 1) {
        for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
        c.children = f;
      }
      if (a && a.defaultProps)
        for (d in ((g = a.defaultProps), g)) void 0 === c[d] && (c[d] = g[d]);
      return {
        $$typeof: l,
        type: a,
        key: k,
        ref: h,
        props: c,
        _owner: K.current,
      };
    }
    function N(a, b) {
      return {
        $$typeof: l,
        type: a.type,
        key: b,
        ref: a.ref,
        props: a.props,
        _owner: a._owner,
      };
    }
    function O(a) {
      return typeof a === 'object' && a !== null && a.$$typeof === l;
    }
    function escape(a) {
      const b = { '=': '=0', ':': '=2' };
      return (
        '$' +
        a.replace(/[=:]/g, function (a2) {
          return b[a2];
        })
      );
    }
    const P = /\/+/g;
    function Q(a, b) {
      return typeof a === 'object' && a !== null && a.key != null
        ? escape('' + a.key)
        : b.toString(36);
    }
    function R(a, b, e, d, c) {
      let k = typeof a;
      if (k === 'undefined' || k === 'boolean') a = null;
      let h = false;
      if (a === null) h = true;
      else
        switch (k) {
          case 'string':
          case 'number':
            h = true;
            break;
          case 'object':
            switch (a.$$typeof) {
              case l:
              case n:
                h = true;
            }
        }
      if (h)
        return (
          (h = a),
          (c = c(h)),
          (a = d === '' ? '.' + Q(h, 0) : d),
          I(c)
            ? ((e = ''),
              a != null && (e = a.replace(P, '$&/') + '/'),
              R(c, b, e, '', function (a2) {
                return a2;
              }))
            : c != null &&
              (O(c) &&
                (c = N(
                  c,
                  e +
                    (!c.key || (h && h.key === c.key)
                      ? ''
                      : ('' + c.key).replace(P, '$&/') + '/') +
                    a
                )),
              b.push(c)),
          1
        );
      h = 0;
      d = d === '' ? '.' : d + ':';
      if (I(a))
        for (var g = 0; g < a.length; g++) {
          k = a[g];
          var f = d + Q(k, g);
          h += R(k, b, e, f, c);
        }
      else if (((f = A(a)), typeof f === 'function'))
        for (a = f.call(a), g = 0; !(k = a.next()).done; )
          (k = k.value), (f = d + Q(k, g++)), (h += R(k, b, e, f, c));
      else if (k === 'object')
        throw (
          ((b = String(a)),
          Error(
            'Objects are not valid as a React child (found: ' +
              (b === '[object Object]'
                ? 'object with keys {' + Object.keys(a).join(', ') + '}'
                : b) +
              '). If you meant to render a collection of children, use an array instead.'
          ))
        );
      return h;
    }
    function S(a, b, e) {
      if (a == null) return a;
      const d = [];
      let c = 0;
      R(a, d, '', '', function (a2) {
        return b.call(e, a2, c++);
      });
      return d;
    }
    function T(a) {
      if (a._status === -1) {
        let b = a._result;
        b = b();
        b.then(
          function (b2) {
            if (a._status === 0 || a._status === -1)
              (a._status = 1), (a._result = b2);
          },
          function (b2) {
            if (a._status === 0 || a._status === -1)
              (a._status = 2), (a._result = b2);
          }
        );
        a._status === -1 && ((a._status = 0), (a._result = b));
      }
      if (a._status === 1) return a._result.default;
      throw a._result;
    }
    const U = { current: null };
    const V = { transition: null };
    const W = {
      ReactCurrentDispatcher: U,
      ReactCurrentBatchConfig: V,
      ReactCurrentOwner: K,
    };
    exports2.Children = {
      map: S,
      forEach: function (a, b, e) {
        S(
          a,
          function () {
            b.apply(this, arguments);
          },
          e
        );
      },
      count: function (a) {
        let b = 0;
        S(a, function () {
          b++;
        });
        return b;
      },
      toArray: function (a) {
        return (
          S(a, function (a2) {
            return a2;
          }) || []
        );
      },
      only: function (a) {
        if (!O(a))
          throw Error(
            'React.Children.only expected to receive a single React element child.'
          );
        return a;
      },
    };
    exports2.Component = E;
    exports2.Fragment = p;
    exports2.Profiler = r;
    exports2.PureComponent = G;
    exports2.StrictMode = q;
    exports2.Suspense = w;
    exports2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
    exports2.cloneElement = function (a, b, e) {
      if (a === null || void 0 === a)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' +
            a +
            '.'
        );
      const d = C({}, a.props);
      let c = a.key;
      let k = a.ref;
      let h = a._owner;
      if (b != null) {
        void 0 !== b.ref && ((k = b.ref), (h = K.current));
        void 0 !== b.key && (c = '' + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for (f in b)
          J.call(b, f) &&
            !L.hasOwnProperty(f) &&
            (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
      }
      var f = arguments.length - 2;
      if (f === 1) d.children = e;
      else if (f > 1) {
        g = Array(f);
        for (let m = 0; m < f; m++) g[m] = arguments[m + 2];
        d.children = g;
      }
      return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
    };
    exports2.createContext = function (a) {
      a = {
        $$typeof: u,
        _currentValue: a,
        _currentValue2: a,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      };
      a.Provider = { $$typeof: t, _context: a };
      return (a.Consumer = a);
    };
    exports2.createElement = M;
    exports2.createFactory = function (a) {
      const b = M.bind(null, a);
      b.type = a;
      return b;
    };
    exports2.createRef = function () {
      return { current: null };
    };
    exports2.forwardRef = function (a) {
      return { $$typeof: v, render: a };
    };
    exports2.isValidElement = O;
    exports2.lazy = function (a) {
      return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
    };
    exports2.memo = function (a, b) {
      return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
    };
    exports2.startTransition = function (a) {
      const b = V.transition;
      V.transition = {};
      try {
        a();
      } finally {
        V.transition = b;
      }
    };
    exports2.unstable_act = function () {
      throw Error('act(...) is not supported in production builds of React.');
    };
    exports2.useCallback = function (a, b) {
      return U.current.useCallback(a, b);
    };
    exports2.useContext = function (a) {
      return U.current.useContext(a);
    };
    exports2.useDebugValue = function () {};
    exports2.useDeferredValue = function (a) {
      return U.current.useDeferredValue(a);
    };
    exports2.useEffect = function (a, b) {
      return U.current.useEffect(a, b);
    };
    exports2.useId = function () {
      return U.current.useId();
    };
    exports2.useImperativeHandle = function (a, b, e) {
      return U.current.useImperativeHandle(a, b, e);
    };
    exports2.useInsertionEffect = function (a, b) {
      return U.current.useInsertionEffect(a, b);
    };
    exports2.useLayoutEffect = function (a, b) {
      return U.current.useLayoutEffect(a, b);
    };
    exports2.useMemo = function (a, b) {
      return U.current.useMemo(a, b);
    };
    exports2.useReducer = function (a, b, e) {
      return U.current.useReducer(a, b, e);
    };
    exports2.useRef = function (a) {
      return U.current.useRef(a);
    };
    exports2.useState = function (a) {
      return U.current.useState(a);
    };
    exports2.useSyncExternalStore = function (a, b, e) {
      return U.current.useSyncExternalStore(a, b, e);
    };
    exports2.useTransition = function () {
      return U.current.useTransition();
    };
    exports2.version = '18.2.0';
  },
});

// ../../node_modules/react/cjs/react.development.js
const require_react_development = __commonJS({
  '../../node_modules/react/cjs/react.development.js'(exports2, module2) {
    'use strict';
    if (process.env.NODE_ENV !== 'production') {
      (function () {
        'use strict';
        if (
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
            'function'
        ) {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(
            new Error()
          );
        }
        const ReactVersion = '18.2.0';
        const REACT_ELEMENT_TYPE = Symbol.for('react.element');
        const REACT_PORTAL_TYPE = Symbol.for('react.portal');
        const REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
        const REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
        const REACT_PROFILER_TYPE = Symbol.for('react.profiler');
        const REACT_PROVIDER_TYPE = Symbol.for('react.provider');
        const REACT_CONTEXT_TYPE = Symbol.for('react.context');
        const REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
        const REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
        const REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
        const REACT_MEMO_TYPE = Symbol.for('react.memo');
        const REACT_LAZY_TYPE = Symbol.for('react.lazy');
        const REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
        const MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        const FAUX_ITERATOR_SYMBOL = '@@iterator';
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== 'object') {
            return null;
          }
          const maybeIterator =
            (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
            maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === 'function') {
            return maybeIterator;
          }
          return null;
        }
        const ReactCurrentDispatcher = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null,
        };
        const ReactCurrentBatchConfig = {
          transition: null,
        };
        const ReactCurrentActQueue = {
          current: null,
          // Used to reproduce behavior of `batchedUpdates` in legacy mode.
          isBatchingLegacy: false,
          didScheduleLegacyUpdate: false,
        };
        const ReactCurrentOwner = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null,
        };
        const ReactDebugCurrentFrame = {};
        let currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
          {
            currentExtraStackFrame = stack;
          }
        }
        {
          ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
            {
              currentExtraStackFrame = stack;
            }
          };
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function () {
            let stack = '';
            if (currentExtraStackFrame) {
              stack += currentExtraStackFrame;
            }
            const impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || '';
            }
            return stack;
          };
        }
        const enableScopeAPI = false;
        const enableCacheElement = false;
        const enableTransitionTracing = false;
        const enableLegacyHidden = false;
        const enableDebugTracing = false;
        const ReactSharedInternals = {
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner,
        };
        {
          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
          ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
        }
        function warn(format) {
          {
            {
              for (
                var _len = arguments.length,
                  args = new Array(_len > 1 ? _len - 1 : 0),
                  _key = 1;
                _key < _len;
                _key++
              ) {
                args[_key - 1] = arguments[_key];
              }
              printWarning('warn', format, args);
            }
          }
        }
        function error(format) {
          {
            {
              for (
                var _len2 = arguments.length,
                  args = new Array(_len2 > 1 ? _len2 - 1 : 0),
                  _key2 = 1;
                _key2 < _len2;
                _key2++
              ) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning('error', format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            const ReactDebugCurrentFrame2 =
              ReactSharedInternals.ReactDebugCurrentFrame;
            const stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== '') {
              format += '%s';
              args = args.concat([stack]);
            }
            const argsWithFormat = args.map(function (item) {
              return String(item);
            });
            argsWithFormat.unshift('Warning: ' + format);
            Function.prototype.apply.call(
              console[level],
              console,
              argsWithFormat
            );
          }
        }
        const didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            const _constructor = publicInstance.constructor;
            const componentName =
              (_constructor &&
                (_constructor.displayName || _constructor.name)) ||
              'ReactClass';
            const warningKey = componentName + '.' + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error(
              "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
              callerName,
              componentName
            );
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        const ReactNoopUpdateQueue = {
          /**
           * Checks whether or not this composite component is mounted.
           * @param {ReactClass} publicInstance The instance we want to test.
           * @return {boolean} True if mounted, false otherwise.
           * @protected
           * @final
           */
          isMounted: function (publicInstance) {
            return false;
          },
          /**
           * Forces an update. This should only be invoked when it is known with
           * certainty that we are **not** in a DOM transaction.
           *
           * You may want to call this when you know that some deeper aspect of the
           * component's state has changed but `setState` was not called.
           *
           * This will not invoke `shouldComponentUpdate`, but it will invoke
           * `componentWillUpdate` and `componentDidUpdate`.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueForceUpdate: function (publicInstance, callback, callerName) {
            warnNoop(publicInstance, 'forceUpdate');
          },
          /**
           * Replaces all of the state. Always use this or `setState` to mutate state.
           * You should treat `this.state` as immutable.
           *
           * There is no guarantee that `this.state` will be immediately updated, so
           * accessing `this.state` after calling this method may return the old value.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} completeState Next state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueReplaceState: function (
            publicInstance,
            completeState,
            callback,
            callerName
          ) {
            warnNoop(publicInstance, 'replaceState');
          },
          /**
           * Sets a subset of the state. This only exists because _pendingState is
           * internal. This provides a merging strategy that is not available to deep
           * properties which is confusing. TODO: Expose pendingState or don't use it
           * during the merge.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} partialState Next partial state to be merged with state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} Name of the calling function in the public API.
           * @internal
           */
          enqueueSetState: function (
            publicInstance,
            partialState,
            callback,
            callerName
          ) {
            warnNoop(publicInstance, 'setState');
          },
        };
        const assign = Object.assign;
        const emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function (partialState, callback) {
          if (
            typeof partialState !== 'object' &&
            typeof partialState !== 'function' &&
            partialState != null
          ) {
            throw new Error(
              'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
            );
          }
          this.updater.enqueueSetState(
            this,
            partialState,
            callback,
            'setState'
          );
        };
        Component.prototype.forceUpdate = function (callback) {
          this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
        };
        {
          const deprecatedAPIs = {
            isMounted: [
              'isMounted',
              'Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.',
            ],
            replaceState: [
              'replaceState',
              'Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).',
            ],
          };
          const defineDeprecationWarning = function (methodName, info) {
            Object.defineProperty(Component.prototype, methodName, {
              get: function () {
                warn(
                  '%s(...) is deprecated in plain JavaScript React classes. %s',
                  info[0],
                  info[1]
                );
                return void 0;
              },
            });
          };
          for (const fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {}
        ComponentDummy.prototype = Component.prototype;
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        const pureComponentPrototype = (PureComponent.prototype =
          new ComponentDummy());
        pureComponentPrototype.constructor = PureComponent;
        assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef() {
          const refObject = {
            current: null,
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        const isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            const hasToStringTag =
              typeof Symbol === 'function' && Symbol.toStringTag;
            const type =
              (hasToStringTag && value[Symbol.toStringTag]) ||
              value.constructor.name ||
              'Object';
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return '' + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error(
                'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
                typeName(value)
              );
              return testStringCoercion(value);
            }
          }
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          const displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          const functionName = innerType.displayName || innerType.name || '';
          return functionName !== ''
            ? wrapperName + '(' + functionName + ')'
            : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || 'Context';
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === 'number') {
              error(
                'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.'
              );
            }
          }
          if (typeof type === 'function') {
            return type.displayName || type.name || null;
          }
          if (typeof type === 'string') {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return 'Fragment';
            case REACT_PORTAL_TYPE:
              return 'Portal';
            case REACT_PROFILER_TYPE:
              return 'Profiler';
            case REACT_STRICT_MODE_TYPE:
              return 'StrictMode';
            case REACT_SUSPENSE_TYPE:
              return 'Suspense';
            case REACT_SUSPENSE_LIST_TYPE:
              return 'SuspenseList';
          }
          if (typeof type === 'object') {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + '.Consumer';
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + '.Provider';
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, 'ForwardRef');
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || 'Memo';
              case REACT_LAZY_TYPE: {
                const lazyComponent = type;
                const payload = lazyComponent._payload;
                const init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        const hasOwnProperty = Object.prototype.hasOwnProperty;
        const RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true,
        };
        let specialPropKeyWarningShown,
          specialPropRefWarningShown,
          didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, 'ref')) {
              const getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, 'key')) {
              const getter = Object.getOwnPropertyDescriptor(config, 'key').get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          const warnAboutAccessingKey = function () {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error(
                  '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                  displayName
                );
              }
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, 'key', {
            get: warnAboutAccessingKey,
            configurable: true,
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          const warnAboutAccessingRef = function () {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error(
                  '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                  displayName
                );
              }
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, 'ref', {
            get: warnAboutAccessingRef,
            configurable: true,
          });
        }
        function warnIfStringRefCannotBeAutoConverted(config) {
          {
            if (
              typeof config.ref === 'string' &&
              ReactCurrentOwner.current &&
              config.__self &&
              ReactCurrentOwner.current.stateNode !== config.__self
            ) {
              const componentName = getComponentNameFromType(
                ReactCurrentOwner.current.type
              );
              if (!didWarnAboutStringRefs[componentName]) {
                error(
                  'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                  componentName,
                  config.ref
                );
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        const ReactElement = function (
          type,
          key,
          ref,
          self,
          source,
          owner,
          props
        ) {
          const element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner,
          };
          {
            element._store = {};
            Object.defineProperty(element._store, 'validated', {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false,
            });
            Object.defineProperty(element, '_self', {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self,
            });
            Object.defineProperty(element, '_source', {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source,
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function createElement(type, config, children) {
          let propName;
          const props = {};
          let key = null;
          let ref = null;
          let self = null;
          let source = null;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config);
              }
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = '' + config.key;
            }
            self = config.__self === void 0 ? null : config.__self;
            source = config.__source === void 0 ? null : config.__source;
            for (propName in config) {
              if (
                hasOwnProperty.call(config, propName) &&
                !RESERVED_PROPS.hasOwnProperty(propName)
              ) {
                props[propName] = config[propName];
              }
            }
          }
          const childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            const childArray = Array(childrenLength);
            for (let i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }
          if (type && type.defaultProps) {
            const defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              const displayName =
                typeof type === 'function'
                  ? type.displayName || type.name || 'Unknown'
                  : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(
            type,
            key,
            ref,
            self,
            source,
            ReactCurrentOwner.current,
            props
          );
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          const newElement = ReactElement(
            oldElement.type,
            newKey,
            oldElement.ref,
            oldElement._self,
            oldElement._source,
            oldElement._owner,
            oldElement.props
          );
          return newElement;
        }
        function cloneElement(element, config, children) {
          if (element === null || element === void 0) {
            throw new Error(
              'React.cloneElement(...): The argument must be a React element, but you passed ' +
                element +
                '.'
            );
          }
          let propName;
          const props = assign({}, element.props);
          let key = element.key;
          let ref = element.ref;
          const self = element._self;
          const source = element._source;
          let owner = element._owner;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = '' + config.key;
            }
            let defaultProps;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config) {
              if (
                hasOwnProperty.call(config, propName) &&
                !RESERVED_PROPS.hasOwnProperty(propName)
              ) {
                if (config[propName] === void 0 && defaultProps !== void 0) {
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config[propName];
                }
              }
            }
          }
          const childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            const childArray = Array(childrenLength);
            for (let i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
          }
          return ReactElement(
            element.type,
            key,
            ref,
            self,
            source,
            owner,
            props
          );
        }
        function isValidElement(object) {
          return (
            typeof object === 'object' &&
            object !== null &&
            object.$$typeof === REACT_ELEMENT_TYPE
          );
        }
        const SEPARATOR = '.';
        const SUBSEPARATOR = ':';
        function escape(key) {
          const escapeRegex = /[=:]/g;
          const escaperLookup = {
            '=': '=0',
            ':': '=2',
          };
          const escapedString = key.replace(escapeRegex, function (match) {
            return escaperLookup[match];
          });
          return '$' + escapedString;
        }
        let didWarnAboutMaps = false;
        const userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
          return text.replace(userProvidedKeyEscapeRegex, '$&/');
        }
        function getElementKey(element, index) {
          if (
            typeof element === 'object' &&
            element !== null &&
            element.key != null
          ) {
            {
              checkKeyStringCoercion(element.key);
            }
            return escape('' + element.key);
          }
          return index.toString(36);
        }
        function mapIntoArray(
          children,
          array,
          escapedPrefix,
          nameSoFar,
          callback
        ) {
          const type = typeof children;
          if (type === 'undefined' || type === 'boolean') {
            children = null;
          }
          let invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case 'string':
              case 'number':
                invokeCallback = true;
                break;
              case 'object':
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            const _child = children;
            let mappedChild = callback(_child);
            const childKey =
              nameSoFar === ''
                ? SEPARATOR + getElementKey(_child, 0)
                : nameSoFar;
            if (isArray(mappedChild)) {
              let escapedChildKey = '';
              if (childKey != null) {
                escapedChildKey = escapeUserProvidedKey(childKey) + '/';
              }
              mapIntoArray(
                mappedChild,
                array,
                escapedChildKey,
                '',
                function (c) {
                  return c;
                }
              );
            } else if (mappedChild != null) {
              if (isValidElement(mappedChild)) {
                {
                  if (
                    mappedChild.key &&
                    (!_child || _child.key !== mappedChild.key)
                  ) {
                    checkKeyStringCoercion(mappedChild.key);
                  }
                }
                mappedChild = cloneAndReplaceKey(
                  mappedChild,
                  // Keep both the (mapped) and old keys if they differ, just as
                  // traverseAllChildren used to do for objects as children
                  escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                    (mappedChild.key &&
                    (!_child || _child.key !== mappedChild.key)
                      ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                        // eslint-disable-next-line react-internal/safe-string-coercion
                        escapeUserProvidedKey('' + mappedChild.key) + '/'
                      : '') +
                    childKey
                );
              }
              array.push(mappedChild);
            }
            return 1;
          }
          let child;
          let nextName;
          let subtreeCount = 0;
          const nextNamePrefix =
            nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (isArray(children)) {
            for (let i = 0; i < children.length; i++) {
              child = children[i];
              nextName = nextNamePrefix + getElementKey(child, i);
              subtreeCount += mapIntoArray(
                child,
                array,
                escapedPrefix,
                nextName,
                callback
              );
            }
          } else {
            const iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === 'function') {
              const iterableChildren = children;
              {
                if (iteratorFn === iterableChildren.entries) {
                  if (!didWarnAboutMaps) {
                    warn(
                      'Using Maps as children is not supported. Use an array of keyed ReactElements instead.'
                    );
                  }
                  didWarnAboutMaps = true;
                }
              }
              const iterator = iteratorFn.call(iterableChildren);
              let step;
              let ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getElementKey(child, ii++);
                subtreeCount += mapIntoArray(
                  child,
                  array,
                  escapedPrefix,
                  nextName,
                  callback
                );
              }
            } else if (type === 'object') {
              const childrenString = String(children);
              throw new Error(
                'Objects are not valid as a React child (found: ' +
                  (childrenString === '[object Object]'
                    ? 'object with keys {' +
                      Object.keys(children).join(', ') +
                      '}'
                    : childrenString) +
                  '). If you meant to render a collection of children, use an array instead.'
              );
            }
          }
          return subtreeCount;
        }
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          const result = [];
          let count = 0;
          mapIntoArray(children, result, '', '', function (child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function countChildren(children) {
          let n = 0;
          mapChildren(children, function () {
            n++;
          });
          return n;
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
          mapChildren(
            children,
            function () {
              forEachFunc.apply(this, arguments);
            },
            forEachContext
          );
        }
        function toArray(children) {
          return (
            mapChildren(children, function (child) {
              return child;
            }) || []
          );
        }
        function onlyChild(children) {
          if (!isValidElement(children)) {
            throw new Error(
              'React.Children.only expected to receive a single React element child.'
            );
          }
          return children;
        }
        function createContext(defaultValue) {
          const context = {
            $$typeof: REACT_CONTEXT_TYPE,
            // As a workaround to support multiple concurrent renderers, we categorize
            // some renderers as primary and others as secondary. We only expect
            // there to be two concurrent renderers at most: React Native (primary) and
            // Fabric (secondary); React DOM (primary) and React ART (secondary).
            // Secondary renderers store their context values on separate fields.
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            // Used to track how many concurrent renderers this context currently
            // supports within in a single renderer. Such as parallel server rendering.
            _threadCount: 0,
            // These are circular
            Provider: null,
            Consumer: null,
            // Add these to use same hidden class in VM as ServerContext
            _defaultValue: null,
            _globalName: null,
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context,
          };
          let hasWarnedAboutUsingNestedContextConsumers = false;
          let hasWarnedAboutUsingConsumerProvider = false;
          let hasWarnedAboutDisplayNameOnConsumer = false;
          {
            const Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context,
            };
            Object.defineProperties(Consumer, {
              Provider: {
                get: function () {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error(
                      'Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?'
                    );
                  }
                  return context.Provider;
                },
                set: function (_Provider) {
                  context.Provider = _Provider;
                },
              },
              _currentValue: {
                get: function () {
                  return context._currentValue;
                },
                set: function (_currentValue) {
                  context._currentValue = _currentValue;
                },
              },
              _currentValue2: {
                get: function () {
                  return context._currentValue2;
                },
                set: function (_currentValue2) {
                  context._currentValue2 = _currentValue2;
                },
              },
              _threadCount: {
                get: function () {
                  return context._threadCount;
                },
                set: function (_threadCount) {
                  context._threadCount = _threadCount;
                },
              },
              Consumer: {
                get: function () {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error(
                      'Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?'
                    );
                  }
                  return context.Consumer;
                },
              },
              displayName: {
                get: function () {
                  return context.displayName;
                },
                set: function (displayName) {
                  if (!hasWarnedAboutDisplayNameOnConsumer) {
                    warn(
                      "Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",
                      displayName
                    );
                    hasWarnedAboutDisplayNameOnConsumer = true;
                  }
                },
              },
            });
            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        const Uninitialized = -1;
        const Pending = 0;
        const Resolved = 1;
        const Rejected = 2;
        function lazyInitializer(payload) {
          if (payload._status === Uninitialized) {
            const ctor = payload._result;
            const thenable = ctor();
            thenable.then(
              function (moduleObject2) {
                if (
                  payload._status === Pending ||
                  payload._status === Uninitialized
                ) {
                  const resolved = payload;
                  resolved._status = Resolved;
                  resolved._result = moduleObject2;
                }
              },
              function (error2) {
                if (
                  payload._status === Pending ||
                  payload._status === Uninitialized
                ) {
                  const rejected = payload;
                  rejected._status = Rejected;
                  rejected._result = error2;
                }
              }
            );
            if (payload._status === Uninitialized) {
              const pending = payload;
              pending._status = Pending;
              pending._result = thenable;
            }
          }
          if (payload._status === Resolved) {
            const moduleObject = payload._result;
            {
              if (moduleObject === void 0) {
                error(
                  "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
                  moduleObject
                );
              }
            }
            {
              if (!('default' in moduleObject)) {
                error(
                  "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
                  moduleObject
                );
              }
            }
            return moduleObject.default;
          } else {
            throw payload._result;
          }
        }
        function lazy(ctor) {
          const payload = {
            // We use these fields to store the result.
            _status: Uninitialized,
            _result: ctor,
          };
          const lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer,
          };
          {
            let defaultProps;
            let propTypes;
            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: function () {
                  return defaultProps;
                },
                set: function (newDefaultProps) {
                  error(
                    'React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.'
                  );
                  defaultProps = newDefaultProps;
                  Object.defineProperty(lazyType, 'defaultProps', {
                    enumerable: true,
                  });
                },
              },
              propTypes: {
                configurable: true,
                get: function () {
                  return propTypes;
                },
                set: function (newPropTypes) {
                  error(
                    'React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.'
                  );
                  propTypes = newPropTypes;
                  Object.defineProperty(lazyType, 'propTypes', {
                    enumerable: true,
                  });
                },
              },
            });
          }
          return lazyType;
        }
        function forwardRef(render) {
          {
            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
              error(
                'forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).'
              );
            } else if (typeof render !== 'function') {
              error(
                'forwardRef requires a render function but was given %s.',
                render === null ? 'null' : typeof render
              );
            } else {
              if (render.length !== 0 && render.length !== 2) {
                error(
                  'forwardRef render functions accept exactly two parameters: props and ref. %s',
                  render.length === 1
                    ? 'Did you forget to use the ref parameter?'
                    : 'Any additional parameter will be undefined.'
                );
              }
            }
            if (render != null) {
              if (render.defaultProps != null || render.propTypes != null) {
                error(
                  'forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?'
                );
              }
            }
          }
          const elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render,
          };
          {
            let ownName;
            Object.defineProperty(elementType, 'displayName', {
              enumerable: false,
              configurable: true,
              get: function () {
                return ownName;
              },
              set: function (name) {
                ownName = name;
                if (!render.name && !render.displayName) {
                  render.displayName = name;
                }
              },
            });
          }
          return elementType;
        }
        let REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
        }
        function isValidElementType(type) {
          if (typeof type === 'string' || typeof type === 'function') {
            return true;
          }
          if (
            type === REACT_FRAGMENT_TYPE ||
            type === REACT_PROFILER_TYPE ||
            enableDebugTracing ||
            type === REACT_STRICT_MODE_TYPE ||
            type === REACT_SUSPENSE_TYPE ||
            type === REACT_SUSPENSE_LIST_TYPE ||
            enableLegacyHidden ||
            type === REACT_OFFSCREEN_TYPE ||
            enableScopeAPI ||
            enableCacheElement ||
            enableTransitionTracing
          ) {
            return true;
          }
          if (typeof type === 'object' && type !== null) {
            if (
              type.$$typeof === REACT_LAZY_TYPE ||
              type.$$typeof === REACT_MEMO_TYPE ||
              type.$$typeof === REACT_PROVIDER_TYPE ||
              type.$$typeof === REACT_CONTEXT_TYPE ||
              type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
              // types supported by any Flight configuration anywhere since
              // we don't know which Flight build this will end up being used
              // with.
              type.$$typeof === REACT_MODULE_REFERENCE ||
              type.getModuleId !== void 0
            ) {
              return true;
            }
          }
          return false;
        }
        function memo(type, compare) {
          {
            if (!isValidElementType(type)) {
              error(
                'memo: The first argument must be a component. Instead received: %s',
                type === null ? 'null' : typeof type
              );
            }
          }
          const elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare === void 0 ? null : compare,
          };
          {
            let ownName;
            Object.defineProperty(elementType, 'displayName', {
              enumerable: false,
              configurable: true,
              get: function () {
                return ownName;
              },
              set: function (name) {
                ownName = name;
                if (!type.name && !type.displayName) {
                  type.displayName = name;
                }
              },
            });
          }
          return elementType;
        }
        function resolveDispatcher() {
          const dispatcher = ReactCurrentDispatcher.current;
          {
            if (dispatcher === null) {
              error(
                'Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.'
              );
            }
          }
          return dispatcher;
        }
        function useContext(Context) {
          const dispatcher = resolveDispatcher();
          {
            if (Context._context !== void 0) {
              const realContext = Context._context;
              if (realContext.Consumer === Context) {
                error(
                  'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?'
                );
              } else if (realContext.Provider === Context) {
                error(
                  'Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?'
                );
              }
            }
          }
          return dispatcher.useContext(Context);
        }
        function useState(initialState) {
          const dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }
        function useReducer(reducer, initialArg, init) {
          const dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer, initialArg, init);
        }
        function useRef(initialValue) {
          const dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect(create, deps) {
          const dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        function useInsertionEffect(create, deps) {
          const dispatcher = resolveDispatcher();
          return dispatcher.useInsertionEffect(create, deps);
        }
        function useLayoutEffect(create, deps) {
          const dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback(callback, deps) {
          const dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo(create, deps) {
          const dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle(ref, create, deps) {
          const dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue(value, formatterFn) {
          {
            const dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        function useTransition() {
          const dispatcher = resolveDispatcher();
          return dispatcher.useTransition();
        }
        function useDeferredValue(value) {
          const dispatcher = resolveDispatcher();
          return dispatcher.useDeferredValue(value);
        }
        function useId() {
          const dispatcher = resolveDispatcher();
          return dispatcher.useId();
        }
        function useSyncExternalStore(
          subscribe,
          getSnapshot,
          getServerSnapshot
        ) {
          const dispatcher = resolveDispatcher();
          return dispatcher.useSyncExternalStore(
            subscribe,
            getSnapshot,
            getServerSnapshot
          );
        }
        let disabledDepth = 0;
        let prevLog;
        let prevInfo;
        let prevWarn;
        let prevError;
        let prevGroup;
        let prevGroupCollapsed;
        let prevGroupEnd;
        function disabledLog() {}
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              const props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true,
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props,
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              const props = {
                configurable: true,
                enumerable: true,
                writable: true,
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog,
                }),
                info: assign({}, props, {
                  value: prevInfo,
                }),
                warn: assign({}, props, {
                  value: prevWarn,
                }),
                error: assign({}, props, {
                  value: prevError,
                }),
                group: assign({}, props, {
                  value: prevGroup,
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed,
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd,
                }),
              });
            }
            if (disabledDepth < 0) {
              error(
                'disabledDepth fell below zero. This is a bug in React. Please file an issue.'
              );
            }
          }
        }
        const ReactCurrentDispatcher$1 =
          ReactSharedInternals.ReactCurrentDispatcher;
        let prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                const match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = (match && match[1]) || '';
              }
            }
            return '\n' + prefix + name;
          }
        }
        let reentry = false;
        let componentFrameCache;
        {
          const PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return '';
          }
          {
            const frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          let control;
          reentry = true;
          const previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          let previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              const Fake = function () {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, 'props', {
                set: function () {
                  throw Error();
                },
              });
              if (typeof Reflect === 'object' && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === 'string') {
              const sampleLines = sample.stack.split('\n');
              const controlLines = control.stack.split('\n');
              let s = sampleLines.length - 1;
              let c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        let _frame =
                          '\n' + sampleLines[s].replace(' at new ', ' at ');
                        if (fn.displayName && _frame.includes('<anonymous>')) {
                          _frame = _frame.replace(
                            '<anonymous>',
                            fn.displayName
                          );
                        }
                        {
                          if (typeof fn === 'function') {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher$1.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          const name = fn ? fn.displayName || fn.name : '';
          const syntheticFrame = name
            ? describeBuiltInComponentFrame(name)
            : '';
          {
            if (typeof fn === 'function') {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component2) {
          const prototype = Component2.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return '';
          }
          if (typeof type === 'function') {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === 'string') {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame('Suspense');
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame('SuspenseList');
          }
          if (typeof type === 'object') {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(
                  type.type,
                  source,
                  ownerFn
                );
              case REACT_LAZY_TYPE: {
                const lazyComponent = type;
                const payload = lazyComponent._payload;
                const init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(
                    init(payload),
                    source,
                    ownerFn
                  );
                } catch (x) {}
              }
            }
          }
          return '';
        }
        const loggedTypeFailures = {};
        const ReactDebugCurrentFrame$1 =
          ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              const owner = element._owner;
              const stack = describeUnknownElementTypeFrameInDEV(
                element.type,
                element._source,
                owner ? owner.type : null
              );
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(
          typeSpecs,
          values,
          location,
          componentName,
          element
        ) {
          {
            const has = Function.call.bind(hasOwnProperty);
            for (const typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                let error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== 'function') {
                    const err = Error(
                      (componentName || 'React class') +
                        ': ' +
                        location +
                        ' type `' +
                        typeSpecName +
                        '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                        typeof typeSpecs[typeSpecName] +
                        '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
                    );
                    err.name = 'Invariant Violation';
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](
                    values,
                    typeSpecName,
                    componentName,
                    location,
                    null,
                    'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
                  );
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error(
                    '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                    componentName || 'React class',
                    location,
                    typeSpecName,
                    typeof error$1
                  );
                  setCurrentlyValidatingElement(null);
                }
                if (
                  error$1 instanceof Error &&
                  !(error$1.message in loggedTypeFailures)
                ) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error('Failed %s type: %s', location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              const owner = element._owner;
              const stack = describeUnknownElementTypeFrameInDEV(
                element.type,
                element._source,
                owner ? owner.type : null
              );
              setExtraStackFrame(stack);
            } else {
              setExtraStackFrame(null);
            }
          }
        }
        let propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            const name = getComponentNameFromType(
              ReactCurrentOwner.current.type
            );
            if (name) {
              return '\n\nCheck the render method of `' + name + '`.';
            }
          }
          return '';
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== void 0) {
            const fileName = source.fileName.replace(/^.*[\\\/]/, '');
            const lineNumber = source.lineNumber;
            return (
              '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.'
            );
          }
          return '';
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== void 0) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return '';
        }
        const ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          let info = getDeclarationErrorAddendum();
          if (!info) {
            const parentName =
              typeof parentType === 'string'
                ? parentType
                : parentType.displayName || parentType.name;
            if (parentName) {
              info =
                '\n\nCheck the top-level render call using <' +
                parentName +
                '>.';
            }
          }
          return info;
        }
        function validateExplicitKey(element, parentType) {
          if (
            !element._store ||
            element._store.validated ||
            element.key != null
          ) {
            return;
          }
          element._store.validated = true;
          const currentComponentErrorInfo =
            getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          let childOwner = '';
          if (
            element &&
            element._owner &&
            element._owner !== ReactCurrentOwner.current
          ) {
            childOwner =
              ' It was passed a child from ' +
              getComponentNameFromType(element._owner.type) +
              '.';
          }
          {
            setCurrentlyValidatingElement$1(element);
            error(
              'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
              currentComponentErrorInfo,
              childOwner
            );
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          if (typeof node !== 'object') {
            return;
          }
          if (isArray(node)) {
            for (let i = 0; i < node.length; i++) {
              const child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            const iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === 'function') {
              if (iteratorFn !== node.entries) {
                const iterator = iteratorFn.call(node);
                let step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            const type = element.type;
            if (type === null || type === void 0 || typeof type === 'string') {
              return;
            }
            let propTypes;
            if (typeof type === 'function') {
              propTypes = type.propTypes;
            } else if (
              typeof type === 'object' &&
              (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
                // Inner props are checked in the reconciler.
                type.$$typeof === REACT_MEMO_TYPE)
            ) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              const name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, 'prop', name, element);
            } else if (
              type.PropTypes !== void 0 &&
              !propTypesMisspellWarningShown
            ) {
              propTypesMisspellWarningShown = true;
              const _name = getComponentNameFromType(type);
              error(
                'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
                _name || 'Unknown'
              );
            }
            if (
              typeof type.getDefaultProps === 'function' &&
              !type.getDefaultProps.isReactClassApproved
            ) {
              error(
                'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
              );
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            const keys = Object.keys(fragment.props);
            for (let i = 0; i < keys.length; i++) {
              const key = keys[i];
              if (key !== 'children' && key !== 'key') {
                setCurrentlyValidatingElement$1(fragment);
                error(
                  'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                  key
                );
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error('Invalid attribute `ref` supplied to `React.Fragment`.');
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function createElementWithValidation(type, props, children) {
          const validType = isValidElementType(type);
          if (!validType) {
            let info = '';
            if (
              type === void 0 ||
              (typeof type === 'object' &&
                type !== null &&
                Object.keys(type).length === 0)
            ) {
              info +=
                " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            const sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            let typeString;
            if (type === null) {
              typeString = 'null';
            } else if (isArray(type)) {
              typeString = 'array';
            } else if (
              type !== void 0 &&
              type.$$typeof === REACT_ELEMENT_TYPE
            ) {
              typeString =
                '<' +
                (getComponentNameFromType(type.type) || 'Unknown') +
                ' />';
              info =
                ' Did you accidentally export a JSX literal instead of a component?';
            } else {
              typeString = typeof type;
            }
            {
              error(
                'React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
                typeString,
                info
              );
            }
          }
          const element = createElement.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (let i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        let didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          const validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn(
                'React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.'
              );
            }
            Object.defineProperty(validatedFactory, 'type', {
              enumerable: false,
              get: function () {
                warn(
                  'Factory.type is deprecated. Access the class directly before passing it to createFactory.'
                );
                Object.defineProperty(this, 'type', {
                  value: type,
                });
                return type;
              },
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          const newElement = cloneElement.apply(this, arguments);
          for (let i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        function startTransition(scope, options) {
          const prevTransition = ReactCurrentBatchConfig.transition;
          ReactCurrentBatchConfig.transition = {};
          const currentTransition = ReactCurrentBatchConfig.transition;
          {
            ReactCurrentBatchConfig.transition._updatedFibers =
              /* @__PURE__ */ new Set();
          }
          try {
            scope();
          } finally {
            ReactCurrentBatchConfig.transition = prevTransition;
            {
              if (prevTransition === null && currentTransition._updatedFibers) {
                const updatedFibersCount =
                  currentTransition._updatedFibers.size;
                if (updatedFibersCount > 10) {
                  warn(
                    'Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.'
                  );
                }
                currentTransition._updatedFibers.clear();
              }
            }
          }
        }
        let didWarnAboutMessageChannel = false;
        let enqueueTaskImpl = null;
        function enqueueTask(task) {
          if (enqueueTaskImpl === null) {
            try {
              const requireString = ('require' + Math.random()).slice(0, 7);
              const nodeRequire = module2 && module2[requireString];
              enqueueTaskImpl = nodeRequire.call(
                module2,
                'timers'
              ).setImmediate;
            } catch (_err) {
              enqueueTaskImpl = function (callback) {
                {
                  if (didWarnAboutMessageChannel === false) {
                    didWarnAboutMessageChannel = true;
                    if (typeof MessageChannel === 'undefined') {
                      error(
                        'This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.'
                      );
                    }
                  }
                }
                const channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
              };
            }
          }
          return enqueueTaskImpl(task);
        }
        let actScopeDepth = 0;
        let didWarnNoAwaitAct = false;
        function act(callback) {
          {
            const prevActScopeDepth = actScopeDepth;
            actScopeDepth++;
            if (ReactCurrentActQueue.current === null) {
              ReactCurrentActQueue.current = [];
            }
            const prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
            let result;
            try {
              ReactCurrentActQueue.isBatchingLegacy = true;
              result = callback();
              if (
                !prevIsBatchingLegacy &&
                ReactCurrentActQueue.didScheduleLegacyUpdate
              ) {
                const queue = ReactCurrentActQueue.current;
                if (queue !== null) {
                  ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                  flushActQueue(queue);
                }
              }
            } catch (error2) {
              popActScope(prevActScopeDepth);
              throw error2;
            } finally {
              ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
            }
            if (
              result !== null &&
              typeof result === 'object' &&
              typeof result.then === 'function'
            ) {
              const thenableResult = result;
              let wasAwaited = false;
              const thenable = {
                then: function (resolve, reject) {
                  wasAwaited = true;
                  thenableResult.then(
                    function (returnValue2) {
                      popActScope(prevActScopeDepth);
                      if (actScopeDepth === 0) {
                        recursivelyFlushAsyncActWork(
                          returnValue2,
                          resolve,
                          reject
                        );
                      } else {
                        resolve(returnValue2);
                      }
                    },
                    function (error2) {
                      popActScope(prevActScopeDepth);
                      reject(error2);
                    }
                  );
                },
              };
              {
                if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') {
                  Promise.resolve()
                    .then(function () {})
                    .then(function () {
                      if (!wasAwaited) {
                        didWarnNoAwaitAct = true;
                        error(
                          'You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);'
                        );
                      }
                    });
                }
              }
              return thenable;
            } else {
              const returnValue = result;
              popActScope(prevActScopeDepth);
              if (actScopeDepth === 0) {
                const _queue = ReactCurrentActQueue.current;
                if (_queue !== null) {
                  flushActQueue(_queue);
                  ReactCurrentActQueue.current = null;
                }
                const _thenable = {
                  then: function (resolve, reject) {
                    if (ReactCurrentActQueue.current === null) {
                      ReactCurrentActQueue.current = [];
                      recursivelyFlushAsyncActWork(
                        returnValue,
                        resolve,
                        reject
                      );
                    } else {
                      resolve(returnValue);
                    }
                  },
                };
                return _thenable;
              } else {
                const _thenable2 = {
                  then: function (resolve, reject) {
                    resolve(returnValue);
                  },
                };
                return _thenable2;
              }
            }
          }
        }
        function popActScope(prevActScopeDepth) {
          {
            if (prevActScopeDepth !== actScopeDepth - 1) {
              error(
                'You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. '
              );
            }
            actScopeDepth = prevActScopeDepth;
          }
        }
        function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
          {
            const queue = ReactCurrentActQueue.current;
            if (queue !== null) {
              try {
                flushActQueue(queue);
                enqueueTask(function () {
                  if (queue.length === 0) {
                    ReactCurrentActQueue.current = null;
                    resolve(returnValue);
                  } else {
                    recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                  }
                });
              } catch (error2) {
                reject(error2);
              }
            } else {
              resolve(returnValue);
            }
          }
        }
        let isFlushing = false;
        function flushActQueue(queue) {
          {
            if (!isFlushing) {
              isFlushing = true;
              let i = 0;
              try {
                for (; i < queue.length; i++) {
                  let callback = queue[i];
                  do {
                    callback = callback(true);
                  } while (callback !== null);
                }
                queue.length = 0;
              } catch (error2) {
                queue = queue.slice(i + 1);
                throw error2;
              } finally {
                isFlushing = false;
              }
            }
          }
        }
        const createElement$1 = createElementWithValidation;
        const cloneElement$1 = cloneElementWithValidation;
        const createFactory = createFactoryWithValidation;
        const Children = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray,
          only: onlyChild,
        };
        exports2.Children = Children;
        exports2.Component = Component;
        exports2.Fragment = REACT_FRAGMENT_TYPE;
        exports2.Profiler = REACT_PROFILER_TYPE;
        exports2.PureComponent = PureComponent;
        exports2.StrictMode = REACT_STRICT_MODE_TYPE;
        exports2.Suspense = REACT_SUSPENSE_TYPE;
        exports2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED =
          ReactSharedInternals;
        exports2.cloneElement = cloneElement$1;
        exports2.createContext = createContext;
        exports2.createElement = createElement$1;
        exports2.createFactory = createFactory;
        exports2.createRef = createRef;
        exports2.forwardRef = forwardRef;
        exports2.isValidElement = isValidElement;
        exports2.lazy = lazy;
        exports2.memo = memo;
        exports2.startTransition = startTransition;
        exports2.unstable_act = act;
        exports2.useCallback = useCallback;
        exports2.useContext = useContext;
        exports2.useDebugValue = useDebugValue;
        exports2.useDeferredValue = useDeferredValue;
        exports2.useEffect = useEffect;
        exports2.useId = useId;
        exports2.useImperativeHandle = useImperativeHandle;
        exports2.useInsertionEffect = useInsertionEffect;
        exports2.useLayoutEffect = useLayoutEffect;
        exports2.useMemo = useMemo;
        exports2.useReducer = useReducer;
        exports2.useRef = useRef;
        exports2.useState = useState;
        exports2.useSyncExternalStore = useSyncExternalStore;
        exports2.useTransition = useTransition;
        exports2.version = ReactVersion;
        if (
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
            'function'
        ) {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(
            new Error()
          );
        }
      })();
    }
  },
});

// ../../node_modules/react/index.js
const require_react = __commonJS({
  '../../node_modules/react/index.js'(exports2, module2) {
    'use strict';
    if (process.env.NODE_ENV === 'production') {
      module2.exports = require_react_production_min();
    } else {
      module2.exports = require_react_development();
    }
  },
});

// ../../node_modules/react/cjs/react-jsx-runtime.production.min.js
const require_react_jsx_runtime_production_min = __commonJS({
  '../../node_modules/react/cjs/react-jsx-runtime.production.min.js'(exports2) {
    'use strict';
    const f = require_react();
    const k = Symbol.for('react.element');
    const l = Symbol.for('react.fragment');
    const m = Object.prototype.hasOwnProperty;
    const n =
      f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
    const p = { key: true, ref: true, __self: true, __source: true };
    function q(c, a, g) {
      let b;
      const d = {};
      let e = null;
      let h = null;
      void 0 !== g && (e = '' + g);
      void 0 !== a.key && (e = '' + a.key);
      void 0 !== a.ref && (h = a.ref);
      for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
      if (c && c.defaultProps)
        for (b in ((a = c.defaultProps), a)) void 0 === d[b] && (d[b] = a[b]);
      return {
        $$typeof: k,
        type: c,
        key: e,
        ref: h,
        props: d,
        _owner: n.current,
      };
    }
    exports2.Fragment = l;
    exports2.jsx = q;
    exports2.jsxs = q;
  },
});

// ../../node_modules/react/cjs/react-jsx-runtime.development.js
const require_react_jsx_runtime_development = __commonJS({
  '../../node_modules/react/cjs/react-jsx-runtime.development.js'(exports2) {
    'use strict';
    if (process.env.NODE_ENV !== 'production') {
      (function () {
        'use strict';
        const React = require_react();
        const REACT_ELEMENT_TYPE = Symbol.for('react.element');
        const REACT_PORTAL_TYPE = Symbol.for('react.portal');
        const REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
        const REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
        const REACT_PROFILER_TYPE = Symbol.for('react.profiler');
        const REACT_PROVIDER_TYPE = Symbol.for('react.provider');
        const REACT_CONTEXT_TYPE = Symbol.for('react.context');
        const REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
        const REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
        const REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
        const REACT_MEMO_TYPE = Symbol.for('react.memo');
        const REACT_LAZY_TYPE = Symbol.for('react.lazy');
        const REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
        const MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        const FAUX_ITERATOR_SYMBOL = '@@iterator';
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== 'object') {
            return null;
          }
          const maybeIterator =
            (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
            maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === 'function') {
            return maybeIterator;
          }
          return null;
        }
        const ReactSharedInternals =
          React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (
                var _len2 = arguments.length,
                  args = new Array(_len2 > 1 ? _len2 - 1 : 0),
                  _key2 = 1;
                _key2 < _len2;
                _key2++
              ) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning('error', format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            const ReactDebugCurrentFrame2 =
              ReactSharedInternals.ReactDebugCurrentFrame;
            const stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== '') {
              format += '%s';
              args = args.concat([stack]);
            }
            const argsWithFormat = args.map(function (item) {
              return String(item);
            });
            argsWithFormat.unshift('Warning: ' + format);
            Function.prototype.apply.call(
              console[level],
              console,
              argsWithFormat
            );
          }
        }
        const enableScopeAPI = false;
        const enableCacheElement = false;
        const enableTransitionTracing = false;
        const enableLegacyHidden = false;
        const enableDebugTracing = false;
        let REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
        }
        function isValidElementType(type) {
          if (typeof type === 'string' || typeof type === 'function') {
            return true;
          }
          if (
            type === REACT_FRAGMENT_TYPE ||
            type === REACT_PROFILER_TYPE ||
            enableDebugTracing ||
            type === REACT_STRICT_MODE_TYPE ||
            type === REACT_SUSPENSE_TYPE ||
            type === REACT_SUSPENSE_LIST_TYPE ||
            enableLegacyHidden ||
            type === REACT_OFFSCREEN_TYPE ||
            enableScopeAPI ||
            enableCacheElement ||
            enableTransitionTracing
          ) {
            return true;
          }
          if (typeof type === 'object' && type !== null) {
            if (
              type.$$typeof === REACT_LAZY_TYPE ||
              type.$$typeof === REACT_MEMO_TYPE ||
              type.$$typeof === REACT_PROVIDER_TYPE ||
              type.$$typeof === REACT_CONTEXT_TYPE ||
              type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
              // types supported by any Flight configuration anywhere since
              // we don't know which Flight build this will end up being used
              // with.
              type.$$typeof === REACT_MODULE_REFERENCE ||
              type.getModuleId !== void 0
            ) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          const displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          const functionName = innerType.displayName || innerType.name || '';
          return functionName !== ''
            ? wrapperName + '(' + functionName + ')'
            : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || 'Context';
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === 'number') {
              error(
                'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.'
              );
            }
          }
          if (typeof type === 'function') {
            return type.displayName || type.name || null;
          }
          if (typeof type === 'string') {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return 'Fragment';
            case REACT_PORTAL_TYPE:
              return 'Portal';
            case REACT_PROFILER_TYPE:
              return 'Profiler';
            case REACT_STRICT_MODE_TYPE:
              return 'StrictMode';
            case REACT_SUSPENSE_TYPE:
              return 'Suspense';
            case REACT_SUSPENSE_LIST_TYPE:
              return 'SuspenseList';
          }
          if (typeof type === 'object') {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + '.Consumer';
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + '.Provider';
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, 'ForwardRef');
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || 'Memo';
              case REACT_LAZY_TYPE: {
                const lazyComponent = type;
                const payload = lazyComponent._payload;
                const init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        const assign = Object.assign;
        let disabledDepth = 0;
        let prevLog;
        let prevInfo;
        let prevWarn;
        let prevError;
        let prevGroup;
        let prevGroupCollapsed;
        let prevGroupEnd;
        function disabledLog() {}
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              const props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true,
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props,
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              const props = {
                configurable: true,
                enumerable: true,
                writable: true,
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog,
                }),
                info: assign({}, props, {
                  value: prevInfo,
                }),
                warn: assign({}, props, {
                  value: prevWarn,
                }),
                error: assign({}, props, {
                  value: prevError,
                }),
                group: assign({}, props, {
                  value: prevGroup,
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed,
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd,
                }),
              });
            }
            if (disabledDepth < 0) {
              error(
                'disabledDepth fell below zero. This is a bug in React. Please file an issue.'
              );
            }
          }
        }
        const ReactCurrentDispatcher =
          ReactSharedInternals.ReactCurrentDispatcher;
        let prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                const match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = (match && match[1]) || '';
              }
            }
            return '\n' + prefix + name;
          }
        }
        let reentry = false;
        let componentFrameCache;
        {
          const PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return '';
          }
          {
            const frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          let control;
          reentry = true;
          const previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          let previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              const Fake = function () {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, 'props', {
                set: function () {
                  throw Error();
                },
              });
              if (typeof Reflect === 'object' && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === 'string') {
              const sampleLines = sample.stack.split('\n');
              const controlLines = control.stack.split('\n');
              let s = sampleLines.length - 1;
              let c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        let _frame =
                          '\n' + sampleLines[s].replace(' at new ', ' at ');
                        if (fn.displayName && _frame.includes('<anonymous>')) {
                          _frame = _frame.replace(
                            '<anonymous>',
                            fn.displayName
                          );
                        }
                        {
                          if (typeof fn === 'function') {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          const name = fn ? fn.displayName || fn.name : '';
          const syntheticFrame = name
            ? describeBuiltInComponentFrame(name)
            : '';
          {
            if (typeof fn === 'function') {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          const prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return '';
          }
          if (typeof type === 'function') {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === 'string') {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame('Suspense');
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame('SuspenseList');
          }
          if (typeof type === 'object') {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(
                  type.type,
                  source,
                  ownerFn
                );
              case REACT_LAZY_TYPE: {
                const lazyComponent = type;
                const payload = lazyComponent._payload;
                const init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(
                    init(payload),
                    source,
                    ownerFn
                  );
                } catch (x) {}
              }
            }
          }
          return '';
        }
        const hasOwnProperty = Object.prototype.hasOwnProperty;
        const loggedTypeFailures = {};
        const ReactDebugCurrentFrame =
          ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              const owner = element._owner;
              const stack = describeUnknownElementTypeFrameInDEV(
                element.type,
                element._source,
                owner ? owner.type : null
              );
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(
          typeSpecs,
          values,
          location,
          componentName,
          element
        ) {
          {
            const has = Function.call.bind(hasOwnProperty);
            for (const typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                let error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== 'function') {
                    const err = Error(
                      (componentName || 'React class') +
                        ': ' +
                        location +
                        ' type `' +
                        typeSpecName +
                        '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                        typeof typeSpecs[typeSpecName] +
                        '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
                    );
                    err.name = 'Invariant Violation';
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](
                    values,
                    typeSpecName,
                    componentName,
                    location,
                    null,
                    'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
                  );
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error(
                    '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                    componentName || 'React class',
                    location,
                    typeSpecName,
                    typeof error$1
                  );
                  setCurrentlyValidatingElement(null);
                }
                if (
                  error$1 instanceof Error &&
                  !(error$1.message in loggedTypeFailures)
                ) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error('Failed %s type: %s', location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        const isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            const hasToStringTag =
              typeof Symbol === 'function' && Symbol.toStringTag;
            const type =
              (hasToStringTag && value[Symbol.toStringTag]) ||
              value.constructor.name ||
              'Object';
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return '' + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error(
                'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
                typeName(value)
              );
              return testStringCoercion(value);
            }
          }
        }
        const ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        const RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true,
        };
        let specialPropKeyWarningShown;
        let specialPropRefWarningShown;
        let didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, 'ref')) {
              const getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, 'key')) {
              const getter = Object.getOwnPropertyDescriptor(config, 'key').get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self) {
          {
            if (
              typeof config.ref === 'string' &&
              ReactCurrentOwner.current &&
              self &&
              ReactCurrentOwner.current.stateNode !== self
            ) {
              const componentName = getComponentNameFromType(
                ReactCurrentOwner.current.type
              );
              if (!didWarnAboutStringRefs[componentName]) {
                error(
                  'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                  getComponentNameFromType(ReactCurrentOwner.current.type),
                  config.ref
                );
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            const warnAboutAccessingKey = function () {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error(
                  '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                  displayName
                );
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, 'key', {
              get: warnAboutAccessingKey,
              configurable: true,
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            const warnAboutAccessingRef = function () {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error(
                  '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                  displayName
                );
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, 'ref', {
              get: warnAboutAccessingRef,
              configurable: true,
            });
          }
        }
        const ReactElement = function (
          type,
          key,
          ref,
          self,
          source,
          owner,
          props
        ) {
          const element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner,
          };
          {
            element._store = {};
            Object.defineProperty(element._store, 'validated', {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false,
            });
            Object.defineProperty(element, '_self', {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self,
            });
            Object.defineProperty(element, '_source', {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source,
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV(type, config, maybeKey, source, self) {
          {
            let propName;
            const props = {};
            let key = null;
            let ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = '' + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = '' + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self);
            }
            for (propName in config) {
              if (
                hasOwnProperty.call(config, propName) &&
                !RESERVED_PROPS.hasOwnProperty(propName)
              ) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              const defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              const displayName =
                typeof type === 'function'
                  ? type.displayName || type.name || 'Unknown'
                  : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(
              type,
              key,
              ref,
              self,
              source,
              ReactCurrentOwner.current,
              props
            );
          }
        }
        const ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        const ReactDebugCurrentFrame$1 =
          ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              const owner = element._owner;
              const stack = describeUnknownElementTypeFrameInDEV(
                element.type,
                element._source,
                owner ? owner.type : null
              );
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        let propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
          {
            return (
              typeof object === 'object' &&
              object !== null &&
              object.$$typeof === REACT_ELEMENT_TYPE
            );
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              const name = getComponentNameFromType(
                ReactCurrentOwner$1.current.type
              );
              if (name) {
                return '\n\nCheck the render method of `' + name + '`.';
              }
            }
            return '';
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              const fileName = source.fileName.replace(/^.*[\\\/]/, '');
              const lineNumber = source.lineNumber;
              return (
                '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.'
              );
            }
            return '';
          }
        }
        const ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            let info = getDeclarationErrorAddendum();
            if (!info) {
              const parentName =
                typeof parentType === 'string'
                  ? parentType
                  : parentType.displayName || parentType.name;
              if (parentName) {
                info =
                  '\n\nCheck the top-level render call using <' +
                  parentName +
                  '>.';
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (
              !element._store ||
              element._store.validated ||
              element.key != null
            ) {
              return;
            }
            element._store.validated = true;
            const currentComponentErrorInfo =
              getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            let childOwner = '';
            if (
              element &&
              element._owner &&
              element._owner !== ReactCurrentOwner$1.current
            ) {
              childOwner =
                ' It was passed a child from ' +
                getComponentNameFromType(element._owner.type) +
                '.';
            }
            setCurrentlyValidatingElement$1(element);
            error(
              'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
              currentComponentErrorInfo,
              childOwner
            );
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== 'object') {
              return;
            }
            if (isArray(node)) {
              for (let i = 0; i < node.length; i++) {
                const child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              const iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === 'function') {
                if (iteratorFn !== node.entries) {
                  const iterator = iteratorFn.call(node);
                  let step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            const type = element.type;
            if (type === null || type === void 0 || typeof type === 'string') {
              return;
            }
            let propTypes;
            if (typeof type === 'function') {
              propTypes = type.propTypes;
            } else if (
              typeof type === 'object' &&
              (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
                // Inner props are checked in the reconciler.
                type.$$typeof === REACT_MEMO_TYPE)
            ) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              const name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, 'prop', name, element);
            } else if (
              type.PropTypes !== void 0 &&
              !propTypesMisspellWarningShown
            ) {
              propTypesMisspellWarningShown = true;
              const _name = getComponentNameFromType(type);
              error(
                'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
                _name || 'Unknown'
              );
            }
            if (
              typeof type.getDefaultProps === 'function' &&
              !type.getDefaultProps.isReactClassApproved
            ) {
              error(
                'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
              );
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            const keys = Object.keys(fragment.props);
            for (let i = 0; i < keys.length; i++) {
              const key = keys[i];
              if (key !== 'children' && key !== 'key') {
                setCurrentlyValidatingElement$1(fragment);
                error(
                  'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                  key
                );
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error('Invalid attribute `ref` supplied to `React.Fragment`.');
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function jsxWithValidation(
          type,
          props,
          key,
          isStaticChildren,
          source,
          self
        ) {
          {
            const validType = isValidElementType(type);
            if (!validType) {
              let info = '';
              if (
                type === void 0 ||
                (typeof type === 'object' &&
                  type !== null &&
                  Object.keys(type).length === 0)
              ) {
                info +=
                  " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              const sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              let typeString;
              if (type === null) {
                typeString = 'null';
              } else if (isArray(type)) {
                typeString = 'array';
              } else if (
                type !== void 0 &&
                type.$$typeof === REACT_ELEMENT_TYPE
              ) {
                typeString =
                  '<' +
                  (getComponentNameFromType(type.type) || 'Unknown') +
                  ' />';
                info =
                  ' Did you accidentally export a JSX literal instead of a component?';
              } else {
                typeString = typeof type;
              }
              error(
                'React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
                typeString,
                info
              );
            }
            const element = jsxDEV(type, props, key, source, self);
            if (element == null) {
              return element;
            }
            if (validType) {
              const children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (let i = 0; i < children.length; i++) {
                      validateChildKeys(children[i], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error(
                      'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.'
                    );
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        const jsx2 = jsxWithValidationDynamic;
        const jsxs = jsxWithValidationStatic;
        exports2.Fragment = REACT_FRAGMENT_TYPE;
        exports2.jsx = jsx2;
        exports2.jsxs = jsxs;
      })();
    }
  },
});

// ../../node_modules/react/jsx-runtime.js
const require_jsx_runtime = __commonJS({
  '../../node_modules/react/jsx-runtime.js'(exports2, module2) {
    'use strict';
    if (process.env.NODE_ENV === 'production') {
      module2.exports = require_react_jsx_runtime_production_min();
    } else {
      module2.exports = require_react_jsx_runtime_development();
    }
  },
});

// src/index.tsx
const src_exports = {};
__export(src_exports, {
  App: () => App,
});
module.exports = __toCommonJS(src_exports);

// ../tokens/dist/index.mjs
const colors = {
  white: '#FFF',
  black: '#000',
  gray100: '#E1E1E6',
  gray200: '#A9A9B2',
  gray400: '#7C7C8A',
  gray500: '#505059',
  gray600: '#323238',
  gray700: '#29292E',
  gray800: '#202024',
  gray900: '#121214',
  ignite300: '#00B37E',
  ignite500: '#00875F',
  ignite700: '#015F43',
  ignite900: '#00291D',
};

// src/index.tsx
const import_jsx_runtime = __toESM(require_jsx_runtime());
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)('h1', {
    style: { color: colors.ignite300 },
    children: 'Hello',
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    App,
  });
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
