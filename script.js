function bckg1() {
    document.getElementById("bckg").classList.toggle('background1');
    document.getElementById("activate1").classList.toggle('selected');
    
}

document.getElementById('activate1').addEventListener('click', bckg1);

function bckg2() {
    document.getElementById("bckg").classList.toggle('background2');
    document.getElementById("activate2").classList.toggle('selected');
    

}

document.getElementById('activate2').addEventListener('click', bckg2);



function bckg3() {
    document.getElementById("bckg").classList.toggle('background3');
    document.getElementById("activate3").classList.toggle('selected');

}

document.getElementById('activate3').addEventListener('click', bckg3);

function stop() {
    document.getElementById("bckg").classList.remove('background1');
    document.getElementById("bckg").classList.remove('background2');
    document.getElementById("bckg").classList.remove('background3');


}

document.getElementById('stop').addEventListener('click', stop);