var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('https://www.flickr.com/photos/big');

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};

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
		else {
			return "Adult";
		}
	}, this);
}

ko.applyBindings(new ViewModel())