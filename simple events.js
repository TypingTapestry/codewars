function Event() {
    this.handlers = [];
    this.subscribe = function(func) {
      this.handlers.push(func);
    }
    this.unsubscribe = function(func) {
      this.handlers.splice(this.handlers.indexOf(func), 1);
    }
    this.emit = function() {
      let eArguments = arguments;
      let eThis = this;
      this.handlers.forEach(function(e) {
        e.apply(eThis, eArguments);
      })
    }
}