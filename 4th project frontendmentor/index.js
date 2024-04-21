// all variables used in this code
    var elmntday = document.getElementById('reqrd1');
    var elmntmonth = document.getElementById('reqrd2');
    var elmntyear = document.getElementById('reqrd3');
    var checkday ;
    var checkmonth ;
    var checkyear ;
    var resultat;
    var checkday_valid;
    var checkmonth_valid;
    var checkyear_valid;
    var resultat_valid;
    
//empty is done
function empty(){
    if (document.getElementById('day').value==""){
        elmntday.style.display = "block";
        document.getElementById('lblday').style.color="red";
        document.getElementById('day').style.border="1px solid red";
        checkday = false;
    }
    else{
            nempty0();
              checkday = true;
    }
    if (document.getElementById('month').value==""){
        elmntmonth.style.display = "block";
        document.getElementById('lblmonth').style.color="red";
        document.getElementById('month').style.border="1px solid red";
        checkmonth = false;
    }
    else{
            nempty1();
              checkmonth = true;
    }
    if (document.getElementById('year').value==""){
        elmntyear.style.display = "block";
        document.getElementById('lblyear').style.color="red";
        document.getElementById('year').style.border="1px solid red";
        checkyear = false;
    }
    else{
            nempty2();
             checkyear = true;
    }
    if (checkday === true && checkmonth === true && checkyear === true){
        console.log("kolchi 3amr w mrigl, next to validity");
         resultat = true;
    }
    else{
      console.error('ba9in empty');
      resultat = false;
    }
    }
// these are for the oninput or a value is entered :done
function nempty0(){
        elmntday.style.display = "none";
        document.getElementById('lblday').style.color="hsl(0, 1%, 44%)";
        document.getElementById('day').style.border="1px solid hsl(0, 0%, 86%)";
    }
function nempty1(){
    elmntmonth.style.display = "none";
    document.getElementById('lblmonth').style.color="hsl(0, 1%, 44%)";
        document.getElementById('month').style.border="1px solid hsl(0, 0%, 86%)";
}
function nempty2(){
    elmntyear.style.display="none";
    document.getElementById('lblyear').style.color="hsl(0, 1%, 44%)";
        document.getElementById('year').style.border="1px solid hsl(0, 0%, 86%)";
}
//these for the value if its not valid
function nvalid0(){
    elmntday.style.display = "block";
    document.getElementById('lblday').style.color="hsl(0, 1%, 44%)";
    document.getElementById('day').style.border="1px solid hsl(0, 0%, 86%)";
    document.getElementById('reqrd1').innerText="Must be a valid day";
}
function nvalid1(){
elmntmonth.style.display = "block";
document.getElementById('lblmonth').style.color="hsl(0, 1%, 44%)";
    document.getElementById('month').style.border="1px solid hsl(0, 0%, 86%)";
    document.getElementById('reqrd2').innerText="Must be a valid Month";
}
function nvalid2(){
elmntyear.style.display="block";
document.getElementById('lblyear').style.color="hsl(0, 1%, 44%)";
    document.getElementById('year').style.border="1px solid hsl(0, 0%, 86%)";
    document.getElementById('reqrd3').innerText="Must be a valid Year";
}
 function date(){
     let day = document.getElementById('day').value;
     let month = document.getElementById('month').value;
     let year = document.getElementById('year').value;
     if (resultat === true){
        console.log("lets go");
        if (day>= 1 && day<=31 ){
            console.log('day verify');
          }
        else{
            console.log('day not verify');
            nvalid0();
        }
        
        if (month>= 1 && month <= 12 ){
            console.log("month verify");
          }
        else{
            console.log("month not verify");
            nvalid1();
          }
        if (year>=1 && year <= 2024 ){
            console.log("year verify");
          }
        else{
            console.log("year not verify");
            nvalid2();
          }
     }
     
    }