#target photoshop
#script "Vladimir Rodin (@heyhihellobro) - Calendar-Making Script"

/*====================================================
Photoshop Calendar-Making Script (CS2+)
Author: Vladimir Rodin
Twitter: @heyhihellobro
Project: Calendar
Vesion: 1.0 (Apha)
====================================================*/

/*====================================================
Настройки стартовых значений приложения
====================================================*/
var startRulerUnits = app.preferences.rulerUnits;
var startTypeUnits = app.preferences.typeUnits;
var startDisplayDialogs = app.displayDialogs;

app.preferences.rullerUnits = Units.PIXELS;
app.preferences.typeUnits = TypeUnits.PIXELS;
app.displayDialogs = DialogModes.NO;

/*====================================================
Закрываем все открытые документы
====================================================*/
while (app.documents.length) { app.activeDocument.close(); }

/*====================================================
Глобальные переменные и настройки календаря
====================================================*/
var calendarSettings = {

  window: {
    type: "dialog",
    title: "Vladimir Rodin - Настройки календаря",
    propreties: undefined,
    resizeable: true,
    closeButton: true,
    maximizeButton: true,
    minimizeButton: false
  },

  calendar: {
    year: 2016,
    fontSize: 100,
    textColor: {
      red: 0,
      green: 0,
      blue: 0
    },
    title: "",
    language: "RUS"
  },

  document: {
    title: "Vladimir Rodin - Calendar Script",
    waitForRedraw: 1,
    fontFamily: "Calibri",
    dimensions: {
      width: 2800,
      height: 1860,
      resolution: 72
    },
    background: {
      image: "D:/Pictures/back.jpg",
      color: {
        red: 241,
        green: 241,
        blue: 241
      }
    },
    foreground: {
      color: {
        red: 228,
        green: 89,
        blue: 89
      }
    }
  },

  month: {
    margin: {
      top: 10,
      left: 50
    },
    fontFamily: "Calibri",
    textColor: {
      red: 10,
      green: 130,
      blue: 120
    },
    fontSize: 48,
    monthNamesRus: [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ],
    monthNamesEng: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  },

  day: {
    margin: {
      top: 5,
      left: 5
    },
    textContent: {
      margin: {
        left: 20,
        top: 50
      },
      titlesShortArrayRus: [
      "П", "В", "С", "Ч", "П", "С", "В"
      ],
      titlesShortArrayEng: [
      "M", "T", "W", "T", "F", "S", "S"
      ],
      titlesArrayRus: [
      "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"
      ],
      titlesArrayEng: [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      textColor: {
        red: 0,
        green: 0,
        blue: 0
      },
      fontSize: 48,
    },
    fontSize: 32,
    workday: {
      textColor: {
        red: 0,
        green: 0,
        blue: 0
      }
    },
    holiday: {
      textColor: {
        red: 255,
        green: 0,
        blue: 0
      }
    }
  }

};


/*====================================================
Предложение пользователю выбрать язык
====================================================*/
var mainLanguage = prompt("Выберите язык (RUS) | Choose your language (ENG)", "RUS");
//alert(mainLanguage);

if (mainLanguage == "RUS") {
  calendarSettings.calendar.language = "RUS";

  /*====================================================
  Настройка цвета основного заголовка
  ====================================================*/
  var calendarTitleColor = prompt("Напишите цвет основого заголовка", "0,0,0");
  var calendarTitleColorArray = new Array();
  calendarTitleColorArray = calendarTitleColor.split(",");

  calendarSettings.calendar.textColor.red = parseInt(calendarTitleColorArray[0]);
  calendarSettings.calendar.textColor.green = parseInt(calendarTitleColorArray[1]);
  calendarSettings.calendar.textColor.blue = parseInt(calendarTitleColorArray[2]);


  /*====================================================
  Настройка размера шрифта основного текста заголовка
  ====================================================*/
  var calendarTitleSize = prompt("Размер текста основного заголовка", "95");
  calendarSettings.calendar.fontSize = parseInt(calendarTitleSize);

  /*====================================================
  Настройка цвета заголовков месяца
  ====================================================*/
  var monthTitleColor = prompt("Напишите цвет заголовков месяцев", "10,130,120");
  var monthTitleColorArray = new Array();
  monthTitleColorArray = monthTitleColor.split(",");
  
  calendarSettings.month.textColor.red = parseInt(monthTitleColorArray[0]);
  calendarSettings.month.textColor.green = parseInt(monthTitleColorArray[1]);
  calendarSettings.month.textColor.blue = parseInt(monthTitleColorArray[2]);


  /*====================================================
  Настройка цвета дней недели
  ====================================================*/
  var weekTitleColor = prompt("Введите цвет названия дней недели", "0,0,0");
  var weekTitleColorArray = new Array();
  weekTitleColorArray = weekTitleColor.split(",");
  
  calendarSettings.day.textContent.textColor.red = parseInt(weekTitleColorArray[0]);
  calendarSettings.day.textContent.textColor.green = parseInt(weekTitleColorArray[1]);
  calendarSettings.day.textContent.textColor.blue = parseInt(weekTitleColorArray[2]);
  

  /*====================================================
  Настройка цвета рабочих дней
  ====================================================*/
  var workdayTitleColor = prompt("Введите цвет рабочих дней", "0,0,0");
  var workdayTitleColorArray = new Array();
  workdayTitleColorArray = workdayTitleColor.split(",");
  
  calendarSettings.day.workday.textColor.red = parseInt(workdayTitleColorArray[0]);
  calendarSettings.day.workday.textColor.green = parseInt(workdayTitleColorArray[1]);
  calendarSettings.day.workday.textColor.blue = parseInt(workdayTitleColorArray[2]);
  

  /*====================================================
  Настройка цвета выходных дней
  ====================================================*/
  var holidayTitleColor = prompt("Введите цвет выходных дней", "255,0,0");
  var holidayTitleColorArray = new Array();
  holidayTitleColorArray = holidayTitleColor.split(",");
  
  calendarSettings.day.holiday.textColor.red = parseInt(holidayTitleColorArray[0]);
  calendarSettings.day.holiday.textColor.green = parseInt(holidayTitleColorArray[1]);
  calendarSettings.day.holiday.textColor.blue = parseInt(holidayTitleColorArray[2]);


  /*====================================================
  Использовать изображение на фоне?
  ====================================================*/
  var useImage = prompt("Использовать изображение на фоне?", "yes");
  if (useImage == "yes") {
    var pathToImage = prompt("Хотите ввести пусть до новой картинки или использовать стандартную? (yes | no)", "no");
    if (pathToImage == "yes") {
      var url = prompt("Введите путь до картинки", "D:/Pictures/back.jpg");
      calendarSettings.document.background.image = url;
    } else {
      calendarSettings.document.background.image = "D:/Pictures/back.jpg";
    }
  } else {
    calendarSettings.document.background.image = null;
  }

} else if (mainLanguage == "ENG") {

  calendarSettings.calendar.language = "ENG";

  /*====================================================
  Настройка цвета основного заголовка
  ====================================================*/
  var calendarTitleColor = prompt("Type main color of caldendar title", "0,0,0");
  var calendarTitleColorArray = new Array();
  calendarTitleColorArray = calendarTitleColor.split(",");

  calendarSettings.calendar.textColor.red = parseInt(calendarTitleColorArray[0]);
  calendarSettings.calendar.textColor.green = parseInt(calendarTitleColorArray[1]);
  calendarSettings.calendar.textColor.blue = parseInt(calendarTitleColorArray[2]);


  /*====================================================
  Настройка размера шрифта основного текста заголовка
  ====================================================*/
  var calendarTitleSize = prompt("Type the font size of main calendar title", "95");
  calendarSettings.calendar.fontSize = parseInt(calendarTitleSize);

  /*====================================================
  Настройка цвета заголовков месяца
  ====================================================*/
  var monthTitleColor = prompt("Type the color of month titles", "10,130,120");
  var monthTitleColorArray = new Array();
  monthTitleColorArray = monthTitleColor.split(",");
  
  calendarSettings.month.textColor.red = parseInt(monthTitleColorArray[0]);
  calendarSettings.month.textColor.green = parseInt(monthTitleColorArray[1]);
  calendarSettings.month.textColor.blue = parseInt(monthTitleColorArray[2]);


  /*====================================================
  Настройка цвета дней недели
  ====================================================*/
  var weekTitleColor = prompt("Type the color of weekdays titles", "0,0,0");
  var weekTitleColorArray = new Array();
  weekTitleColorArray = weekTitleColor.split(",");
  
  calendarSettings.day.textContent.textColor.red = parseInt(weekTitleColorArray[0]);
  calendarSettings.day.textContent.textColor.green = parseInt(weekTitleColorArray[1]);
  calendarSettings.day.textContent.textColor.blue = parseInt(weekTitleColorArray[2]);
  

  /*====================================================
  Настройка цвета рабочих дней
  ====================================================*/
  var workdayTitleColor = prompt("Type the color for workdays", "0,0,0");
  var workdayTitleColorArray = new Array();
  workdayTitleColorArray = workdayTitleColor.split(",");
  
  calendarSettings.day.workday.textColor.red = parseInt(workdayTitleColorArray[0]);
  calendarSettings.day.workday.textColor.green = parseInt(workdayTitleColorArray[1]);
  calendarSettings.day.workday.textColor.blue = parseInt(workdayTitleColorArray[2]);
  

  /*====================================================
  Настройка цвета выходных дней
  ====================================================*/
  var holidayTitleColor = prompt("Type the color for holidays", "255,0,0");
  var holidayTitleColorArray = new Array();
  holidayTitleColorArray = holidayTitleColor.split(",");
  
  calendarSettings.day.holiday.textColor.red = parseInt(holidayTitleColorArray[0]);
  calendarSettings.day.holiday.textColor.green = parseInt(holidayTitleColorArray[1]);
  calendarSettings.day.holiday.textColor.blue = parseInt(holidayTitleColorArray[2]);


  /*====================================================
  Использовать изображение на фоне?
  ====================================================*/
  var useImage = prompt("Do you want to use a background image?", "yes");
  if (useImage == "yes") {
    var pathToImage = prompt("Do you want to type an url path to image or use default? (yes | no)", "no");
    if (pathToImage == "yes") {
      var url = prompt("Enter path to image", "D:/Pictures/back.jpg");
      calendarSettings.document.background.image = url;
    } else {
      calendarSettings.document.background.image = "D:/Pictures/back.jpg";
    }
  } else {
    calendarSettings.document.background.image = null;
  }
}

/*====================================================
Базовая настройка цветов палитры приложения
====================================================*/
app.foregroundColor.rgb.red = 255;
app.foregroundColor.rgb.green = 0;
app.foregroundColor.rgb.blue = 0;

app.backgroundColor.rgb.red = calendarSettings.document.background.color.red;
app.backgroundColor.rgb.green = calendarSettings.document.background.color.green;
app.backgroundColor.rgb.blue = calendarSettings.document.background.color.blue;

if (calendarSettings.calendar.language == "RUS") {
  calendarSettings.calendar.title = "Календарь " + calendarSettings.calendar.year;
} else if (calendarSettings.calendar.language == "ENG") {
  calendarSettings.calendar.title = "Calendar for " + calendarSettings.calendar.year + " year";
}

/*====================================================
Создаем новый документ. Настройки документа хранятся в
глобальных настройках calendarSettings
====================================================*/
var docRef = null;

if (calendarSettings.document.background.image) {
  docRef = app.documents.add(
    calendarSettings.document.dimensions.width,
    calendarSettings.document.dimensions.height,
    calendarSettings.document.dimensions.resolution,
    calendarSettings.document.title);

  SetBackgroundImage(calendarSettings.document.background.image);
} else {
  docRef = app.documents.add(
    calendarSettings.document.dimensions.width,
    calendarSettings.document.dimensions.height,
    calendarSettings.document.dimensions.resolution,
    calendarSettings.document.title,
    NewDocumentMode.RGB, DocumentFill.BACKGROUNDCOLOR, 1);
}

/*====================================================
Создаем главный заголовок
====================================================*/
DrawSimpleText(
  docRef,
  calendarSettings.calendar.title,
  calendarSettings.calendar.textColor,
  calendarSettings.calendar.fontSize,
  calendarSettings.document.fontFamily,
  (calendarSettings.document.dimensions.width) / 2 - (calendarSettings.calendar.title.length * calendarSettings.calendar.fontSize / 4) + 50,
  (calendarSettings.calendar.fontSize + 150)
  );

if (calendarSettings.document.waitForRedraw == "1") {
  WaitForRedraw();
}

/*====================================================
Рисуем название месяцев
====================================================*/
var monthsFolder = docRef.layerSets.add();
monthsFolder.name = "Месяца";


for (var i = 0; i < 12; i++) {

  if (i < 6) {

    /*====================================================
    Рисуем первые 6 месяцев
    ====================================================*/
    
    var monthPositionXY = { 
      x: 175, 
      y: (calendarSettings.calendar.fontSize + 450)
    };

    if (calendarSettings.calendar.language == "RUS") {

      var monthFolder = monthsFolder.layerSets.add();
      monthFolder.name = calendarSettings.month.monthNamesRus[i];

      DrawSimpleText(
        monthFolder,
        calendarSettings.month.monthNamesRus[i],
        calendarSettings.month.textColor,
        calendarSettings.month.fontSize,
        calendarSettings.month.fontFamily,
        monthPositionXY.x + i*450,
        monthPositionXY.y
        );

      
    } else {
     var monthFolder = monthsFolder.layerSets.add();
     monthFolder.name = calendarSettings.month.monthNamesEng[i];

     DrawSimpleText(
      monthFolder,
      calendarSettings.month.monthNamesEng[i],
      calendarSettings.month.textColor,
      calendarSettings.month.fontSize,
      calendarSettings.month.fontFamily,
      monthPositionXY.x + i*450,
      monthPositionXY.y
      );
   }

    /*====================================================
    Рисуем название дней недели
    ====================================================*/
    var  dayNamesFolder = monthFolder.layerSets.add();
    dayNamesFolder.name = "Название дней недели";

    if (calendarSettings.calendar.language == "RUS") {
      for (var dn = 0; dn < 7; dn++) {
        DrawSimpleText(
          dayNamesFolder,
          calendarSettings.day.textContent.titlesShortArrayRus[dn],
          calendarSettings.day.textContent.textColor,
          calendarSettings.day.fontSize,
          calendarSettings.document.fontFamily,
          monthPositionXY.x - (monthPositionXY.x / 2 - 20) + (calendarSettings.day.textContent.margin.left + calendarSettings.day.textContent.fontSize / 2) * dn + i*450,
          monthPositionXY.y + calendarSettings.day.textContent.margin.top
          );
      }
    } else {
      for (var dn = 0; dn < 7; dn++) {
        DrawSimpleText(
          dayNamesFolder,
          calendarSettings.day.textContent.titlesShortArrayEng[dn],
          calendarSettings.day.textContent.textColor,
          calendarSettings.day.fontSize,
          calendarSettings.document.fontFamily,
          monthPositionXY.x - (monthPositionXY.x / 2 - 20) + (calendarSettings.day.textContent.margin.left + calendarSettings.day.textContent.fontSize / 2) * dn + i*450,
          monthPositionXY.y + calendarSettings.day.textContent.margin.top
          );
      }
      
      
    }

    /*====================================================
    Рисуем название дней (числа)
    ====================================================*/
    var date = new Date(calendarSettings.calendar.year, i);
    var firstDay = date.getDay();

    if (firstDay == 0) {
      firstDay = 6;
    } else {
      firstDay--;
    }


    /*====================================================
    Определяем количество дней в месяце
    ====================================================*/
    var monthSize = GetDaysInMonth(2016, i + 1);

    var daysFolder = monthFolder.layerSets.add();
    daysFolder.name = "Дни";

    var numberOfDate = 1;
    var e = firstDay;
    var offset = monthPositionXY.y + calendarSettings.day.fontSize + 20 + calendarSettings.day.margin.top / 2;

    while (numberOfDate <= monthSize) {
      offset += (calendarSettings.day.fontSize + calendarSettings.day.margin.top);
      for (; e < 7; numberOfDate++, e++) {
        if (numberOfDate > monthSize) {
          continue;
        }

        if (e == 6 || e == 5) {
          var dayColor = calendarSettings.day.holiday.textColor;
        } else {
          var dayColor = calendarSettings.day.workday.textColor;
        }

        DrawSimpleText(
          daysFolder,
          numberOfDate,
          dayColor,
          calendarSettings.day.fontSize,
          calendarSettings.document.fontFamily,
          monthPositionXY.x - (monthPositionXY.x / 2 - 20) + (calendarSettings.day.textContent.margin.left + calendarSettings.day.textContent.fontSize / 2) * e + i*450,
          offset
          );

      }
      e = 0;
      if (calendarSettings.document.waitForRedraw == "1") {
        WaitForRedraw();
      }
    }

    
  } else {

    var alignx = 6;
    /*====================================================
    Рисуем вторые 6 месяцев
    ====================================================*/
    
    var monthPositionXY = { 
      x: 175, 
      y: (calendarSettings.calendar.fontSize + 1050)
    };

    var monthFolder = monthsFolder.layerSets.add();
    monthFolder.name = calendarSettings.month.monthNamesRus[i];

    DrawSimpleText(
      monthFolder,
      calendarSettings.month.monthNamesRus[i],
      calendarSettings.month.textColor,
      calendarSettings.month.fontSize,
      calendarSettings.month.fontFamily,
      monthPositionXY.x + (i-alignx)*450,
      monthPositionXY.y
      );


    /*====================================================
    Рисуем название дней недели
    ====================================================*/
    var  dayNamesFolder = monthFolder.layerSets.add();
    dayNamesFolder.name = "Название дней недели"

    for (var dn = 0; dn < 7; dn++) {
      DrawSimpleText(
        dayNamesFolder,
        calendarSettings.day.textContent.titlesShortArrayRus[dn],
        calendarSettings.day.textContent.textColor,
        calendarSettings.day.fontSize,
        calendarSettings.document.fontFamily,
        monthPositionXY.x - (monthPositionXY.x / 2 - 20) + (calendarSettings.day.textContent.margin.left + calendarSettings.day.textContent.fontSize / 2) * dn + (i-alignx)*450,
        monthPositionXY.y + calendarSettings.day.textContent.margin.top
        );
    }


    /*====================================================
    Рисуем название дней (числа)
    ====================================================*/
    var date = new Date(calendarSettings.calendar.year, i);
    var firstDay = date.getDay();

    if (firstDay == 0) {
      firstDay = 6;
    } else {
      firstDay--;
    }


    /*====================================================
    Определяем количество дней в месяце
    ====================================================*/
    var monthSize = GetDaysInMonth(2016, i + 1);

    var daysFolder = monthFolder.layerSets.add();
    daysFolder.name = "Дни";

    var numberOfDate = 1;
    var e = firstDay;
    var offset = monthPositionXY.y + calendarSettings.day.fontSize + 20 + calendarSettings.day.margin.top / 2;

    while (numberOfDate <= monthSize) {
      offset += (calendarSettings.day.fontSize + calendarSettings.day.margin.top);
      for (; e < 7; numberOfDate++, e++) {
        if (numberOfDate > monthSize) {
          continue;
        }

        if (e == 6 || e == 5) {
          var dayColor = calendarSettings.day.holiday.textColor;
        } else {
          var dayColor = calendarSettings.day.workday.textColor;
        }

        DrawSimpleText(
          daysFolder,
          numberOfDate,
          dayColor,
          calendarSettings.day.fontSize,
          calendarSettings.document.fontFamily,
          monthPositionXY.x - (monthPositionXY.x / 2 - 20) + (calendarSettings.day.textContent.margin.left + calendarSettings.day.textContent.fontSize / 2) * e + (i-alignx)*450,
          offset
          );
      }
      e = 0;
      if (calendarSettings.document.waitForRedraw == "1") {
        WaitForRedraw();
      }
    }

    alignx++;
  }

}


alert("Выполнение скрипта закончилось!");


/*====================================================
Функция, которая возвращает количество дней в месяце и
году.
====================================================*/
function GetDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

/*====================================================
Функция, которая создает и возвращает текстовый слой
====================================================*/
function NewTextLayer(parent) {
  var textLayerRef = parent.artLayers.add();
  textLayerRef.kind = LayerKind.TEXT;

  return textLayerRef;
}

/*====================================================
Функция, которая устанавливает изображение на фон до-
кумента
====================================================*/
function SetBackgroundImage(url) {
  var width = calendarSettings.document.dimensions.width;
  var height = calendarSettings.document.dimensions.height;
  var imageDoc = open(File(url));

  app.activeDocument = imageDoc;
  imageDoc.resizeImage(width, height);
  imageDoc.activeLayer.copy();
  app.activeDocument = docRef;

  var selectRegion = Array(Array(0, 0), Array(width, 0), Array(width, height), Array(0, height));

  docRef.selection.select(selectRegion);
  docRef.paste(true);
  imageDoc.close(SaveOptions.DONOTSAVECHANGES);
}


/*====================================================
Функция, которая позволяет нарисовать текст. Принимает
6 параметров:

  parent - родительский слой
  content - содержание текста
  colors - передаем сюда объект из 3 цветов
  size - размер шрифта
  fontName - название шрифта
  positionX - позиция по X
  positionY - поизиция по Y
  ====================================================*/
  function DrawSimpleText(parent, content, colors, size, fontName, positionX, positionY) {
    var textLayerRef = parent.artLayers.add();
    textLayerRef.kind = LayerKind.TEXT;

    /* Настройка цвета текста */
    var textColor = new SolidColor();
    textColor.rgb.red = colors.red;
    textColor.rgb.green = colors.green;
    textColor.rgb.blue = colors.blue;

    var textRef = textLayerRef.textItem;
    textRef.contents = content;
    textRef.color = textColor;
    textRef.size = size;
    textRef.font = fontName;
    textRef.position = new Array(positionX, positionY);

  }

/*====================================================
Функция, которая позволяет отслеживать лайв выполнение
скрипта и прорисовку элементов
====================================================*/
function WaitForRedraw() {
  var eventWait = charIDToTypeID("Wait")
  var enumRedrawComplete = charIDToTypeID("RdCm")
  var typeState = charIDToTypeID("Stte")
  var keyState = charIDToTypeID("Stte")
  var desc = new ActionDescriptor()
  desc.putEnumerated(keyState, typeState, enumRedrawComplete)
  executeAction(eventWait, desc, DialogModes.NO)
}


/*====================================================
Функция выбора языка в главном меню
====================================================*/
function initPromtToChooseLanguage() {
  var mainLanguage = prompt("Выберите язык (RUS) | Choose your language (ENG)", "RUS");
  return mainLanguage;
}


/*====================================================
Функция, которая позволяет нарисовать линию
====================================================*/



/*====================================================
Восстановление базовых настроек документа
====================================================*/
app.preferences.rulerUnits = startRulerUnits
app.preferences.typeUnits = startTypeUnits
app.displayDialogs = startDisplayDialogs