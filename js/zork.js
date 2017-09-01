
window.onkeydown = function(e){
	var key_enter = 13;
    var key = e.keyCode || e.which;
    if(key === key_enter){
        getInput();
    }
}


function getInput(){
	var input = document.getElementById('input').value;
    document.getElementById('input').value = '';
	var output = document.getElementById('output').innerHTML;
    document.getElementById('output').innerHTML = output + "<br/><br/> > "+input;
	if(input.toUpperCase() == "Y" || input.toUpperCase() == "YES"){
		respond("Yay! Contact me @ <a href='mailto:kothary.vikash@gmail.com' target='_top'>kothary.vikash@gmail.com</a>")
	}else{
		respond("You have been eaten by a grue!");
		respond("**** You have died ****");
		respond("Make better decisions next time :)");
	}
	return input;
}

function respond(out){
	var output = document.getElementById('output').innerHTML;
	document.getElementById('output').innerHTML = output + "<br/> " + out;
}