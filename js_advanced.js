document.write("ADVANCED<br><br>");
document.write("SUM<br>");

var a = 7;
var b = 14;
var c = "21";
var d = '36';
var e = 42;
var sum = a+b+parseInt(c)+parseInt(d)+e;

document.write(sum+"<br>");
document.write("MULTIPLY<br>");

var f = '1';
var g = 15;
var h = 8;
var i = "1";
var multi = parseInt(f)+g*h*parseInt(i);

document.write(multi+"<br>");

document.write("DIVIDE<br>");

document.write(sum+"/"+multi+" = "+sum/multi+"<br>"+"<br><br>");

document.write("ADVANCED - EXERCISE II<br>"+"<br>");


multi_arr = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3] ];
document.write("Select and output the numbers 11, 25, 17, 27 and 0 in the console.<br><br>");
document.write(multi_arr[1][1]+"<br>");
document.write(multi_arr[4][2]+"<br>");
document.write(multi_arr[5][3]+"<br>");
document.write(multi_arr[2][3]+"<br>");
document.write(multi_arr[2][1]+"<br>");



