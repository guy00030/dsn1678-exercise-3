var box = $('.box');
var showBox = $('.show_box');


var buttonClickHandler = function () {
	var isActive = box.attr('data-state');

	if (isActive == 'active') {
		box.attr('data-state', 'inactive');
	} else {
		box.attr('data-state', 'active');
	}
};

showBox.on('click', buttonClickHandler);



var box2 = $('.box2');
var showBox2 = $('.show_box2');


var buttonClickHandler = function () {
	var isActive = box2.attr('data-state');

	if (isActive == 'active') {
		box2.attr('data-state', 'inactive');
	} else {
		box2.attr('data-state', 'active');
	}
};

showBox2.on('click', buttonClickHandler);