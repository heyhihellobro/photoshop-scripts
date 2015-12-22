#target photoshop

// Save the current preferences
var startRulerUnits = app.preferences.rulerUnits
var startTypeUnits = app.preferences.typeUnits
var startDisplayDialogs = app.displayDialogs
// Set Adobe Photoshop CS6 to use pixels and display no dialogs
app.preferences.rulerUnits = Units.PIXELS
app.preferences.typeUnits = TypeUnits.PIXELS
app.displayDialogs = DialogModes.NO //никаких диалоговых окон
// first close all the open documents
while (app.documents.length) {
app.activeDocument.close()
}

// create a document to work with
var docRef = app.documents.add(500, 700, 72, "Simple Line")
//line 1--it’s a straight line so the coordinates for anchor, left, and right
//for each point have the same coordinates
var lineArray = new Array()
lineArray[0] = new PathPointInfo
lineArray[0].kind = PointKind.CORNERPOINT
lineArray[0].anchor = Array(100, 100)

lineArray[0].leftDirection = lineArray[0].anchor

lineArray[0].rightDirection = lineArray[0].anchor
lineArray[1] = new PathPointInfo
lineArray[1].kind = PointKind.CORNERPOINT
lineArray[1].anchor = Array(150, 200)
lineArray[1].leftDirection = lineArray[1].anchor
lineArray[1].rightDirection = lineArray[1].anchor
var lineSubPathArray = new Array()
lineSubPathArray[0] = new SubPathInfo()
lineSubPathArray[0].operation = ShapeOperation.SHAPEXOR
lineSubPathArray[0].closed = false
lineSubPathArray[0].entireSubPath = lineArray
// line 2
var lineArray2 = new Array()
lineArray2[0] = new PathPointInfo
lineArray2[0].kind = PointKind.CORNERPOINT
lineArray2[0].anchor = Array(150, 200)
lineArray2[0].leftDirection = lineArray2[0].anchor
lineArray2[0].rightDirection = lineArray2[0].anchor
lineArray2[1] = new PathPointInfo
lineArray2[1].kind = PointKind.CORNERPOINT
lineArray2[1].anchor = Array(200, 100)
lineArray2[1].leftDirection = lineArray2[1].anchor
lineArray2[1].rightDirection = lineArray2[1].anchor
lineSubPathArray[1] = new SubPathInfo()
lineSubPathArray[1].operation = ShapeOperation.SHAPEXOR
lineSubPathArray[1].closed = false
lineSubPathArray[1].entireSubPath = lineArray2


//ice cream curve
//it’s a curved line, so there are 3 points, not 2
//coordinates for the middle point (lineArray3[1]) are different.
//The left direction is positioned "above" the anchor on the screen.
//The right direction is positioned "below" the anchor
//You can change the coordinates for these points to see
//how the curve works...
var lineArray3 = new Array()
lineArray3[0] = new PathPointInfo
lineArray3[0].kind = PointKind.CORNERPOINT
lineArray3[0].anchor = Array(200, 100)
lineArray3[0].leftDirection = lineArray3[0].anchor
lineArray3[0].rightDirection = lineArray3[0].anchor
lineArray3[1] = new PathPointInfo
lineArray3[1].kind = PointKind.CORNERPOINT
lineArray3[1].anchor = Array(150, 50)
lineArray3[1].leftDirection = Array(100, 50)
lineArray3[1].rightDirection = Array(200, 50)
lineArray3[2] = new PathPointInfo
lineArray3[2].kind = PointKind.CORNERPOINT
lineArray3[2].anchor = Array(100, 100)
lineArray3[2].leftDirection = lineArray3[2].anchor
lineArray3[2].rightDirection = lineArray3[2].anchor

lineSubPathArray[2] = new SubPathInfo()
lineSubPathArray[2].operation = ShapeOperation.SHAPEXOR
lineSubPathArray[2].closed = false
lineSubPathArray[2].entireSubPath = lineArray3
//create the path item
var myPathItem = docRef.pathItems.add("A Line", lineSubPathArray)
// stroke it so we can see something
myPathItem.strokePath(ToolType.BRUSH)
// Reset the application preferences
preferences.rulerUnits = startRulerUnits
preferences.typeUnits = startTypeUnits
displayDialogs = startDisplayDialogs