// example for ImprovedDate.date
var di = new ImprovedDate();
console.log( di.date );
var di = new ImprovedDate( 2018, 8, 28 );
console.log( di.date );
console.log( di.date.getFullYear() );

// example for ImprovedDate.getYearDay()
var di = new ImprovedDate();
console.log( di.getYearDay() );

// example for ImprovedDate.firstDayOfWeek()
var di = new ImprovedDate();
console.log( di.firstDayOfWeek() );

// example for ImprovedDate.getWeek()
var di = new ImprovedDate();
console.log( di.getWeek() );

// example for ImprovedDate.getMonthLength()
var di = new ImprovedDate();
console.log( di.getMonthLength() );

// example for ImprovedDate.getNonWorkingDay()
var di = new ImprovedDate();
console.log( di.getNonWorkingDay() );
var di = new ImprovedDate();
console.log( di.getNonWorkingDay( false ) );
