var now = new Date();
var hours = now.getHours();

//18-19 night
if (hours > 17 && hours < 20){
document.write ('<body style="background-image: linear-gradient(to bottom, #ff8200, #fd9635, #fba958, #f9ba79, #f6ca9b);">');
}
//20-21 night
else if (hours > 19 && hours < 22){
document.write ('<body style="background-image: linear-gradient(to bottom, #ff8200, #fd9635, #fba958, #f9ba79, #f6ca9b);">');
}
//22-4 night
else if (hours > 21 || hours < 5){
document.write ('<body style="background-image: linear-gradient(to bottom, #212121, #2a2a2a, #333333, #3c3c3d, #464647);">');
}
//9-17 day
else if (hours > 8 && hours < 18){
document.write ('<body style="background-image: linear-gradient(to bottom, #03a9f4, #4cb9f6, #72c8f7, #93d7f9, #b3e5fc);">');
}
//7-8 day
else if (hours > 6 && hours < 9){
document.write ('<body style="background-image: linear-gradient(to bottom, #03a9f4, #4cb9f6, #72c8f7, #93d7f9, #b3e5fc);>');}
//5-6 day
else if (hours > 4 && hours < 7){
document.write ('<body style="background-image: linear-gradient(to bottom, #006390, #3d82aa, #65a2c5, #8cc3e0, #b3e5fc);">');
}
else {
document.write ('<body style="background-color: white">');
}