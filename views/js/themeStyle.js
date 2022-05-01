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
var link2 = document.createElement('link');
link2.rel = 'stylesheet';
link2.type = 'text/css';
if(theme_key==1){
    link2.href = 'css/footerHeader1.css';
}else if(theme_key ==2){
    link2.href = 'css/footerHeader2.css';
}
head.appendChild(link2);