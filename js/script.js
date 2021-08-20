window.onload = function() {
completion();
}
			function completion() {
					if (document.forms.myform.firstname.value != "") {
							document.getElementById('pop-up1').style.display = 'none';
			        		document.forms.myform[0].style.border = '1px solid #9f9f9f';
					}
					if (document.forms.myform.lastname.value != "") {
							document.getElementById('pop-up2').style.display = 'none';
			        		document.forms.myform[1].style.border = '1px solid #9f9f9f';
					}
					if (document.forms.myform.birthdate.value != "") {
							document.getElementById('pop-up3').style.display = 'none';
			        		document.forms.myform[2].style.border = '1px solid #9f9f9f';
					}
						window.setTimeout(completion, 20);
			}
				function chek() {
				    	valed = true;
							    if (document.forms.myform.firstname.value == "") {
						            document.getElementById('pop-up1').style.display = 'flex';
						            document.forms.myform[0].style.border = '1px solid #FF0000';
						            valed = false;
						        }
							    if (document.forms.myform.lastname.value == "") {
						            document.getElementById('pop-up2').style.display = 'flex';
						            document.forms.myform[1].style.border = '1px solid #FF0000';
						            valed = false;
							    }                
						        if (document.forms.myform.birthdate.value == "") {
						            document.getElementById('pop-up3').style.display = 'flex';
						            document.forms.myform[2].style.border = '1px solid #FF0000';
						            valed = false;
							    }   
				        return valed;
				}