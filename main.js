function openComp(evt, componentId){
    let i, btns, contnets;
    btns = document.getElementsByClassName('btn');
    contnets = document.getElementsByClassName('content');
    for (i=0; i<btns.length; i++){
        btns[i].className = btns[i].className.replace(' active', "");
    }
    for (i=0; i<contnets.length; i++){
        contnets[i].style.display = 'none';
    }
    document.getElementById(componentId).style.display = 'block';
    evt.currentTarget.className += ' active';
}
document.getElementById('defaultOpened').click();

function myFunction(){
    let myBtn = document.getElementById("myTopnav");
    if(myBtn.className === 'topnav') {
        myBtn.className += ' responsive';
    }else {
        myBtn.className = 'topnav';
    }
}