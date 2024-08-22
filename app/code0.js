gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDpixelObjects1= [];
gdjs.Untitled_32sceneCode.GDpixelObjects2= [];
gdjs.Untitled_32sceneCode.GDinfObjects1= [];
gdjs.Untitled_32sceneCode.GDinfObjects2= [];
gdjs.Untitled_32sceneCode.GDinf2Objects1= [];
gdjs.Untitled_32sceneCode.GDinf2Objects2= [];
gdjs.Untitled_32sceneCode.GDinf3Objects1= [];
gdjs.Untitled_32sceneCode.GDinf3Objects2= [];
gdjs.Untitled_32sceneCode.GDinf4Objects1= [];
gdjs.Untitled_32sceneCode.GDinf4Objects2= [];
gdjs.Untitled_32sceneCode.GDppObjects1= [];
gdjs.Untitled_32sceneCode.GDppObjects2= [];


gdjs.Untitled_32sceneCode.mapOfEmptyGDpixelObjects = Hashtable.newFrom({"pixel": []});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpixelObjects1Objects = Hashtable.newFrom({"pixel": gdjs.Untitled_32sceneCode.GDpixelObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpixelObjects1Objects = Hashtable.newFrom({"pixel": gdjs.Untitled_32sceneCode.GDpixelObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpixelObjects1Objects = Hashtable.newFrom({"pixel": gdjs.Untitled_32sceneCode.GDpixelObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpixelObjects1Objects = Hashtable.newFrom({"pixel": gdjs.Untitled_32sceneCode.GDpixelObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpixelObjects1Objects = Hashtable.newFrom({"pixel": gdjs.Untitled_32sceneCode.GDpixelObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpixelObjects1Objects = Hashtable.newFrom({"pixel": gdjs.Untitled_32sceneCode.GDpixelObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpixelObjects1Objects = Hashtable.newFrom({"pixel": gdjs.Untitled_32sceneCode.GDpixelObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpixelObjects1Objects = Hashtable.newFrom({"pixel": gdjs.Untitled_32sceneCode.GDpixelObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpixelObjects1Objects = Hashtable.newFrom({"pixel": gdjs.Untitled_32sceneCode.GDpixelObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpixelObjects1Objects = Hashtable.newFrom({"pixel": gdjs.Untitled_32sceneCode.GDpixelObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpixelObjects1Objects = Hashtable.newFrom({"pixel": gdjs.Untitled_32sceneCode.GDpixelObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpixelObjects1Objects = Hashtable.newFrom({"pixel": gdjs.Untitled_32sceneCode.GDpixelObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpixelObjects1Objects = Hashtable.newFrom({"pixel": gdjs.Untitled_32sceneCode.GDpixelObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpixelObjects1Objects = Hashtable.newFrom({"pixel": gdjs.Untitled_32sceneCode.GDpixelObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpixelObjects1Objects = Hashtable.newFrom({"pixel": gdjs.Untitled_32sceneCode.GDpixelObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpixelObjects1Objects = Hashtable.newFrom({"pixel": gdjs.Untitled_32sceneCode.GDpixelObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9580316);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0));
}}

}


};gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("pp"), gdjs.Untitled_32sceneCode.GDppObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDppObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDppObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDppObjects1[k] = gdjs.Untitled_32sceneCode.GDppObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDppObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9581388);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0));
}}

}


};gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("inf"), gdjs.Untitled_32sceneCode.GDinfObjects1);
gdjs.copyArray(runtimeScene.getObjects("inf2"), gdjs.Untitled_32sceneCode.GDinf2Objects1);
gdjs.copyArray(runtimeScene.getObjects("inf4"), gdjs.Untitled_32sceneCode.GDinf4Objects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.03, "", 0);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDinfObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDinfObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfEmptyGDpixelObjects)));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDinf2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDinf2Objects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtsExt__FPS__FPS.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDinf4Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDinf4Objects1[i].getBehavior("Text").setText(gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS.func(runtimeScene, gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, ""), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), false, false);
if (isConditionTrue_0) {
gdjs.Untitled_32sceneCode.GDpixelObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpixelObjects1Objects, gdjs.randomFloatInRange(-(10000), 10000), gdjs.randomFloatInRange(-(10000), 10000), "");
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDpixelObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDpixelObjects1[i].setColor(gdjs.evtsExt__RandomColor__CreateRandomColor.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDpixelObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDpixelObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDpixelObjects1[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpixelObjects1Objects) + 1);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpixelObjects1Objects, gdjs.randomFloatInRange(-(10000), 10000), gdjs.randomFloatInRange(-(10000), 10000), "");
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDpixelObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDpixelObjects1[i].setColor(gdjs.evtsExt__RandomColor__CreateRandomColor.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDpixelObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDpixelObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDpixelObjects1[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpixelObjects1Objects) + 1);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpixelObjects1Objects, gdjs.randomFloatInRange(-(10000), 10000), gdjs.randomFloatInRange(-(10000), 10000), "");
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDpixelObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDpixelObjects1[i].setColor(gdjs.evtsExt__RandomColor__CreateRandomColor.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDpixelObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDpixelObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDpixelObjects1[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpixelObjects1Objects) + 1);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpixelObjects1Objects, gdjs.randomFloatInRange(-(10000), 10000), gdjs.randomFloatInRange(-(10000), 10000), "");
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDpixelObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDpixelObjects1[i].setColor(gdjs.evtsExt__RandomColor__CreateRandomColor.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDpixelObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDpixelObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDpixelObjects1[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpixelObjects1Objects) + 1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), false, false);
if (isConditionTrue_0) {
gdjs.Untitled_32sceneCode.GDpixelObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpixelObjects1Objects, gdjs.randomFloatInRange(-(10000), 10000), gdjs.randomFloatInRange(-(10000), 10000), "");
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDpixelObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDpixelObjects1[i].setColor(gdjs.evtsExt__RandomColor__CreateRandomColor.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDpixelObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDpixelObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDpixelObjects1[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpixelObjects1Objects) + 1);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpixelObjects1Objects, gdjs.randomFloatInRange(-(10000), 10000), gdjs.randomFloatInRange(-(10000), 10000), "");
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDpixelObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDpixelObjects1[i].setColor(gdjs.evtsExt__RandomColor__CreateRandomColor.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDpixelObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDpixelObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDpixelObjects1[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpixelObjects1Objects) + 1);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpixelObjects1Objects, gdjs.randomFloatInRange(-(10000), 10000), gdjs.randomFloatInRange(-(10000), 10000), "");
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDpixelObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDpixelObjects1[i].setColor(gdjs.evtsExt__RandomColor__CreateRandomColor.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDpixelObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDpixelObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDpixelObjects1[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpixelObjects1Objects) + 1);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpixelObjects1Objects, gdjs.randomFloatInRange(-(10000), 10000), gdjs.randomFloatInRange(-(10000), 10000), "");
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDpixelObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDpixelObjects1[i].setColor(gdjs.evtsExt__RandomColor__CreateRandomColor.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDpixelObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDpixelObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDpixelObjects1[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpixelObjects1Objects) + 1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), false, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("inf3"), gdjs.Untitled_32sceneCode.GDinf3Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDinf3Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDinf3Objects1[i].getBehavior("Text").setText("unpaused");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("inf3"), gdjs.Untitled_32sceneCode.GDinf3Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDinf3Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDinf3Objects1[i].getBehavior("Text").setText("paused");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), false, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDpixelObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDpixelObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDinfObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDinfObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDinf2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDinf2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDinf3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDinf3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDinf4Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDinf4Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDppObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDppObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
