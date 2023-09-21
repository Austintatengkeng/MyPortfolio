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

