//just validation now
var n_string=["fname","sname","date","Vaxadmin","pvax"];
var n_string=["Name","Surname","Date of vaccination","Vaccine administered","Place of vaccination"];

function condensed_formsub(){
	var temp=[];
	for (let i=0;i<n_string.length;i++){
		if(document.getElementById(n_string[i]).value==""){
			alert(n_string[i]+" must be filled out");
			return false;
		}
	}
	return true;
}