var str="lorem ipsum";// string type data
var str1=new string('lorem ipsum')//str1 is an object
str==str1 //true
str===str1//false
//escape characters are used here follwed with a backslash like
// \' \\ \"
//\t for tab \n for new line \b backspace


//METHODS ON STRING
word='lorem';
position=0;
length=str.length //used to get length of string
str.toLowerCase()// used to convert string into lower case
str.toUpperCase()//used to convert string to upper case
str.repeat()//used to repeat string number of times pass number as a parameter
var nq=str.concat(str1)//used to concatenate two strings 
//it will not change the value of str
//alternative for conacatenation
str=str+str1;//but it will change the str
//BOOLEAN BASED
str.include(word)//to find whether word exist in string
str.endsWith(word,length)//lenght to check where to end searching it in last with 
str.startsWith(word,position)//position to start from by default 0
//SUBSTRINGS,SEARCHING AND SLICING
str.indexof(word,position)//if nt found return -1
str.lastIndexof(word,position)//if nt found return -1
var pos=str.search('rem')//differnce between search and indexof no other parameter in search
// IN SLICNG GIVE START AND ENDING POINT IT WILL TAKE OUT THAT PART OF STRING 
//STARTING SHOULD BE SMALL THEN ENDING slice(start,end)
str.slice(-2,-6);
//SUBSTRING IS THE SAME THING BUT CAN NOT TAKE NEGATIVE INDEXES
str.substring(1,3);
//SUBSTR is little differnt from slice in slice we provided start and ending pos
//here we provide start and steps
str.replace('lorem','ipsum')//find first place wehre lorem appears and replace with ipsum
//CHARAT CHARCODEAT 
str.charAt(3);//
str.charCodeAt(3);//
// A TASK TO CHANGE A STRING AbCd to aBcD use the above or try replaceAt()
// TASK TO REVERSE A STRING 
//HINT : USE SPLIT,REVERSE,JOIN
//WORKING OF SPLIT
var names='ABCD';
var arr=names.split("");//creates an array of ['A,'B','C','D']
arr.join("");//it will make a string of that array by entering noting between them
