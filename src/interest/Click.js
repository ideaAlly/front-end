function Click() {
    var Btn = true;
function Click(value) {
	var Btn1 = document.getElementById(value);
	console.log(value);
	if (Btn === true) {
		document.getElementById(value).style.backgroundColor = "cadetblue";
		Btn = false;
	} else {
		Btn = true;
	}
}
 }

export default Click