describe("Injection", function() {
	
	describe("when it have two instances", function() {

		var injection1 = new Injection();
		var injection2 = new Injection();

		it("both should be the same", function() {
			expect(injection1).toBe(injection2);
		});

		it("both should have same properties", function() {
			injection1.tutu = "tutu";
			expect(injection2.tutu).toBe("tutu");
		});

	});

	function Tutu() {};

	function Boo(argument) {
		this.spy = argument;
	}

	function Foo() {
		this._dependencies_ = ['tutu'];
	};

	var injection = new Injection();

	it("should register new instances", function() {
		injection.register("tutu", Tutu);
		expect(injection.registry.tutu).toBeDefined();
	});

	it("should register new instances with one argument constructor", function() {
		injection.register("boo", Boo, 'boo');
		expect(injection.registry.boo.spy).toBe('boo');
	});

	it("should resolve new instances dependencies", function() {
		injection.register("foo", Foo);
		expect(injection.registry.foo.tutu).toBeDefined();
	});
	
});