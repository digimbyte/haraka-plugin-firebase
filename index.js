'use strict'

exports.register = function () {
  this.load_firebase_ini()
}

exports.load_firebase_ini = function () {
  const plugin = this

  plugin.cfg = plugin.config.get('firebase.ini', {
    booleans: [
      '+enabled',               // plugin.cfg.main.enabled=true
      '-disabled',              // plugin.cfg.main.disabled=false
      '+feature_section.yes'    // plugin.cfg.feature_section.yes=true
    ]
  },
  function () {
    plugin.load_example_ini()
  })
}
