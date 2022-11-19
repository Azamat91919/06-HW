function chpok(id){
    elem = document.getElementById(id); 
    state = elem.style.display; 
    if (state =='') elem.style.display='none'; 
    else elem.style.display='';
}
  
function check (){
    if(document.getElementById('p1').value == document.getElementById('p2').value)
        alert('Пароли верны');
    else 
        alert('Пароли неверны');
    }
