//var{ipcRenderer,remote} = require("electron");
var enviado = false;

function tempo(){
    var btSend = document.getElementsByClassName("_4sWnG")[0];
    var inputSend = document.getElementsByClassName("_13NKt")[1];  
  
    if(typeof inputSend !== "undefined" && inputSend.innerText && !enviado){
        btSend.click();
        enviado=true;
    }else if(enviado){        
        ipcRenderer.send("para", {status:true});
        enviado=false;
    }
    
}
setInterval(tempo,6000);

 //var inputSend = document.querySelector('div[contenteditable="true"][data-tab="1"]');
    //var btSend = document.querySelector('span[data-icon="send"]').parentElement;
    