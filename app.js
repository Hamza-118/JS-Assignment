//chapter#1
//task#1
alert("Error! Please Enter a valid Password");

//task#2
alert("Welcome to JS land \n Happy Coding");

//task#3
alert("Happy coding \n prevent this page from creating additional dialogs")

//task#4
alert("Hello...I can run my JS through my web browser console");

//chapter#2
//task#1
var user = "Hamza";
var name = "Khan";
var myname= user+name;
alert(myname);

//task#2
var a = "Hello world"
alert(a);

//task#3
alert("PIZZA\nPIZZ\nPIZ\nPI\nP");

//tasl#4
var email = ("My email address is hamzahmed514@gmail.com");
alert(email);

//task#5
var book = ("I am trying to learn from the book \n A Smarter Way To Learn JawaScript")
alert(book);

//task#6
document.write("\nYeh! I can write HTML content through JawaScript");

//task#7
var a = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
alert(a);

//chapter#3
//task#1
var a = ("age");
alert("I am 19 years old");

//task#2
var a = ("site");
alert("You have visited this site 12 times");

//task#3
document.write("2001 is my birth year");

//task#4
var a = prompt("Enter your Name", "your name is...")
var b = prompt("Product title");
var c = prompt("Quantity");
var d = (a+b+c);
alert(d);

//chapter#4
//task#1
var variable1 = "Hello world\n";
    variable2 = "good morning\n";
    variable3 = "time is 2 pm";
var variable4 =(variable1+variable2+variable3);
alert(variable4);

// //task#2 (illegal) variables
// var @ali = 4;
// var &hassan = 3;
// var #tahir = 6;
// var *umer = 4;
// var !ahmed = 3;
// var a = (@ali+&hassan+#tahir+*umer+!ahmed);
// alert(a);

//(legal) variables
var ali1 = 12;
var Hassan = 3;
var tahir4 = 6;
var umerShahid = 4;
var ahmed = 3;
var a = (ali1+Hassan+tahir4+umerShahid+ahmed);
alert(a);

//task#3
var x = +prompt("enter the first value");
var y = +prompt("enter the second value");
var z = (x+y);
alert(z);

//chapter#5
//task#1
var a = +prompt("enter the first number", "Value1");
var b = +prompt("enter the 2nd number", "value2");
var c = (a+b);
document.write("the output is" + " " + a+b)

//task#2
for(var x = 0; x < 5; x++){
    for(var y = 0; y < 3; y++){
        document.write("Hamza Ahmed Khan" + "<br>")
    }
}
//task#3 #table
for(var a = 1; a <= 10; a++ ){
    document.write("4" + "x" + a + "=" + 4*a + "<br>")
}

//task#4 
var a = +prompt("cost of one ticket is 600 Rs", "number of tickets you buy");
var b = a*600;
alert(b);

//task#5 percentage calculator
var a = prompt("Percentage calculator", "value") 
var b = prompt("total value")
var c = (a/b)*100;
alert(c);
