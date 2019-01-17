document.write("UNSORTED<BR>");
var names = ["Tesla","Audi","Renault","Volvo","Mazda", "Fiat", "Ferrari"];
document.write(names+"<BR><BR>");
document.write("SORTED<BR>");
names.sort();
document.write(names+"<BR><BR>");

document.write("<BR>FRUITS<BR>");

var fruits = ["apple","banana","kiwi","orange"];

for(i=0;i<fruits.length-1;i++){
	document.write(fruits[i]);
	if(i<fruits.length-1-1){document.write(",");}
};

document.write("<BR>"+fruits+"<BR>");

for(i=0;i<fruits.length-1;i++){
	document.write(fruits[i]);
	if(i<fruits.length-1-1){document.write(",");}

};

document.write("<BR><BR>ANIMALS<BR>");

var animals = ["monkey","horse","dog","cat"];


for(i=0; i<animals.length-1;i++)
{
	document.write(animals[i])
	if(i<animals.length-1-1){document.write(",");}
}

document.write("<BR>");

 for(i=animals.length-1-1; i>=0;i--)
{
	document.write(animals[i])
	if(i>0){document.write(",");}
}

document.write("<BR>");

 for(i=animals.length-1; i>=0;i--)
{
	document.write(animals[i])
	if(i>0){document.write(",");}
}



document.write("<BR><BR>string-array<BR>");

var fruit_string = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
document.write("<BR><BR>fruit_string<BR>"+fruit_string);


newx = fruit_string.split("/");


document.write("<BR><BR>new_fruit_array<BR>");

for(i=0;i<newx.length;i++){
	document.write(newx[i]+" ")
}


