#target photoshop

/*====================================================
Задание №1
====================================================*/
// var str = "MarPlo.net - Cursuri, Jocuri si Anime";
// alert("Это строка содержит " + str.length + " символов");
// var pos = str.indexOf("Jocuri");
// if (pos >= 0) {
// 	alert("Jocuri se incepe de la positia: " + pos);
// } else {
// 	alert("Слово не найдено.");
// }


/*====================================================
Задание №2
====================================================*/
// var nume = new Array();
// nume[0] = "Cristi";
// nume[1] = "Jon";
// nume[2] = "Simona";
// nume[3] = "Aoh";

// var nr = nume.length;
// nume.sort();
// alert("Afiseaza numele in ordine alfabetica: ") 
// for (i = 0; i < nr; i++) {
// 	alert(nume[i]);
// }


/*====================================================
Задание №3
====================================================*/
// var d = new Date();
// alert("Сегодняшнее число: " + d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear());



/*====================================================
Задание №4
====================================================*/
// alert("8.35 rotujit este: \n 1) ceil -" + Math.ceil(8.35) + "\n 2) floor - " + Math.floor(8.35) + "\n 3) round - " + Math.round(8.35));

/*====================================================
Задание №5
====================================================*/
// var d = new Date();
// var time = d.getHours();
// if (!(time > 10)) {
// 	alert("Buna Ziua!");
// } else {
// 	alert("Este ora " + time);
// }


/*====================================================
Задание №6
====================================================*/
// var d = new Date();
// var ziua = d.getDay();
// // alert(ziua);
// switch(ziua) {
// 	case 5: alert("Сегодня пятница"); break;
// 	case 6: alert("Сегодня суббота"); break;
// 	case 0: alert("Сегодня воскресенье"); break;
// 	case 2: alert("Сегодня вторник"); break;
// 	case 4: alert("Сегодня четверг"); break;
// 	case 3: alert("Сегодня среда"); break;
// 	default: alert("Сегодня понедельник");
// }


/*====================================================
Задание №7
====================================================*/
// var dog = {
// 	color: 'maro',
// 	size: 'big'
// };
// alert(dog["color"]);
// alert(dog.size);

// var cats = [
// 	{
// 		color: "maro",
// 		size: "big"
// 	},
// 	{
// 		color: "black",
// 		size: "small"
// 	}
// ];
// alert("Массив cats" + cats[0]["size"]);

// var dogs = {
// 	rotveler: {
// 		color: "maro",
// 		size: "big"
// 	},
// 	pudel: {
// 		color: "black",
// 		size: "small"
// 	}
// };

// alert(dogs["pudel"]["size"]);
// alert(dogs.rotveler.color);


/*====================================================
Заданеи №8
====================================================*/
// var myArray = [];
// myArray.push("Hello World");
// alert(myArray[0]);



/*====================================================
Дополнительное задание 1
====================================================*/
// var d = new Date();
// var monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];
// var monthNamesRus = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
// alert("Сегодняшнее число: " + d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear() + 
// 	"\n Сегодняшнее число: " + d.getDate() + "." + (monthNames[d.getMonth()]) + "." + d.getFullYear() +
// 	"\n Сегодняшнее число: " + d.getDate() + "." + (monthNamesRus[d.getMonth()]) + "." + d.getFullYear());

// var s = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, assumenda!"; 
// var p = s.slice(s.length/2).split(" ").slice(1).join(" ").length;
// alert(s.slice(0, s.length - p) + "\n\n\n" + s.slice(s.length - p));

// function firstLetterIsUpper(str) {
//    var f = str.charAt(0);
//    return f.toUpperCase() === f;
// }
// var string = prompt("Введите строку: ", 100);
// alert(firstLetterIsUpper(string));


/*====================================================
Next 21.10.15
====================================================*/
// var message = "Welcome to " + app.name;
// message += " version " + app.version + " \r";
// message += "I'm installed in " + app.path + "\r";

// message += "Free memory - " + app.freeMemory + "\r";

// var docOpen = app.documents.length;
// message += "You have " + docOpen + " opened documents";
// // alert(message);

// var answer = confirm("Change background and foreground color?");
// if (answer) {
// 	app.foregroundColor.rgb.red = Math.random() * 255;
// 	app.foregroundColor.rgb.green = Math.random() * 255;
// 	app.foregroundColor.rgb.blue = Math.random() * 255;

// 	app.backgroundColor.rgb.red = Math.random() * 255;
// 	app.backgroundColor.rgb.green = Math.random() * 255;
// 	app.backgroundColor.rgb.blue = Math.random() * 255;
// }

// if (app.documents.length == 0) {
// 	var sampleDoc = File("D:/Workflow/Burger PSD/404.psd");
// 	open(sampleDoc);
// }



/*====================================================
NExt
====================================================*/
// app.bringToFront();
var strRulerUnits = app.preferences.rulerUnits;
app.preferences.rulerUnits = Units.PIXELS;

var docRef = app.documents.add(800, 400);
var artLayerRef = docRef.artLayers.add();

artLayerRef.kind = (LayerKind.TEXT);
var textColor = new SolidColor();
textColor.rgb.red = 60;
textColor.rgb.green = 160;
textColor.rgb.blue = 100;

var textRef = artLayerRef.textItem;
textRef.contents = "Hahaha";
textRef.color = textColor;
textRef.size = 72.0;
textRef.font = "Calibri";
textRef.position = new Array(250,200);



// if (!app.documents.length > 0) {
// 	var docRef = app.documents.add(1280, 800, null);
// }

// app.preferences.rulerUnits = strRulerUnits;
// docRef = app.activeDocument;
// alert("Hello world!");
// docRef = null;