var EventManager = function() {
	this.initialize()
};
EventManager.prototype = {
	constructor : EventManager,
	initialize : function() {
		this.listeners = {}
	},
	addListener : function(b, a) {
		if (!this.listeners[b]) {
			this.listeners[b] = []
		}
		if (a instanceof Function) {
			this.listeners[b].push(a)
		}
		return this
	},
	dispatchEvent : function(c, d) {
		if (this.listeners[c]) {
			for ( var b = 0, a = this.listeners[c].length; b < a; b++) {
				this.listeners[c][b].call(window, d)
			}
		}
	},
	removeListener : function(d) {
		if (this.listeners[d]) {
			this.listeners[d] = null;
		}
	}
};
