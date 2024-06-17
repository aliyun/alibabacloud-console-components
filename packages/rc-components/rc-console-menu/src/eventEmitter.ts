export default class SimpleEventEmitter<L extends ((...args: any) => void)> {
  events: Record<string, L[]>;

  constructor() {
    this.events = {}
  }

  on(event: string, listener: L) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(listener);
    return () => this.removeListener(event, listener);
  }

  removeListener(event: string, listener: L) {
    if (!this.events[event]) return;

    const idx = this.events[event].indexOf(listener);

    if (idx > -1) {
      this.events[event].splice(idx, 1);
    }
  }

  emit(event: string, ...args: any) {
    if (!this.events[event]) return;
    this.events[event].forEach((listener) => listener(...args));
  }
}