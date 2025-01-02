
var per =prompt("enter your percentage:");

if(per>= 80 && per<= 100){
    document.write("you are in merrrit")
}else if(per>= 60 && per<80){
    document.write("you are in first division")
}else if(per>= 45 && per<60){
    document.write("you are in second divison")
}else if(per>= 33 && per<45){
    document.write("you are in third division")
}else if (per <33){
    document.write("you are fail")
}else{
    document.write("please enter valid per")
}