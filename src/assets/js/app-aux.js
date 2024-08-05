window.sleep = (time) => {
  return new Promise(next => setTimeout(next, time))
}

HTMLCollection.prototype.map = function(cb) {
  return [...this].map(cb)
}