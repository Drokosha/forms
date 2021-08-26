window.onload = function() {
	document.forms.myform[0].onkeyup = onch;
    document.forms.myform[1].onkeyup = onch;
    document.forms.myform[2].onkeyup = onch;
    document.forms.myform.onsubmit = chek;


};
    function onch () {
		if (this.value != "") {
	        document.getElementById(this.name).style.display = 'none';
			this.classList.add("field_normal");
			this.classList.remove("field_error");
		}
	}
	    function chek() {
		    valed = true;
				if (this.value == "") {
		            document.getElementById(this.name).style.display = 'flex';
		            this.classList.remove("field_normal");
			        this.classList.add("field_error");
		            valed = false;
				}
		    return valed;
		}