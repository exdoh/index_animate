/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Rectangle',
            type:'rect',
            rect:['0px','0px','640px','1136px','auto','auto'],
            fill:["rgba(38,38,38,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'tan',
            type:'image',
            rect:['49px','435px','640px','1136px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"tan.png",'0px','0px']
         },
         {
            id:'sculpture_10',
            type:'image',
            rect:['29px','44px','640px','1136px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"sculpture_10.png",'0px','0px','100.7%','100.7%'],
            filter:[0,0,1,1,0,0,0,0,"rgba(0,0,0,0)",0,0,0]
         },
         {
            id:'dark_sculpture2',
            type:'image',
            rect:['5px','46px','649px','1145px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"dark_sculpture2.png",'0px','0px']
         },
         {
            id:'light2',
            type:'image',
            rect:['0px','31px','640px','1136px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"light2.png",'0px','0px'],
            filter:[0,0,1,1,0,0,0,0,"rgba(0,0,0,0)",0,0,0]
         },
         {
            id:'light',
            type:'image',
            rect:['14px','-177px','640px','1136px','auto','auto'],
            opacity:0.21425111376006,
            fill:["rgba(0,0,0,0)",im+"light.png",'0px','0px']
         },
         {
            id:'lamp',
            type:'image',
            rect:['63px','-121px','640px','1136px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"lamp.png",'0px','0px']
         },
         {
            id:'light_brian',
            type:'image',
            rect:['-47px','105px','640px','640px','auto','auto'],
            opacity:0,
            fill:["rgba(0,0,0,0)",im+"light_brian.png",'0px','0px']
         },
         {
            id:'brian',
            type:'image',
            rect:['-47px','105px','640px','640px','auto','auto'],
            opacity:0,
            fill:["rgba(0,0,0,0)",im+"brian.png",'0px','0px']
         },
         {
            id:'Rectangle2',
            type:'rect',
            rect:['1px','2px','640px','1136px','auto','auto'],
            fill:["rgba(0,0,0,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'index_logo',
            type:'image',
            rect:['7px','168px','640px','640px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"index_logo.png",'0px','0px']
         },
         {
            id:'nerver_stop_red2',
            type:'image',
            rect:['10px','257px','640px','640px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"nerver_stop_red.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "opacity", '0']
         ],
         "${_tan}": [
            ["style", "top", '435px'],
            ["style", "background-size", [99.9,99.9], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '49px'],
            ["subproperty", "filter.contrast", '1.36']
         ],
         "${_light}": [
            ["style", "top", '-177px'],
            ["subproperty", "filter.grayscale", '1'],
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "height", '1158px'],
            ["style", "opacity", '0.21425111376006'],
            ["style", "left", '14px']
         ],
         "${_nerver_stop_red2}": [
            ["style", "top", '257px'],
            ["style", "opacity", '0'],
            ["style", "left", '10px']
         ],
         "${_light2}": [
            ["style", "top", '31px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_light_brian}": [
            ["style", "top", '105px'],
            ["style", "opacity", '0'],
            ["style", "left", '-47px']
         ],
         "${_index_logo}": [
            ["style", "top", '168px'],
            ["style", "opacity", '0'],
            ["style", "left", '7px']
         ],
         "${_dark_sculpture2}": [
            ["style", "top", '46px'],
            ["style", "height", '1145px'],
            ["style", "opacity", '1'],
            ["style", "left", '5px'],
            ["style", "width", '649px']
         ],
         "${_lamp}": [
            ["style", "top", '-121px'],
            ["subproperty", "filter.contrast", '1.3703125'],
            ["style", "left", '63px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '1136px'],
            ["style", "width", '640px']
         ],
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["subproperty", "filter.contrast", '1.4139322916667'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(62,62,62,1)']
         ],
         "${_brian}": [
            ["style", "top", '105px'],
            ["style", "opacity", '0'],
            ["style", "left", '-47px']
         ],
         "${_sculpture_10}": [
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0)'],
            ["style", "opacity", '0'],
            ["style", "top", '44px'],
            ["style", "left", '29px'],
            ["style", "background-size", [100.7,100.7], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "clip", 0, {valueTemplate:'auto'} ],
            ["subproperty", "filter.sepia", '0']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 13500,
         autoPlay: true,
         labels: {
            "Label 1": 0
         },
         timeline: [
            { id: "eid68", tween: [ "style", "${_brian}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid73", tween: [ "style", "${_brian}", "opacity", '0.25369262695312', { fromValue: '0'}], position: 8000, duration: 1000 },
            { id: "eid70", tween: [ "style", "${_brian}", "opacity", '1', { fromValue: '0.253693'}], position: 9000, duration: 1000 },
            { id: "eid81", tween: [ "style", "${_brian}", "opacity", '0.19659461826086', { fromValue: '1'}], position: 10000, duration: 2628 },
            { id: "eid163", tween: [ "style", "${_light}", "opacity", '1', { fromValue: '0.21425111591815948'}], position: 1500, duration: 2500 },
            { id: "eid208", tween: [ "style", "${_light}", "opacity", '1', { fromValue: '1'}], position: 5983, duration: 0 },
            { id: "eid202", tween: [ "style", "${_light}", "opacity", '0.24964779713115', { fromValue: '1'}], position: 5983, duration: 17 },
            { id: "eid213", tween: [ "style", "${_light}", "opacity", '0.12759370149159', { fromValue: '0.24964779713115'}], position: 6000, duration: 0 },
            { id: "eid166", tween: [ "style", "${_dark_sculpture2}", "opacity", '0.51572105532787', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid168", tween: [ "style", "${_dark_sculpture2}", "opacity", '0', { fromValue: '0.5157210230827332'}], position: 2750, duration: 1250 },
            { id: "eid198", tween: [ "style", "${_dark_sculpture2}", "opacity", '0', { fromValue: '0'}], position: 5983, duration: 0 },
            { id: "eid197", tween: [ "style", "${_dark_sculpture2}", "opacity", '1', { fromValue: '0.000000'}], position: 5983, duration: 17 },
            { id: "eid201", tween: [ "style", "${_dark_sculpture2}", "opacity", '1', { fromValue: '1'}], position: 6000, duration: 0 },
            { id: "eid173", tween: [ "subproperty", "${_tan}", "filter.contrast", '1', { fromValue: '1.36'}], position: 2750, duration: 1250 },
            { id: "eid211", tween: [ "subproperty", "${_tan}", "filter.contrast", '1', { fromValue: '1'}], position: 5983, duration: 0 },
            { id: "eid189", tween: [ "subproperty", "${_tan}", "filter.contrast", '1.36', { fromValue: '1'}], position: 5983, duration: 17 },
            { id: "eid175", tween: [ "style", "${_light}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1827, duration: 0 },
            { id: "eid247", tween: [ "style", "${_light}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1827, duration: 0 },
            { id: "eid248", tween: [ "style", "${_light}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1827, duration: 0 },
            { id: "eid249", tween: [ "style", "${_light}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1827, duration: 0 },
            { id: "eid250", tween: [ "style", "${_light}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1827, duration: 0 },
            { id: "eid174", tween: [ "subproperty", "${_lamp}", "filter.contrast", '1', { fromValue: '1.3703125'}], position: 2750, duration: 1250 },
            { id: "eid210", tween: [ "subproperty", "${_lamp}", "filter.contrast", '1', { fromValue: '1'}], position: 5983, duration: 0 },
            { id: "eid209", tween: [ "subproperty", "${_lamp}", "filter.contrast", '1.36', { fromValue: '1'}], position: 5983, duration: 17 },
            { id: "eid153", tween: [ "subproperty", "${_Rectangle}", "filter.contrast", '1.4139322916667', { fromValue: '1.4139322916667'}], position: 0, duration: 0 },
            { id: "eid165", tween: [ "subproperty", "${_Rectangle}", "filter.contrast", '1', { fromValue: '1.4139322916667'}], position: 1500, duration: 2500 },
            { id: "eid188", tween: [ "subproperty", "${_Rectangle}", "filter.contrast", '1', { fromValue: '1'}], position: 5983, duration: 0 },
            { id: "eid187", tween: [ "subproperty", "${_Rectangle}", "filter.contrast", '1.41', { fromValue: '1'}], position: 5983, duration: 17 },
            { id: "eid104", tween: [ "style", "${_index_logo}", "opacity", '1', { fromValue: '0.000000'}], position: 12750, duration: 750 },
            { id: "eid145", tween: [ "style", "${_nerver_stop_red2}", "opacity", '1', { fromValue: '0.000000'}], position: 11250, duration: 250 },
            { id: "eid155", tween: [ "style", "${_sculpture_10}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid171", tween: [ "style", "${_sculpture_10}", "opacity", '0.2159643954918', { fromValue: '0'}], position: 2750, duration: 250 },
            { id: "eid172", tween: [ "style", "${_sculpture_10}", "opacity", '1', { fromValue: '0.215964'}], position: 3000, duration: 1000 },
            { id: "eid196", tween: [ "style", "${_sculpture_10}", "opacity", '1', { fromValue: '1'}], position: 5983, duration: 0 },
            { id: "eid195", tween: [ "style", "${_sculpture_10}", "opacity", '0', { fromValue: '1'}], position: 5983, duration: 17 },
            { id: "eid200", tween: [ "style", "${_sculpture_10}", "opacity", '0', { fromValue: '0'}], position: 6000, duration: 0 },
            { id: "eid146", tween: [ "style", "${_nerver_stop_red2}", "top", '420px', { fromValue: '257px'}], position: 11750, duration: 1000 },
            { id: "eid176", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(62,62,62,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(62,62,62,1)'}], position: 4000, duration: 0 },
            { id: "eid69", tween: [ "style", "${_light_brian}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid74", tween: [ "style", "${_light_brian}", "opacity", '0.24349975585938', { fromValue: '0'}], position: 7000, duration: 1500 },
            { id: "eid71", tween: [ "style", "${_light_brian}", "opacity", '1', { fromValue: '0.2434999942779541'}], position: 8500, duration: 500 },
            { id: "eid82", tween: [ "style", "${_light_brian}", "opacity", '0.42587286233902', { fromValue: '1'}], position: 9000, duration: 3628 },
            { id: "eid164", tween: [ "subproperty", "${_light}", "filter.grayscale", '0', { fromValue: '1'}], position: 1500, duration: 0 },
            { id: "eid207", tween: [ "subproperty", "${_light}", "filter.grayscale", '0', { fromValue: '0'}], position: 4000, duration: 0 },
            { id: "eid204", tween: [ "subproperty", "${_light}", "filter.grayscale", '1', { fromValue: '0'}], position: 5983, duration: 17 },
            { id: "eid160", tween: [ "style", "${_light2}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 2500 },
            { id: "eid217", tween: [ "style", "${_light2}", "opacity", '1', { fromValue: '1'}], position: 5983, duration: 0 },
            { id: "eid216", tween: [ "style", "${_light2}", "opacity", '0', { fromValue: '1'}], position: 5983, duration: 17 },
            { id: "eid78", tween: [ "style", "${_Rectangle2}", "opacity", '0.34136962890625', { fromValue: '0.000000'}], position: 11000, duration: 500 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-11154789");
