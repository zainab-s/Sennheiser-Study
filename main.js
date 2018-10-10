//console.log('Testing');
const{app,BrowserWindow,Menu}=require('electron')
//main process
const path=require('path')
const url =require('url')
require('electron-reload')(__dirname)
let win

function createWindow() {
    win=new BrowserWindow ({width:880,height:680})
    // win.loadURL(url.format({
    //     pathname:path.join('C:\Users\Zainab\Downloads\m1','main.html'),
    //     protocol:'file',
    //     slashes:true
    // }))
    win.loadFile('main.html');
    //win.openDevTools();

    win.on('closed', () => { 
        win=null
    })
    
}


app.on('ready',createWindow);
app.on('window-all-closed',()=>{
     if(process.platform !='darwin'){
         app.quit();
     }
})
app.on('activate',() =>{
    if (win == null){
        createWindow();
    }
}) 
