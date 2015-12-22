#target photoshop

// Save the current preferences
var startRulerUnits = app.preferences.rulerUnits;
var startTypeUnits = app.preferences.typeUnits;
var startDisplayDialogs = app.displayDialogs;
// Set Adobe Photoshop CS6 to use pixels and display no dialogs
app.preferences.rulerUnits = Units.PIXELS;
app.preferences.typeUnits = TypeUnits.PIXELS;
app.displayDialogs = DialogModes.NO;

while (app.documents.length) {
    app.activeDocument.close();
    }

var pr = prompt("Выберите картинка (1) или цвет (2)", "1");

if (pr == "1") {
    var docRef = open(File("D:/Pictures/image_2.jpg"));

    var myLayer = docRef.activeLayer;
    myLayer.applyGlassEffect(5,3,100,true,TextureType.FROSTED);
    

} else {

var color = prompt("Введите цвета фона: ", "0,0,0");
var array = new Array();
var array = color.split(",");

app.backgroundColor.rgb.red = parseInt(array[0]);
app.backgroundColor.rgb.green = parseInt(array[1]);
app.backgroundColor.rgb.blue = parseInt(array[2]);
    
    
    var docRef = app.documents.add(1500, 700, 72, "my doc", NewDocumentMode.RGB, DocumentFill.BACKGROUNDCOLOR, 1)
    
var artLayerRef = docRef.artLayers.add();

artLayerRef.kind = (LayerKind.TEXT);
var textColor = new SolidColor();

textColor.rgb.red = 255;
textColor.rgb.green = 0;
textColor.rgb.blue = 0;


var textRef = artLayerRef.textItem;
textRef.contents = "Simple Text";
textRef.color = textColor;
textRef.size = 72.0;
textRef.font = "Calibri";
textRef.position = new Array(550,70);


artLayerRef.kind = (LayerKind.NORMAL);


artLayerRef.applyAddNoise(150,NoiseDistribution.UNIFORM, true);
    
    }


app.preferences.rulerUnits = startRulerUnits
app.preferences.typeUnits = startTypeUnits
app.displayDialogs = startDisplayDialogs