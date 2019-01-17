document.write("CHALLANGE<br><br>");

var textarray = [
	["Vienna","is"],
	["a","beautiful"],
	["city",""]
];

	
for(i=0;i<textarray.length;i++){
	for(j=0;j<textarray[i].length;j++){
		document.write(textarray[i][j]+" ");
	}
}

document.write("<br><br>");
var long_string = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$\"properties $flow$down;$actions$flow$up\".";
document.write("<br><br>");
document.write(long_string);
document.write("<br><br>");
document.write("---------------------------------------");
document.write("<br><br>");

var order_string = "";
var zwi_string = "";

do{
	zwi_string = long_string;
	order_string = long_string.replace("$", " ");
	long_string = order_string;
	
}
while(order_string != zwi_string)


document.write(order_string);
document.write("---------------------------------------");