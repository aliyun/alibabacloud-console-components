// @ts-nocheck
export default function applyPlugin(System) {
  const originalInstantiate = System.instantiate
  System.instantiate = function() {
    return originalInstantiate.apply(this, arguments).then(function(register) {
      return [
        register[0],
        function(_export, _context) {
          return register[1](exportWithEsModule, _context)
          function exportWithEsModule(this: any, arg1, arg2) {
            if (
              typeof arg1 === 'object' &&
              arg1.__useDefault === true &&
              typeof arg1.default === 'object' &&
              arg1.default.__esModule === true
            ) {
              _export('__esModule', true)
              _export(arg1.default)
            } else if (arg1 === 'default' && arg2.__esModule === true) {
              _export('__esModule', true)
              _export(arg2)
            } else {
              _export.apply(this, arguments)
            }
          }
        },
      ]
    })
  }
}
