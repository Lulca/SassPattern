$(function () {

	var amebAmount = 1;

	for (var i = 0; i < 60; i++) {
		amebAmount *= 2;
	}

	console.log(amebAmount);

	var amebAmount1 = 8;
	var time = 0;

	for (time = 1; time >= 0; time++) {
		amebAmount1 *= 2;

		if(amebAmount1 >= amebAmount) {
			break;
		}
	}

	console.log(time);

});