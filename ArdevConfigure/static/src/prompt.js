var ipcRenderer = require('electron').ipcRenderer
var nextButton = document.getElementById("nextbutton");

nextButton.addEventListener("click" , ()=>{ 
    console.log("hello");
    data = {};
    data.success_symbol = document.getElementById("success-symbol").value;
    data.success_symbol_style = document.getElementById("success-symbol-style").value;
    data.success_symbol_color = document.getElementById("success-symbol-color").value;
    data.error_symbol = document.getElementById("error-symbol").value;
    data.error_symbol_style = document.getElementById("error-symbol-style").value;
    data.error_symbol_color = document.getElementById("error-symbol-color").value;
    data.vicmd_symbol = document.getElementById("vicmd-symbol").value;
    data.vicmd_symbol_style = document.getElementById("vicmd-symbol-style").value;
    data.vicmd_symbol_color = document.getElementById("vicmd-symbol-color").value;
    data.prompt_line_break = document.getElementById("prompt-line-break").value;

    console.log(data);
    ipcRenderer.send('save-prompt', data);

});