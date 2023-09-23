let greeting = document.getElementById('hello');
let desc = document.getElementById('hidden');
let hi = document.getElementById('hi');

//onclick show desc
hi.onclick= function() {
    greeting.hidden = true;
    desc.hidden = false;
}

desc.onclick = function(){
    greeting.hidden = false;
    desc.hidden = true; 
}

let info = document.getElementById('info');
let stats= document.getElementById('stats');

info.onclick= function(){
    info.hidden= true;
    stats.hidden = false;
}
stats.onclick= function(){
    info.hidden= false;
    stats.hidden = true;
}


