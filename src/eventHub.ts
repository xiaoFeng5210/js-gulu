class EventHub {
  cache: { [key: string]: Array<(data: unknown) => void> } = {};
  on(eventName: string, fn: (data: unknown) => void) {
    this.cache[eventName] = this.cache[eventName] || [];
    this.cache[eventName].push(fn);
  }
  emit(eventName: string, data?: unknown) {
    (this.cache[eventName] || []).forEach((fn) => fn(data));
  }
  off(eventName: string, fn: (data: unknown) => void) {
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
