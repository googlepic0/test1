var password = "27kaisha55";
function passcheck() {
    if(document.getElementById('pass1').value != password){
        alert('Wrong password, Try Agian.');
        return false;
    }
    if(document.getElementById('pass1').value != password){
        alert('Correct Password. Click Ok to enter webpage.');
    }
}