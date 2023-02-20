function dateFormater(date, separator){
    var day=date.getDate();
    var month=date.getMonth() + 1;
    var year=date.getFullYear();
    var hour=date.getHours();
    var minutes=date.getMinutes();

    if (day<10){
        day='0'+day;

    }
    if(month<10){
        month= '0'+ month;
    }
    return day + separator + month + separator + year + " " + hour + ":" + minutes;
}
var now = new Date();
console.log(dateFormater(now, '/'));
console.log(dateFormater(now, '-'));