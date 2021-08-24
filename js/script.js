window.onload = function() {
	document.forms.myform[0].onkeyup = onch;
    document.forms.myform[1].onkeyup = onch;
    document.forms.myform[2].onkeyup = onch;
    document.forms.myform.onsubmit = chek;
};
    function onch () {
		if (document.forms.myform.firstname.value != "") {
			document.getElementById('pop-up1').style.display = 'none';
			document.forms.myform[0].classList.add("field_normal");
			document.forms.myform[0].classList.remove("field_error");
		}
			if (document.forms.myform.lastname.value != "") {
					document.getElementById('pop-up2').style.display = 'none';
			        document.forms.myform[1].classList.add("field_normal");
				    document.forms.myform[1].classList.remove("field_error");
			}
				if (document.forms.myform.birthdate.value != "") {
						document.getElementById('pop-up3').style.display = 'none';
			        	document.forms.myform[2].classList.add("field_normal");
						document.forms.myform[2].classList.remove("field_error");
				}
	}
	    function chek() {
		    valed = true;
				if (document.forms.myform.firstname.value == "") {
		            document.getElementById('pop-up1').style.display = 'flex';
		            document.forms.myform[0].classList.remove("field_normal");
		            document.forms.myform[0].classList.add("field_error");
		            valed = false;
				}
				    if (document.forms.myform.lastname.value == "") {
			            document.getElementById('pop-up2').style.display = 'flex';
			            document.forms.myform[1].classList.remove("field_normal");
			            document.forms.myform[1].classList.add("field_error");
			            valed = false;
					}                
						if (document.forms.myform.birthdate.value == "") {
				            document.getElementById('pop-up3').style.display = 'flex';
				            document.forms.myform[2].classList.remove("field_normal");
				            document.forms.myform[2].classList.add("field_error");
				            valed = false;
					    }   
		    return valed;
		}