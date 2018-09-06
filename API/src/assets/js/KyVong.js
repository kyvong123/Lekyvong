/* Set the width of the side navigation to 250px */

Dangmo = false;

function openNav() {
    document.getElementById("cotThanhsidebar").style.display ="block";
    document.getElementById("cotThanhsidebar").style.width = "100%";
    
    document.getElementById("cotThanhsidebar").style.background = "rgba(0,0,0,0.5)";
    document.getElementById("cotThanhsidebar").style.textAlign = "center";
    document.getElementById("cotduoicung").style.display = "none";
    
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    
   
    document.getElementById("cotThanhsidebar").style.display = "none";
    document.getElementById("cotduoicung").style.display = "block";
    document.getElementById("cotThanhsidebar").style.textAlign = "left";
   

    
} 

function Movadong(){
	if (Dangmo == false)
	{
		this.openNav();
		Dangmo = true;
	}
	else
	{
		this.closeNav();
		Dangmo = false;
	}
}

function Doigiatri1()
{
    document.getElementById("Englishname1").innerHTML = document.getElementById("Tentienganh1").value;
    document.getElementById("Vietnamesename1").innerHTML= document.getElementById("Tentiengviet1").value;
}
function Doigiatri2()
{
    document.getElementById("Englishname2").innerHTML = document.getElementById("Tentienganh2").value;
    document.getElementById("Vietnamesename2").innerHTML= document.getElementById("Tentiengviet2").value;
}

function Doigiatri3()
{
    document.getElementById("Englishname3").innerHTML = document.getElementById("Tentienganh3").value;
    document.getElementById("Vietnamesename3").innerHTML= document.getElementById("Tentiengviet3").value;
}

function Doigiatri4()
{
    document.getElementById("Englishname4").innerHTML = document.getElementById("Tentienganh4").value;
    document.getElementById("Vietnamesename4").innerHTML= document.getElementById("Tentiengviet4").value;
}


function Doigiatri5()
{
    document.getElementById("Englishname5").innerHTML = document.getElementById("Tentienganh5").value;
    document.getElementById("Vietnamesename5").innerHTML= document.getElementById("Tentiengviet5").value;
}

function Doigiatri6()
{
    document.getElementById("Englishname6").innerHTML = document.getElementById("Tentienganh6").value;
    document.getElementById("Vietnamesename6").innerHTML= document.getElementById("Tentiengviet6").value;
}

function Doigiatri7()
{
    document.getElementById("Englishname7").innerHTML = document.getElementById("Tentienganh7").value;
    document.getElementById("Vietnamesename7").innerHTML= document.getElementById("Tentiengviet7").value;
}

function Doigiatri8()
{
    document.getElementById("Englishname8").innerHTML = document.getElementById("Tentienganh8").value;
    document.getElementById("Vietnamesename8").innerHTML= document.getElementById("Tentiengviet8").value;
}

var sodong = 5;
var themdong = 0;

function Xoadong1()
{
   

    
    document.getElementById("so2").innerHTML = document.getElementById("so2").innerHTML-1;
    document.getElementById("so3").innerHTML = document.getElementById("so3").innerHTML - 1;
    document.getElementById("so4").innerHTML = document.getElementById("so4").innerHTML-1;
    document.getElementById("so5").innerHTML = document.getElementById("so5").innerHTML -1;
    document.getElementById("so6").innerHTML = document.getElementById("so6").innerHTML -1;
    document.getElementById("so7").innerHTML = document.getElementById("so7").innerHTML -1;
    document.getElementById("so8").innerHTML = document.getElementById("so8").innerHTML -1;
    document.getElementById("row_5 dong1").style.display = 'none';
    sodong--;
}

function Xoadong2()
{
    document.getElementById("so3").innerHTML = document.getElementById("so3").innerHTML - 1;
    document.getElementById("so4").innerHTML = document.getElementById("so4").innerHTML-1;
    document.getElementById("so5").innerHTML = document.getElementById("so5").innerHTML -1;
    document.getElementById("so6").innerHTML = document.getElementById("so6").innerHTML -1;
    document.getElementById("so7").innerHTML = document.getElementById("so7").innerHTML -1;
    document.getElementById("so8").innerHTML = document.getElementById("so8").innerHTML -1;
    document.getElementById("row_5 dong2").style.display = 'none';
    sodong--;
}

function Xoadong3()
{
    document.getElementById("so4").innerHTML = document.getElementById("so4").innerHTML-1;
    document.getElementById("so5").innerHTML = document.getElementById("so5").innerHTML -1;
    document.getElementById("so6").innerHTML = document.getElementById("so6").innerHTML -1;
    document.getElementById("so7").innerHTML = document.getElementById("so7").innerHTML -1;
    document.getElementById("so8").innerHTML = document.getElementById("so8").innerHTML -1;
    document.getElementById("row_5 dong3").style.display = 'none';
    sodong--;
}

function Xoadong4()
{

    document.getElementById("so5").innerHTML = document.getElementById("so5").innerHTML -1;
    document.getElementById("so6").innerHTML = document.getElementById("so6").innerHTML -1;
    document.getElementById("so7").innerHTML = document.getElementById("so7").innerHTML -1;
    document.getElementById("so8").innerHTML = document.getElementById("so8").innerHTML -1;
    document.getElementById("row_5 dong4").style.display = 'none';
    sodong--;
}

function Xoadong5()
{

    document.getElementById("so6").innerHTML = document.getElementById("so6").innerHTML -1;
    document.getElementById("so7").innerHTML = document.getElementById("so7").innerHTML -1;
    document.getElementById("so8").innerHTML = document.getElementById("so8").innerHTML -1;
    document.getElementById("row_5 dong5").style.display = 'none';
    sodong--;
}

function Xoadong6()
{

    document.getElementById("so7").innerHTML = document.getElementById("so7").innerHTML -1;
    document.getElementById("so8").innerHTML = document.getElementById("so8").innerHTML -1;
    document.getElementById("row_5 dong6").style.display = 'none';
    sodong--;
}

function Xoadong7()
{

    document.getElementById("so8").innerHTML = document.getElementById("so8").innerHTML -1;
    document.getElementById("row_5 dong7").style.display = 'none';
    sodong--;
}

function Xoadong8()
{

    document.getElementById("row_5 dong8").style.display = 'none';
    sodong--;
}
function Themdong()
{
    if (themdong == 0)
    {
        document.getElementById("row_5 dong6").style.display = "table-row";
        themdong++;
        sodong++;
        document.getElementById("so6").innerHTML = sodong;
        document.getElementById("Englishname6").innerHTML =document.getElementById("Tentienganhtao").value;
        document.getElementById("Vietnamesename6").innerHTML =document.getElementById("Tentiengviettao").value;
    }
    else if (themdong == 1)
    {
        document.getElementById("row_5 dong7").style.display = "table-row";
        themdong++;
        sodong++;
        document.getElementById("so7").innerHTML = sodong;
        document.getElementById("Englishname7").innerHTML =document.getElementById("Tentienganhtao").value;
        document.getElementById("Vietnamesename7").innerHTML =document.getElementById("Tentiengviettao").value;
    }
    else if (themdong == 2)
    {
        document.getElementById("row_5 dong7").style.display = "table-row";
        themdong++;
        sodong++;
        document.getElementById("so7").innerHTML = sodong;
        document.getElementById("Englishname7").innerHTML =document.getElementById("Tentienganhtao").value;
        document.getElementById("Vietnamesename7").innerHTML =document.getElementById("Tentiengviettao").value;
    }
    
    
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


function startTime() {

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var ampm = h >= 12 ? 'pm' : 'am';
    h = h % 12;
    h = h ? h : 12; // the hour '0' should be '12'
    m = m < 10 ? '0'+m : m;

    document.getElementById('time-hours').innerHTML =  h;
    document.getElementById('time-minutes').innerHTML =  m;
    document.getElementById('time-am-pm').innerHTML =  ampm ;

    
 function harold(standIn) {
    if (standIn < 10) {
      standIn = '0' + standIn
    }
    return standIn;
  }
}

function CandidatetoSubjectTest()
{
    document.getElementById("ManageCandidate").style.display = "none";
    document.getElementById("SubjectTest").style.display = "block";
}

function SubjectTesttoCandidate()
{
    document.getElementById("ManageCandidate").style.display = "block";
    document.getElementById("SubjectTest").style.display = "none";
}

