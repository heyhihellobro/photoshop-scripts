// Save the current preferences
var startRulerUnits = app.preferences.rulerUnits;
var startTypeUnits = app.preferences.typeUnits;
var startDisplayDialogs = app.displayDialogs;
// Set Adobe Photoshop CS6 to use pixels and display no dialogs
app.preferences.rulerUnits = Units.PIXELS;
app.preferences.typeUnits = TypeUnits.PIXELS;
app.displayDialogs = DialogModes.NO;
//Close all the open documents
while (app.documents.length) {
  app.activeDocument.close();
}
//Create variables for the 800 pixel board divided in even 100 x 100 squares
var docSize = 800;
var cells = 8;
var cellSize = docSize / cells;

// create a new document
var checkersDoc = app.documents.add(docSize, docSize, 72, "Checkers");
// Create a variable to use for selecting the checker board
// That allows me to shift the selection one square to the right
//on every other row, and then shift back for the rows in between.
var shiftIt = true;
// loop through vertically to create the first row
for (var v = 0; v < docSize; v += cellSize) {
  // Switch the shift for a new row
  shiftIt = !shiftIt;
  // loop through horizontally
  for (var h = 0; h < docSize; h += (cellSize * 2)) {
    // push over the cellSize to start with only
    if (shiftIt && h == 0) {
      h += cellSize;
    }
    // Select a square
    selRegion = Array(Array(h, v), Array(h + cellSize, v), Array(h + cellSize, v + cellSize), Array(h, v + cellSize), Array(h, v))
    // In the first ineration of the loop, start the selection
    //In subsequent iterations, use the EXTEND constant value
    //of the select() method to add to the selection (in the loop’s else clause)
    if (h == 0 && v == 0) {
      checkersDoc.selection.select(selRegion);
    } else {
      checkersDoc.selection.select(selRegion, SelectionType.EXTEND);
    }
    // turn this off for faster execution
    // turn this on for debugging
    //WaitForRedraw()
  }
}
// Fill the current selection with the foreground color
checkersDoc.selection.fill(app.foregroundColor)
//Invert the selection
checkersDoc.selection.invert()
// Fill the new selection with the background color
checkersDoc.selection.fill(app.backgroundColor)
// Clear the selection to get rid of the non-printing borders
checkersDoc.selection.deselect()
// Reset the application preferences
app.preferences.rulerUnits = startRulerUnits
app.preferences.typeUnits = startTypeUnits
app.displayDialogs = startDisplayDialogs
// A helper function for debugging
// It also helps the user see what is going on
// if you turn it off for this example you
// get a flashing cursor for a number time
function WaitForRedraw() {
  var eventWait = charIDToTypeID("Wait")
  var enumRedrawComplete = charIDToTypeID("RdCm")
  var typeState = charIDToTypeID("Stte")
  var keyState = charIDToTypeID("Stte")
  var desc = new ActionDescriptor()
  desc.putEnumerated(keyState, typeState, enumRedrawComplete)
  executeAction(eventWait, desc, DialogModes.NO)
}
