function czerwony(){
    var skala = document.getElementById("skala").value;
    var wybor = document.getElementById("wybor").value;
    
    if(wybor=="prosty"){
        document.getElementById("wynik").style="color: red; font-size:"+skala+"%";
    }else{
        document.getElementById("wynik").style="color: red; font-style: italic; font-size:"+skala+"%";  
    }
}

function zielony(){
    var skala = document.getElementById("skala").value;
    var wybor = document.getElementById("wybor").value;
    
    if(wybor=="prosty"){
        document.getElementById("wynik").style="color: green; font-size:"+skala+"%";
    }else{
        document.getElementById("wynik").style="color: green; font-style: italic; font-size:"+skala+"%";  
    }
}

function niebieski(){
    var skala = document.getElementById("skala").value;
    var wybor = document.getElementById("wybor").value;
    
    if(wybor=="prosty"){
        document.getElementById("wynik").style="color: blue; font-size:"+skala+"%";
    }else{
        document.getElementById("wynik").style="color: blue; font-style: italic; font-size:"+skala+"%";  
    }
}

