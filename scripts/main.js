/*
//Tutorial code and notes, uncomment to run
const myHeading=document.querySelector('h1'); //querySelector() grabs a reference to your heading and then stores it in a variable called myHeading
myHeading.textContent='Hello world changed!'; //then myHeading changes the textContent property (which is in this case is the content of the heading) to Hello world!.

let stringVar='munchkin';
let numVar=10;
let boolVar=true;
let arrVar=[1,stringVar,numVar,boolVar] // ref by arrVar[0] for item in first index, note: not sure if this is const or reference variables in array when giving array variables
*/

//Operators +-*/= hold as usual
//Identity operator is ===. Equality operator remains == and variants. Q: differnece between equality 
//! is 'not' - returns logical opposite note: for !== would be not equal
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
//Go to link for more expressions and operators

/*//this is commented out for now buts it's an annoying pop-up
let icecream='chocolate';
if (icecream==='chocolate'){
	alert('Yay, I love chocolate ice cream!');
}else {
	alert('Awwww, but chocolate is my favourite...');
}

//function demonstrating functions
function multiply(num1, num2){
	let result=num1*num2;
	return result;
}
*/
//Q: will variable still work if you don't use a specifier? var, let is not the only so what's the rule?


//button work, uncomment in html too
/*
let secondHead=document.querySelector('h2');
let myButton = document.getElementById('clickbut'); //get the button varaible
function doSomething(){
	let myName=prompt('Please enter your name.'); //prompt which alerts the user and stores the data the user enters after they click okay 
	localStorage.setItem('name',myName); // storing it through an API called localStorage which allows the browser the retrieve the data later;
	secondHead.textContent= 'Hello ' +myName; //now set the text content to whatever you like. Note, if the individual doesn't enter a name, in which case check for NULL. ie: if(!myName){ <call fucntion again> }else {<continue as here>} 
}
myButton.onclick=function(){
	doSomething();
}
*/

var n=1;
var x=0;

//for condensed code use
var n_string=["fname","sname","date","Vaxadmin","pvax"];
var storageOb=[];

/*
//This could be condensed into 2d array
var names=[];
var surnames=[];
var dates=[];
var vac=[];
var place=[];
function form_sub(){ 
	let AddRown=document.getElementById('tbl');
	let NewRow=AddRown.insertRow(1);
//this could be condensed if 2d array of names
	names[x]=document.getElementById('fname').value;
	surnames[x]=document.getElementById('sname').value;
	dates[x]=document.getElementById('date').value;
	vac[x]=document.getElementById('Vaxadmin').value;
	place[x]=document.getElementById('pvax').value;

// check if condensable again
	let cell1=NewRow.insertCell(0);
	let cell2=NewRow.insertCell(1);
	let cell3=NewRow.insertCell(2);
	let cell4=NewRow.insertCell(3);
	let cell5=NewRow.insertCell(4);

	cell1.innerHTML=names[x];
	cell2.innerHTML=surnames[x];
	cell3.innerHTML=dates[x];
	cell4.innerHTML=vac[x];
	cell5.innerHTML=place[x];
	n++;
	x++;

	return false;
}
*/

function condensed_formsub(){
	var AddRown=document.getElementById('tbl');
	var NewRow=AddRown.insertRow(1);
	var temp=[];
	for (let i=0;i<n_string.length;i++){
		temp[i]=document.getElementById(n_string[i]).value;
		NewRow.insertCell(i).innerHTML=temp[i];
	}
	storageOb[x]=temp;
	n++;
	x++;
	return false;
}
