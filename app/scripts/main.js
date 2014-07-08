var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
var names = _.pluck(stooges, 'name');
var first = _.first(stooges, 'age');
var last = _.last(stooges, 'name');
var godzilla;
var random = _.random(0, 100);

var Runner = function (attributes) {
	var attributes = attributes || {};
	this.health = attributes.health || '100';
	this.stamina = attributes.stamina;
	this.speed = attributes.speed || 0;
	this.motto = attributes.motto;
	this.run = function () {
		this.speed = 'fast';
	}
	this.alive = true;
};