$(document).ready(function() {
	//Select
	$('select').material_select();

	//Chips Autocomplete
  	$('.chips-autocomplete').material_chip({
  		data: [{
	      		tag: 'Jones Day',
	    	}, {
	      		tag: 'Jim Smith'
    	}],
    	autocompleteData: {
	      'Jones Day': null,
	      'Jim Smith': null,
	      'Jones Day': null
    	}
  	});

  	//Date 
  	$('.datepicker').pickadate({
	    selectMonths: true, // Creates a dropdown to control month
	    selectYears: 15, // Creates a dropdown of 15 years to control year,
	    format: 'dd/mm/yyyy',
	    closeOnSelect: true,
		closeOnClear: true
  	});

  	//Time Picker:
	$('.timepicker').pickatime({
	    default: '11:50 pm',
	    twelvehour: true, // change to 12 hour AM/PM clock from 24 hour
	    donetext: 'OK',
	  	autoclose: true,
	  	vibrate: true // vibrate the device when dragging clock hand
	});

	// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
});