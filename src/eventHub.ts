class EventHub {
  cache = {};
  on(eventName, fn) {
    this.cache[eventName] = this.cache[eventName] || [];
    this.cache[eventName].push(fn);
  }
  emit(eventName, data?) {
    (this.cache[eventName] || []).forEach((fn) => fn(data));
  }
  off(eventName, fn) {
    this.cache[eventName] = this.cache[eventName] || [];
    let index = indexFind(this.cache[eventName], fn);
    if (index === -1) return;
  }
}

export default EventHub;

function indexFind(array, item) {
  let index = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      index = i;
      break;
    }
  }
  return index;
}
