module("About this (topics/about_this.js)");

test("'this' inside a method", function () {
	var person = {
		name: 'bob',
		intro: function () {
			return "Hello, my name is " + this.__;
		}
	}
	equal(person.intro(), "Hello, my name is bob", "If an object has a method can you access properties inside it?");
});

test("'this' on unattached function", function () {
	var person = {
		globalName: 'bob',
		intro: function () {
			return "Hello, my name is " + this.globalName;
		}
	}

	var alias = person.intro;
