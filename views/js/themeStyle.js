var head = document.getElementsByTagName('HEAD')[0];
var link = document.createElement('link');

link.rel = 'stylesheet';
link.type = 'text/css';
if(theme_key==1){
    link.href = 'css/style.min.css';
}else if(theme_key ==2){
    link.href = 'css/style2.min.css';
}

head.appendChild(link);