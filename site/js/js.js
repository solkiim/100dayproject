$(document).ready(function(){
	var gifcount = 8;

	// add rows to display
	for (var i = 1; i <= 100; i += 4) {
		var nomoregifs = false;

		// create row
		var row = '<div class="row">';
		for (var j = i; j < i + 4; j++) {
			if (j <= gifcount) {
				row += '<div class="col-sm-3"><img src="' + j + '/gif.gif"></div>';
			} else {
				row += '<div class="col-sm-3"></div>';
				nomoregifs = true;
			}
		}
		row += '</div>';

		// add row to container
		$("#gifs").append(row);

		// break if no more gifs to display
		if (nomoregifs) {
			break;
		}
	}
});
