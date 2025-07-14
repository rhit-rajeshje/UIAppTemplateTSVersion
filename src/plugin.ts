penpot.ui.open("Penpot plugin starter template", `?theme=${penpot.theme}`);


penpot.ui.onMessage<string>((message) => {
  if (message.includes("create")) {
     
    var widthIphone13 = 379.5;     //changes these numbers should adjust the rest of the icons to the proper scalling //379.5
    var heightIphone13 = 777;      //777
    var cameraChoice = 1;

    var boardColor= "#ffffff";
    var iconColor = "#000000";

    var battColor1 = "#d8d8d8";
    var battColor2 = "#d8d8d8";

    if(message.includes("Dark")){
      boardColor= "#000000";
      iconColor = "#ffffff";
      battColor1 = "#636363";
      battColor2 = "#ffffff";
    }
    else{
      boardColor= "#ffffff";
      iconColor = "#000000";
      battColor1 = "#d8d8d8";
      battColor2 = "#d8d8d8";
    }
    
    if(message.includes("Version1I")){
      widthIphone13 = 379.5; // Width: 2.53
      heightIphone13 = 777; // Height: 5.18 --> IPhone 13 mini
      cameraChoice = 1;
    }
    else if(message.includes("Version2I")){
      widthIphone13 = 423; //Width 2.82
      heightIphone13 = 867; //Height: 5.78 --> IPhone 13
      cameraChoice = 1;
    }
    else if(message.includes("Version3I")){
      widthIphone13 = 460.5; //Width 3.07
      heightIphone13 = 949.5; //Height: 6.33 --> IPhone 13 pro max
      cameraChoice = 1;
    }
    else if(message.includes("Version4I")){
      widthIphone13 = 423; //Width 2.82
      heightIphone13 = 871.5; //Height: 5.81 --> IPhone 15
      cameraChoice = 2;
    }
      else if(message.includes("Version5I")){
      widthIphone13 = 421.5; //Width 2.81
      heightIphone13 = 883.5; //Height: 5.89 --> IPhone 16 pro
      cameraChoice = 2;
    }
    else if(message.includes("Version6I")){
      widthIphone13 = 453; //Width 3.02
      heightIphone13 = 943.5; //Height: 6.29 --> IPhone 15 pro max
      cameraChoice = 2;
    }
    else if(message.includes("Version7I")){
      widthIphone13 = 459; //Width 3.06
      heightIphone13 = 963; //Height: 6.42 --> IPhone 16 pro max
      cameraChoice = 2;
    }
    
    //Behind Board
     const shape3=penpot.createRectangle();
    shape3.name= "Rim";
    shape3.resize(widthIphone13/.949,heightIphone13/.97); 
    shape3.borderRadius = 56;
     shape3.x = penpot.viewport.center.x-widthIphone13/37.95;
     shape3.y = penpot.viewport.center.y-heightIphone13/77.7;
    shape3.fills = [{fillColor:"#1c1c1d"}];

 

    //Board
     const shape=penpot.createRectangle();
    shape.name = "Main Screen"; 
    shape.resize(widthIphone13,heightIphone13); // Dimensions of the IPhone 13 mini - 2.53 x 5.18 scaled by 150 
    shape.borderRadius = 56;
     shape.x = penpot.viewport.center.x;
     shape.y = penpot.viewport.center.y;
    shape.fills = [{fillColor:boardColor}];
    //penpot.selection = [shape];

    //  //Board (Android)
    // const shapeA=penpot.createRectangle();
    // shapeA.name = "Main Screen";
    // shapeA.resize(417,867); // Dimensions of the Samsung Galaxy - 2.78 x 5.78 scaled by 150
    // shapeA.borderRadius = 56;
    // shapeA.x = penpot.viewport.center.x;
    // shapeA.y = penpot.viewport.center.y;
    // shapeA.fills = [{fillColor:boardColor}];
    // //penpot.selection = [shape];

    //Camera
    const camera= penpot.createRectangle();
    camera.name= "Camera";
    if(cameraChoice == 1){
      camera.resize(widthIphone13/1.93,heightIphone13/17.266); 
      camera.borderRadius = 15;
      camera.x = penpot.viewport.center.x+widthIphone13/4.28;
      camera.y = penpot.viewport.center.y-heightIphone13/77.7;
      camera.fills = [{fillColor:"#1c1c1d"}];
    }
    else if(cameraChoice == 2){
      camera.resize(widthIphone13/2.59,heightIphone13/23.5); 
      camera.borderRadius = 90;
      camera.x = penpot.viewport.center.x+widthIphone13/3.3;
      camera.y = penpot.viewport.center.y+heightIphone13/103.6;
      camera.fills = [{fillColor:"#1c1c1d"}]; }

    //White Bar (IPhone)
    const shape2=penpot.createRectangle();
    shape2.name = "Home Bar";
    shape2.resize(widthIphone13/2.53,heightIphone13/51.8);
    shape2.borderRadius = 56;
    shape2.x = penpot.viewport.center.x+widthIphone13/3;
    shape2.y = penpot.viewport.center.y+heightIphone13/1.05;
    shape2.fills = [{fillColor:iconColor}];
    //penpot.selection = [shape2];

    //Home Bar (Android)
    const line1 = penpot.createRectangle();
    line1.resize(8.5,40);
    line1.opacity = 20;
    line1.x = penpot.viewport.center.x+75;
    line1.y = penpot.viewport.center.y+720;
    line1.fills = [{fillOpacity: .9, fillColor: "#d5d5d6"}];

    const line2 = penpot.createRectangle();
    line2.resize(8.5,40);
    line2.x = penpot.viewport.center.x+90;
    line2.y = penpot.viewport.center.y+720;
    line2.fills = [{fillOpacity: .9, fillColor: "#d5d5d6"}];

    const line3 = penpot.createRectangle();
    line3.resize(8.5,40);
    line3.x = penpot.viewport.center.x+105;
    line3.y = penpot.viewport.center.y+720;
    line3.fills = [{fillOpacity: .9, fillColor: "#d5d5d6"}];
    penpot.selection = [line1,line2,line3];
    const lineGroup = penpot.selection;
    const linegroup = penpot.group(lineGroup);
    if(linegroup){
      linegroup.name = "Lines";
    }

    const square = penpot.createRectangle();
    square.resize(40,40);
    square.x = penpot.viewport.center.x+180;
    square.y = penpot.viewport.center.y+720;
    square.borderRadius = 15;
    square.fills = [{fillOpacity: .9, fillColor: "#d5d5d6"}];

    const square2 = penpot.createRectangle();
    square2.resize(25,25);
    square2.x = penpot.viewport.center.x+180+7.5;
    square2.y = penpot.viewport.center.y+720+7.5;
    square2.borderRadius = 8;
    square2.fills = [{fillOpacity: 1, fillColor: "#ffffff"}];
    penpot.selection = [square,square2];
    const squareGroup = penpot.selection; 
    const squaregroup = penpot.group(squareGroup);
    if(squaregroup){
      squaregroup.name = "Square";
    }

    const arrow1 = penpot.createRectangle();
    arrow1.resize(7.5,30);
    arrow1.x = penpot.viewport.center.x + 295;
    arrow1.y = penpot.viewport.center.y + 720;
    arrow1.rotation = 40;
    arrow1.fills = [{fillOpacity: .9, fillColor: "#d5d5d6"}];

    const arrow2 = penpot.createRectangle();
    arrow2.resize(7.5,30);
    arrow2.x = penpot.viewport.center.x + 295;
    arrow2.y = penpot.viewport.center.y + 738;
    arrow2.fills = [{fillOpacity: .9, fillColor: "#d5d5d6"}];
    arrow2.rotation = -40;
    penpot.selection = [arrow1,arrow2];
    const arrowGroup = penpot.selection;
    const arrowgroup = penpot.group(arrowGroup);
    if(arrowgroup){
      arrowgroup.name = "Arrow";
    }

    if(linegroup && squaregroup && arrowgroup){
      penpot.selection = [linegroup,squaregroup,arrowgroup ];
      const homeBar = penpot.selection;
      const homebar = penpot.group(homeBar);
      if(homebar){
        homebar.name = "Home Bar";
      }
    }


    //Time 
    const text = penpot.createText("9:25");
    if(text){
      text.name= "Time";
      text.x = penpot.viewport.center.x+widthIphone13/10.8; 
      text.y = penpot.viewport.center.y+heightIphone13/51.8;
      text.resize(widthIphone13/6.9,heightIphone13/11.95); //(55,65)
      var font = widthIphone13/23.71;
      text.fontSize = (font as unknown as string); //"16"
      text.fills = [{fillColor:iconColor}];
      text.fontFamily = "Roboto";
      //penpot.selection = [text];
    }

    //Bars
    const rect1=penpot.createRectangle();
    rect1.resize(widthIphone13/75.9,heightIphone13/77.7); // (5,10)
    rect1.borderRadius = 56;
    //rect1.x = penpot.viewport.center.x+270;
    //rect1.y = penpot.viewport.center.y+35;
    rect1.fills = [{fillColor:iconColor}];
    //penpot.selection = [rect1];

    const rect2=penpot.createRectangle();
    rect2.resize(widthIphone13/75.9,heightIphone13/59.7692); //(5,13)
    rect2.borderRadius = 56;
    //rect2.x = penpot.viewport.center.x+277;
    //rect2.y = penpot.viewport.center.y+32;
    rect2.fills = [{fillColor:iconColor}];
    //penpot.selection = [rect2];

    const rect3=penpot.createRectangle();
    rect3.resize(widthIphone13/75.9,heightIphone13/48.56); //(5,16)
    rect3.borderRadius = 56;
    //rect3.x = penpot.viewport.center.x+284;
    //rect3.y = penpot.viewport.center.y+29;
    rect3.fills = [{fillColor:iconColor}];
    //penpot.selection = [rect3];

    const rect4=penpot.createRectangle();
    rect4.resize(widthIphone13/75.9,heightIphone13/40.89); //(5,19)
    rect4.borderRadius = 56;
    //rect4.x = penpot.viewport.center.x+291;
    //rect4.y = penpot.viewport.center.y+26;
    rect4.fills = [{fillColor:iconColor}];
    penpot.selection = [rect1,rect2,rect3,rect4];
    const barsGroup = penpot.selection;
    const bargroup = penpot.group(barsGroup);
    if(bargroup){
      bargroup.name = "Bars";
      bargroup.x= penpot.viewport.center.x+widthIphone13/1.44;
      bargroup.y= penpot.viewport.center.y+heightIphone13/31;
      rect1.x = bargroup.x;
      rect1.y = bargroup.y+(heightIphone13/259)*3;
      rect2.x = bargroup.x+(widthIphone13/54.21);
      rect2.y = bargroup.y+(heightIphone13/259)*2
      rect3.x = bargroup.x+(widthIphone13/54.21)*2;
      rect3.y = bargroup.y+(heightIphone13/259);
      rect4.x = bargroup.x+(widthIphone13/54.21)*3;
      rect4.y = bargroup.y; 
    }

    //5G
    const text2 = penpot.createText("5G");
    if(text2){
      //text2.x = penpot.viewport.center.x+301;
      //text2.y = penpot.viewport.center.y+30;
      text2.name= "5G";
      text2.x= penpot.viewport.center.x+widthIphone13/1.30 ;
      text2.y= penpot.viewport.center.y+heightIphone13/33; 
      text2.resize(widthIphone13/6.9,heightIphone13/11.95); //(55,65)
      text2.fills = [{fillColor:iconColor}];
      text2.fontFamily = "Roboto";
      var font = widthIphone13/23.71
      text2.fontSize = (font as unknown as string); //"16"
      //penpot.selection = [text2];
    }

    //Battery
    const batt1=penpot.createRectangle();
    batt1.resize(widthIphone13/75.9,heightIphone13/111); //7 but scaled by the size of the change in width and height (5,7)
    batt1.borderRadius = 2;
    //batt1.x = penpot.viewport.center.x+362;
    //batt1.y = penpot.viewport.center.y+31;
    batt1.fills = [{fillColor:battColor2}];
    //penpot.selection = [batt1];

    var batteryWidth=widthIphone13/9.73; //39
    var batteryHeight=heightIphone13/38.85; //20
    const batt3=penpot.createRectangle();
    batt3.resize(batteryWidth,batteryHeight);
    batt3.borderRadius = 5;
    //batt3.x = penpot.viewport.center.x+325;
    //batt3.y = penpot.viewport.center.y+25;
    batt3.fills = [{fillColor:battColor1}];
    //penpot.selection = [batt3];

    const batt2=penpot.createRectangle();
    batt2.resize(batteryWidth-4,batteryHeight-4);
    batt2.borderRadius = 2;
    //batt2.x = penpot.viewport.center.x+327;
    //batt2.y = penpot.viewport.center.y+27;
    batt2.fills = [{fillColor:"#ffffff"}];

    const batt4=penpot.createRectangle();
    batt4.resize(batteryWidth-8,batteryHeight-8);
    batt4.borderRadius = 2;
    //batt2.x = penpot.viewport.center.x+327;
    //batt2.y = penpot.viewport.center.y+27;
    batt4.fills = [{fillColor:iconColor}];

    penpot.selection = [batt1,batt3, batt2, batt4];
    const BattGroup=penpot.selection;
    const battgroup = penpot.group(BattGroup);
    if(battgroup){
      battgroup.name = "Battery";
      battgroup.x= penpot.viewport.center.x+widthIphone13/1.18;
      battgroup.y= penpot.viewport.center.y+heightIphone13/31;
      batt2.x = battgroup.x+2;
      batt2.y = battgroup.y+2;
      batt4.x = battgroup.x+4;
      batt4.y = battgroup.y+4;
      batt1.x = battgroup.x+batteryWidth-2.5;
      batt1.y = battgroup.y+batteryHeight/3.5;
    }

    if(text2 && battgroup && bargroup){
      penpot.selection = [battgroup,bargroup, text2];
      const sb = penpot.selection;
      const sb2 = penpot.group(sb);
      if(sb2){
        sb2.name="Status Bar";
        sb2.resize(widthIphone13/5.34,heightIphone13/15.54); // (80,50)
        sb2.x = penpot.viewport.center.x + widthIphone13/1.313;
        sb2.y = penpot.viewport.center.y + heightIphone13/51.8;
      }
      
            if(text && sb2){
          penpot.selection = [shape,shape2, camera, shape3, text, sb2];
          const PhoneGroup = penpot.selection;
          const phonegroup = penpot.group(PhoneGroup);
          if(phonegroup){
            phonegroup.name= "IPhone";
          }
        }
    }
    
  }
}); 

// Update the theme in the iframe
penpot.on("themechange", (theme) => {
  penpot.ui.sendMessage({
    source: "penpot",
    type: "themechange",
    theme,
  });
});