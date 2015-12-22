#target photoshop
// Save the current preferences
var startRulerUnits = app.preferences.rulerUnits
var startTypeUnits = app.preferences.typeUnits
var startDisplayDialogs = app.displayDialogs

app.preferences.rulerUnits = Units.PIXELS
app.preferences.typeUnits = TypeUnits.PIXELS
app.displayDialogs = DialogModes.NO


while (app.documents.length) {
	app.activeDocument.close()
}

function drawLine(doc, start, stop) {
	var startPoint = new PathPointInfo();
	startPoint.anchor = start;
	startPoint.leftDirection = start;
	startPoint.rightDirection = start;
	startPoint.kind = PointKind.CORNERPOINT;
	var stopPoint = new PathPointInfo();
	stopPoint.anchor = stop;
	stopPoint.leftDirection = stop;
	stopPoint.rightDirection = stop;
	stopPoint.kind = PointKind.CORNERPOINT;
	var spi = new SubPathInfo();
	spi.closed = false;
	spi.operation = ShapeOperation.SHAPEXOR;
	spi.entireSubPath = [startPoint, stopPoint];
	var line = doc.pathItems.add("Line", [spi]);
	line.strokePath(ToolType.BRUSH);
	line.remove();
};

var docRef = app.documents.add(800, 600, 72, "Nadpisi")

var choose = parseInt(prompt("1 - black, 2 - red","1"))
var color = new SolidColor
if(choose==2)
{
	color.rgb.red = 255
	color.rgb.green = 0
	color.rgb.blue = 0

	app.foregroundColor.rgb.red = 255
	app.foregroundColor.rgb.green = 0
	app.foregroundColor.rgb.blue = 0
}
else
{
	color.rgb.red = 0
	color.rgb.green = 0
	color.rgb.blue = 0

	app.foregroundColor.rgb.red = 0
	app.foregroundColor.rgb.green = 0
	app.foregroundColor.rgb.blue = 0
}

var msg="Calendar"
var myLayerSets = new Array()
var textArray = Array("First", "Second")

var i = 0
for (i = 0; i < 2; i++) 
{
	myLayerSets[i] = new Array()
	myLayerSets[i][0] = docRef.layerSets.add()
}

for (i = 0; i < 2; i++) {
	myLayerSets[i][0].name = textArray[i] + " Set"
	myLayerSets[i][1] = myLayerSets[i][0].layerSets.add()
	myLayerSets[i][1].name = "Inside " + textArray[i] + " Set"
}

var myLayers = new Array()

myLayers[0] = myLayerSets[0][1].artLayers.add()
myLayers[0].kind = LayerKind.TEXT
myLayers[0].textItem.contents = msg
myLayers[0].textItem.position = Array(app.activeDocument.width/2-50,50)
myLayers[0].textItem.size = 36
myLayers[0].textItem.color = color

myLayers[1] = myLayerSets[1][1].artLayers.add()
myLayers[1].kind = LayerKind.TEXT
myLayers[1].textItem.contents = msg
//myLayers[1].textItem.direction = Direction.VERTICAL
myLayers[1].textItem.position = Array(-10,app.activeDocument.height/2+80)
myLayers[1].textItem.size = 36
myLayers[1].textItem.color = color
myLayers[1].rotate(270)

myLayers[2] = myLayerSets[0][1].artLayers.add()
myLayers[2].name = "line"
drawLine(app.activeDocument,[app.activeDocument.width.value/2-60,60],[app.activeDocument.width.value/2+100,60])

myLayers[3] = myLayerSets[1][1].artLayers.add()
myLayers[3].name = "line"
drawLine(app.activeDocument,[70,app.activeDocument.width.value/2],[70,app.activeDocument.width.value/2-160])

var startRulerUnits = app.preferences.rulerUnits
var startTypeUnits = app.preferences.typeUnits
var startDisplayDialogs = app.displayDialogs

app.preferences.rulerUnits = Units.PIXELS
app.preferences.typeUnits = TypeUnits.PIXELS
app.displayDialogs = DialogModes.NO

app.backgroundColor.rgb.red = 255
app.backgroundColor.rgb.green = 255
app.backgroundColor.rgb.blue = 255


var options = new JPEGSaveOptions
options.quality = 6
docRef.saveAs(new File('~/Desktop/forweb.jpg'), options)