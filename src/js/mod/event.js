let event = (function () {
  let events = {}

  function on(e, handler) {
    events[e] = events[e] || []

    events[e].push({
      handler: handler
    })
  }

  function fire(e, args) {
    if (!events[e]) {
      return
    }
    for (let i = 0; i < events[e].length; i++) {
      events[e][i].handler(args)
    }
  }

  return {
    on: on,
    fire: fire
  }
})()

module.exports = event
