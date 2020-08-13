class EventHub {
  cache = {};
  on(eventName, fn) {
    if (this.cache[eventName] === undefined) {
      this.cache[eventName] = [];
    }
    const array = this.cache[eventName];
    array.push(fn);
  }
  emit(eventName) {
    let array = this.cache[eventName];
    if (array === undefined) {
      array = [];
    }
    array.forEach((fn) => {
      fn();
    });
  }
}

export default EventHub;
