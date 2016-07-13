var initialCats = [
	{
		clickCount: 0,
		name: "Tabby",
		imgSrc: 'img/434164568_fea0ad4013_z.jpg',
		imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
		nicknames: ["Tabs", "Tabsy", "Tabaroonie"]
	},
	{
		clickCount: 0,
		name: "Tiger",
		imgSrc: "img/4154543904_6e2428c421_z.jpg",
		imgAttribution: 'whatever',
		nicknames: ['Tigger']
	},
	{
		clickCount: 0,
		name: "Scaredy",
		imgSrc: 'img/22252709_010df3379e_z.jpg',
		imgAttribution: 'blah',
		nicknames: ['Casper']
	},
	{
		clickCount: 0,
		name: "Shadow",
		imgSrc: 'img/1413379559_412a540d29_z.jpg',
		imgAttribution: 'yup',
		nicknames: ['Shooby']
	}
]


var ViewModel = function() {
	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem) {
		self.catList.push( new Cat(catItem) );
	});

	this.currentCat = ko.observable( this.catList()[0] );

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};

	this.changeCat = function(cat) {
		self.currentCat(cat);
	};

};

var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nicknames = ko.observableArray(data.nicknames);
	
	this.level = ko.computed(function() {
		if (this.clickCount() < 9) {
			return "Newborn";
		}
		else if (this.clickCount() < 20) {
			return "Infant";
		}
		else if (this.clickCount() < 40) {
			return "Teen";
		}
		else if (this.clickCount() < 100) {
			return "Adult";
		}
		else {
			return "Ninja";
		}
	}, this);
};

ko.applyBindings(new ViewModel())