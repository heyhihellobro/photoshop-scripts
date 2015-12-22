#target photoshop

var inputFolder1 = new Folder("D:/Design/folder1");
//var inputFolder2 = new Folder("D:/Design/folder2");

if (inputFolder1 && inputFolder2) {
    var inputFilesJPG = inputFolder1.getFiles("*.jpg");
    var inputFilesPNG = inputFolder2.getFiles("*.png");

    inputFilesJPG = inputFilesJPG.concat(inputFilesPNG);
    
    if (inputFilesJPG && inputFilesPNG) {
        var outputFile = File("D:/Design/NewPresentation.pdf");
        var options = new PresentationOptions();
        options.presentation = true; //file of presentation type
        options.view = true;
        options.autoAdvance = true;
        options.interval = 5;
        options.loop = true;
        options.transition = TransitionType.RANDOM;
      
        makePDFPresentation(inputFilesJPG, outputFile, options); //make a pdf
        
    } else {
        alert("No PDF FILES");        
    }
}
    