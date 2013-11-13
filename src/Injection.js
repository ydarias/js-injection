var Injection;

(function() {

	var singleton;

	Injection = function Injection() {
		if (singleton)
			return singleton;

		singleton = this;

		this.registry = {};

		this.register = function register(instanceName, instanceClass, argument) {
			var instance = new instanceClass(argument);
			if (instance._dependencies_) 
				this._resolveDependencies(instance);
			this.registry[instanceName] = instance;
		};

		this._resolveDependencies = function _resolveDependencies(instance) {
			var totalDependencies = instance._dependencies_.length;
			for (var i = 0; i < totalDependencies; i++) {
				var dependencyName = instance._dependencies_[i];
				instance[dependencyName] = this.registry[dependencyName];
			}
		}
	};

})();