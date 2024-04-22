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
    document.getElementById('lblday').style.color="red";
    document.getElementById('day').style.border="1px solid red";
    document.getElementById('reqrd1').innerText="Must be a valid day";
}
function nvalid1(){
elmntmonth.style.display = "block";
document.getElementById('lblmonth').style.color="red";
    document.getElementById('month').style.border="1px solid red";
    document.getElementById('reqrd2').innerText="Must be a valid Month";
}
function nvalid2(){
elmntyear.style.display="block";
document.getElementById('lblyear').style.color="red";
    document.getElementById('year').style.border="1px solid red";
    document.getElementById('reqrd3').innerText="Must be a valid Year";
}
// function date is done
 function date(){
     var day = document.getElementById('day').value;
     var month = document.getElementById('month').value;
     var year = document.getElementById('year').value;
     if (resultat === true){
        console.log("lets go");
        // check if the days are compatible with the months : done
        if (month==1 ||month==3 ||month==5 ||month==7 ||month==8 ||month==10 ||month==12 ){
            if(day>= 1 && day<=31){
            console.log('day verify');
            checkday_valid = true;
        }
        else{
            console.log('day not verify');
            nvalid0();
            checkday_valid = false;
        }
          }
        
        if ( month==4 ||month==6 ||month==9 ||month==11  ){
            if(day >=1 && day <= 30){
            console.log('day verify');
            checkday_valid = true;}
            else{
                console.log('day not verify');
                nvalid0();
                checkday_valid = false;
            }
          }
        
        if (month>= 1 && month <= 12 ){
            console.log("month verify");
            checkmonth_valid = true;
          }
        else{
            console.log("month not verify");
            nvalid1();
            checkmonth_valid = false;
          }
        if (year>=1 && year <= 2024 ){
            console.log("year verify");
            checkyear_valid = true;
          }
        else{
            console.log("year not verify");
            nvalid2();
            checkyear_valid = false;
          }
     }
     if (checkday_valid === true && checkmonth_valid === true && checkyear_valid === true){
        console.log("kolchi valide, next to operation");
         resultat_valid = true;
    }
    else{
      console.error('not valid');
      resultat_valid = false;
    }
     
    }
    function operation() {
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        var currentMonth = currentDate.getMonth() + 1; 
        var currentDay = currentDate.getDate();
        var inputDay = document.getElementById("day").value;
        var inputMonth = document.getElementById("month").value;
        var inputYear = document.getElementById("year").value;
        var ageYear = currentYear - inputYear;
        var ageMonth = currentMonth - inputMonth;
        var ageDay = currentDay - inputDay;
    if (resultat_valid == true){
        if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
            ageYear--;
            ageMonth += 12;
        }
        if (ageDay < 0) {
            ageMonth--; 
            var daysInLastMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
            ageDay += daysInLastMonth; 
        }
    
        console.log("day: ",ageDay,"month: ",ageMonth,"year: ",ageYear);
        document.getElementById('dayfinal').innerHTML = ageDay;
        document.getElementById('monthfinal').innerHTML = ageMonth;
        document.getElementById('yearfinal').innerHTML = ageYear;
    }

 else{
    console.error("etape l5ra mblanch");
}
}

