// declart var 
// function for 3 btn 
// condition counter and affichage


// 1 declaration 
// declartion variale 
let scondtext=document.getElementById("seconds");
let tenstext=document.getElementById("tens");
let hourtext=document.getElementById("hour")

// buttons
let btnstart=document.getElementById("start");
let btnreset=document.getElementById("reset");
let btnstop=document.getElementById("stop");
let tens=0;
let scond=0;
let hour=0
let interval;
window.onload=function(){


// btn start 
btnstart.onclick =function(){
    clearInterval(interval)
    interval=setInterval(Mycounter , 10)
}
btnstop.onclick =function () {
    clearInterval(interval)
}
btnreset.onclick =function () {
    clearInterval(interval)
    scond=0
    tens=0
    hour=0
    scondtext.innerHTML = "00"
    tenstext.innerHTML =  "00" 
    hourtext.innerHTML = "00" 
}

function Mycounter() {
tens++
if(tens < 9 || scond<9 ||hour<9 ){

tenstext.innerHTML = "0" + tens;



}
if(tens >9 ){

    tenstext.innerHTML = tens;
    
}
if(tens >50){
    scond++
    tens=0
    console.log(scond)
    scondtext.innerHTML = "0" + scond;
    tenstext.innerHTML =  "0" + 0;
}

if(scond >5 ){
    hour++;
    scond=0
    hourtext.innerHTML = "0" + hour;
    scondtext.innerHTML =  "0" + 0;
}
if(scond>9){
scondtext.innerHTML = scond;

}
if(hour>9){
    hourtext.innerHTML = hour;
    
    }
    


}


}

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        console.log(h)
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();