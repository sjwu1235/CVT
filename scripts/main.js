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


let SF=document.getElementById('SelfReports');

function form_sub(){ // Note: selfreports do not persist over page refresh which happens after submit
	let fname=document.forms['SRForm']['fname'].value;
	let sname=document.forms['SRForm']['sname'].value;
	let dt=document.forms['SRForm']['datum'].value;
	let vac=document.forms['SRForm']['Vaxadmin'].value;
	let plc=document.forms['SRForm']['pvax'].value;
	SF.innerHTML=`Your name is: ${fname} ${sname} and you got vaccinated with the ${vac} vaccine at ${plc} on the date ${dt}.`;
}

if(!sessionStorage.getItem('num')){
	//init_vals();
	sessionStorage.setItem('num', 0);
}else{
	let nme_var=JSON.parse(sessionStorage.getItem('num'));
	let entry=[];
	if(nme_var>0){
		for (let i=1;i<=nme_var;i++){
			entry=JSON.parse(sessionStorage.getItem(`${i}`));
			set_values(entry);
			SF.innerHTML=`<br>Your name is: ${entry[0]} ${entry[1]} and you got vaccinated with the ${entry[3]} vaccine at ${entry[4]} on the date ${entry[2]}.`;
		}
	}
}
/*function init_vals(){
	sessionStorage.setItem('num', 0); // maybe use to set table headers instead?
}*/

/*function set_values(x){
	SF.innerHTML=`Your name is: ${x[0]} ${x[1]} and you got vaccinated with the ${x[3]} vaccine at ${x[4]} on the date ${x[2]}.`;
}
*/
function form_sub2(){ //can probably directly store rather than set to variables first
	let nme_var=JSON.parse(sessionStorage.getItem('num'))+1;
	let names=document.forms['SRForm']['fname'].value;
	let surnames=document.forms['SRForm']['sname'].value;
	let dates=document.forms['SRForm']['datum'].value;
	let vaccination=document.forms['SRForm']['Vaxadmin'].value;
	let place=document.forms['SRForm']['pvax'].value;
	let storeObject=[names,surnames,dates,vaccination,place];	
	sessionStorage.setItem(nme_var,JSON.stringify(storeObject));
}



