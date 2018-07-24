# ImprovedDate 2

ImprovedDate is an enhanced version of the JavaScript Date object with methods for:

* Get the number of the day in the year and the number of remaining days
* Get the first day of a week
* Get the number a week
* Get the ISO 8601 number a week
* Get the the number of days of a month
* Verify if the day is a non working day ( French calendar )

## Getting started

	<!-- include improvedDate -->
	<script src="js/improvedDate.min.js"></script>

	<!-- Creates an ImprovedDate instance -->
	<script>
		new ImprovedDate();
		new ImprovedDate( value );
		new ImprovedDate( dateString );
		new ImprovedDate( year, month [, day [, hours [, minutes [, seconds [, milliseconds]]]]] );
	</script>

## Documentation and demo

Everything you need to know can be found here: [https://e-systemes.github.io/improved-date/](https://e-systemes.github.io/improved-date/)

## Property

### ImprovedDate.date

A standard buid-in Date instance. All Date.prototype methods can be used.
	
## Methods

### ImprovedDate.getYearDay ()

return an Array with the number of the day in the year ( 1 - 366 ) and the number of remaining days ( 366 - 1 )
	
### ImprovedDate.firstDayOfWeek ()

return a standard buid-in Date instance of the ISO 8601 first day of the week ( monday )

### ImprovedDate.getWeek ()

return the ISO 8601 number (1 - 53) of the week		

### ImprovedDate.getMonthLength ()

return the number of days in the month

### ImprovedDate.getNonWorkingDay ()

return true if the date is a french nonworking day.

Pass false as parameter to exclude week-ends

