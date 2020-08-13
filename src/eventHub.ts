class EventHub {
  cache = {};
  on(eventName, fn) {
    if (this.cache[eventName] === undefined) {
      this.cache[eventName] = [];
    }
    const array = this.cache[eventName];
    array.push(fn);
  }
  emit() {}
}

export default EventHub;
