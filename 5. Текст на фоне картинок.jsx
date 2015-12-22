#target photoshop

//2 картинки, расположим их в одном документе

// Save the current preferences
var startRulerUnits = app.preferences.rulerUnits
var startTypeUnits = app.preferences.typeUnits
var startDisplayDialogs = app.displayDialogs

// Set Adobe Photoshop CS6 to use pixels and display no dialogs
app.preferences.rulerUnits = Units.PIXELS
app.preferences.typeUnits = TypeUnits.PIXELS
app.displayDialogs = DialogModes.NO
// first close all the open documents
while (app.documents.length) {
app.activeDocument.close()
}
// Open the sunflower and duck files from the samples folder
var flowerDoc = open(File("D:/Design/folder1/image.jpg"))
var duckDoc = open(File("D:/Design/folder1/other.jpg"))

// Find out which document is larger
// Resize the smaller document the to the larger document’s size
// The resize requires the document be the active/front document
if ((flowerDoc.width.value * flowerDoc.height.value) >
(duckDoc.width.value * duckDoc.height.value)) {
app.activeDocument = duckDoc
duckDoc.resize(flowerDoc.width, flowerDoc.height)
}
else {
app.activeDocument = flowerDoc
flowerDoc.resizeImage(duckDoc.width, duckDoc.height)
}
// Create a new document twice as high as two files
var mergedDoc = app.documents.add(duckDoc.width * 2, duckDoc.height,
duckDoc.resolution, "FlowerOverDuck")

// Copy the flower to the top; make it the active document so we can manipulate it
app.activeDocument = flowerDoc
flowerDoc.activeLayer.copy()
//Paste the flower to the merged document, making the merged document active
app.activeDocument = mergedDoc
// Select a square area at the top of the new document


var selRegion = Array
(Array(0, 0),
Array(mergedDoc.width.value / 2, 0),
Array(mergedDoc.width.value / 2, mergedDoc.height.value),
Array(0, mergedDoc.width.value),
Array(0, 0)) ;
// Create the selection
mergedDoc.selection.select(selRegion)
//Paste in the flower
mergedDoc.paste(true)
// do the same thing for the duck
app.activeDocument = duckDoc
duckDoc.activeLayer.copy()
app.activeDocument = mergedDoc
mergedDoc.selection.select(selRegion)
// Inverting the selection so the bottom of the document is now selected
mergedDoc.selection.invert()
// Paste the duck
mergedDoc.paste(true)


var artLayerRef = mergedDoc.artLayers.add();

artLayerRef.kind = (LayerKind.TEXT);
var textColor = new SolidColor();
textColor.rgb.red = 60;
textColor.rgb.green = 160;
textColor.rgb.blue = 100;

var textRef = artLayerRef.textItem;
textRef.contents = "Hello";
textRef.color = textColor;
textRef.size = 72.0;
textRef.font = "Calibri";
textRef.position = new Array(250,200);

var artLayerRef = mergedDoc.artLayers.add();

artLayerRef.kind = (LayerKind.TEXT);
var textColor = new SolidColor();
textColor.rgb.red = 60;
textColor.rgb.green = 160;
textColor.rgb.blue = 100;

var textRef = artLayerRef.textItem;
textRef.contents = "World";
textRef.color = textColor;
textRef.size = 72.0;
textRef.font = "Calibri";
textRef.position = new Array(750,200);

// get rid of our originals without modifying them
duckDoc.close(SaveOptions.DONOTSAVECHANGES)
flowerDoc.close(SaveOptions.DONOTSAVECHANGES)
// Reset the application preferences
app.preferences.rulerUnits = startRulerUnits
app.preferences.typeUnits = startTypeUnits
app.displayDialogs = startDisplayDialogs