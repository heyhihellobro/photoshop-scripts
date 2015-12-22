#target photoshop

var startRulerUnits = app.preferences.rulerUnits
var startTypeUnits = app.preferences.typeUnits
var startDisplayDialogs = app.displayDialogs
// Set Adobe Photoshop CS6 to use pixels and display no dialogs
app.preferences.rulerUnits = Units.PIXELS
app.preferences.typeUnits = TypeUnits.PIXELS
app.displayDialogs = DialogModes.NO //никаких диалоговых окон


while (app.documents.length) { app.activeDocument.close(); }


var settings = {
	image: {
		width: 250,
		height: 250,
		url: "D:/Pictures/back.jpg"
	},
	borderImage: {
		width: 265,
		height: 265,
		url: "D:/Pictres/img.jpg"
	}
}

function setBackgroundImage(imgURL) {
	var height = options.image.height;
	var width = options.image.width;
	
	var imgDoc = open(File(imgURL));
	app.activeDocument = imgDoc;
	imgDoc.resizeImage(width, height);
	imgDoc.activeLayer.copy();
	app.activeDocument = calendarDoc;

	var selRegion = Array(
		Array(0, 0), 
		Array(width, 0),
		Array(width, height),
		Array(0, height));

	calendarDoc.selection.select(selRegion);
	calendarDoc.paste(true);
	imgDoc.close(SaveOptions.DONOTSAVECHANGES);
}