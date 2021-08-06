// Modules to control application life and create native browser window
// https://www.youtube.com/watch?v=G70kFRdJ9pY  
const {app, BrowserWindow} = require('electron')
let mainWindow 

app.on('ready', function () {
    mainWindow = new BrowserWindow();
    
   /* ipcMain.on("para",(event,arg)=>{
        if(arg.status){
            mainWindow.hide();
        }
    });*/

    var telefone = "553491893318";
    var mensage = "vaca amarela";
    
    mainWindow.loadURL("https://web.whatsapp.com/send?phone="+telefone+"&text="+mensage,
    {
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
    });
   /* mainWindow.webContents.executeJavaScript(
        'var enviado = false;function tempo(){var btSend = document.getElementsByClassName("_4sWnG")[0]; var inputSend = document.getElementsByClassName("_13NKt")[1];if(typeof inputSend !== "undefined" && inputSend.innerText && !enviado){btSend.click(); enviado=true; }else if(enviado){ipcRenderer.send("para", {status:true});enviado=false; } }setInterval(tempo,3000);'
      );*/

      mainWindow.webContents.once('dom-ready', () => {

        mainWindow.webContents.executeJavaScript(`
              console.log("This loads no problem!");
           
                  setInterval(function () {
                      var enviado = false;
                      var btnSend = document.querySelector("button._4sWnG");
                      if (!enviado) {
                          btnSend.click();
                          enviado = true;
                      } else if (enviado) {
                        ${mainWindow.hide()}
                      }
                  }, 200000);
          `);
    
      })
});

