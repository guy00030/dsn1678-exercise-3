var sales = $('.sales');
var sales__details = $('.sales__details');

/*
	Functions are reusable pieces of code
	They're basically code stored inside variables
*/
var buttonClickHandler = function () {
	var isActive = sales.attr('data-state');

	if (isActive == 'active') {
		sales.attr('data-state', 'inactive');
	} else {
		theHeader.attr('data-state', 'active');
	}
};

sales__details.on('click', buttonClickHandler);