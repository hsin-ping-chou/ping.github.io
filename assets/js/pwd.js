
  function validate() {
    var pwd1 = document.getElementById("password-re").value;
    var pwd2 = document.getElementById("password-re2").value;

    if(pwd1 == pwd2)
    {
      document.getElementById("tishi").innerHTML="<center><font color='green' font-size='8pt'>Password input is consistent</font></center>";
      document.getElementById("button").disabled = false;
    }
    else {
      document.getElementById("tishi").innerHTML="<center><font color='red'>Password input is inconsistent</font></center>";
      document.getElementById("button").disabled = true;
    }
  }

    function validate2() {
    var pwd11 = document.getElementById("password-mo").value;
    var pwd22 = document.getElementById("password-mo2").value;

    if(pwd11 == pwd22)
    {
      document.getElementById("tishii").innerHTML="<center><font color='green' font-size='8pt'>Password input is consistent</font></center>";
      document.getElementById("buttonn").disabled = false;
    }
    else {
      document.getElementById("tishii").innerHTML="<center><font color='red'>Password input is inconsistent</font></center>";
      document.getElementById("buttonn").disabled = true;
    }
  }
