(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{362:function(t,i,n){},363:function(t,i,n){},535:function(t,i,n){"use strict";var e=n(362);n.n(e).a},536:function(t,i,n){"use strict";var e=n(363);n.n(e).a},548:function(t,i,n){"use strict";n.r(i);n(167);var e=n(0),a={name:"timing-callbacks",watch:{},props:{target:{type:String,required:!0}},data:function(){return{abcjs:null,visualObj:null,timer:null,outputStream:"",qpm:100,extraMeasuresAtBeginning:0,lineEndAnticipation:500,beatSubdivisions:4}},mounted:function(){var t=this;e.a.nextTick((function(){t.abcjs=n(306),t.redraw()}))},methods:{redraw:function(){console.log("redraw")},startTiming:function(){var t=document.getElementById("abc").value;this.visualObj=this.abcjs.renderAbc("*",t)[0],console.log("startTiming",{qpm:this.qpm,extraMeasuresAtBeginning:this.extraMeasuresAtBeginning,lineEndAnticipation:this.lineEndAnticipation,beatSubdivisions:this.beatSubdivisions}),this.timer=new this.abcjs.TimingCallbacks(this.visualObj,{qpm:this.qpm,extraMeasuresAtBeginning:this.extraMeasuresAtBeginning,lineEndAnticipation:this.lineEndAnticipation,beatSubdivisions:this.beatSubdivisions,beatCallback:this.beatCallback,eventCallback:this.eventCallback,lineEndCallback:this.lineEndCallback}),this.timer.start(),this.outputStream=""},stopTiming:function(){this.timer.stop()},pauseTiming:function(){this.timer.pause()},resetTiming:function(){this.timer.reset(),this.outputStream=""},setProgress:function(){this.timer.setProgress(10),this.outputStream=""},beatCallback:function(t,i,n){this.outputStream+='<div class="beat-callback"><div class="header">BEAT CALLBACK</div>\n<div class="data">beatNumber = '.concat(t,", totalBeats = ").concat(i,", totalTime = ").concat(n,"</div>\n\t\t\t\t</div>")},eventCallback:function(t){delete t.elements,this.outputStream+='<div class="event-callback"><div class="header">EVENT CALLBACK</div>\n<div class="data">'.concat(JSON.stringify(t,null,"\t"),"</div>\n\t\t\t\t</div>")},lineEndCallback:function(t,i,n){this.outputStream+='<div class="line-end-callback"><div class="header">LINE END CALLBACK</div>\n<div class="data">'.concat(JSON.stringify(t,null,"\t"),'</div>\n<div class="data">').concat(JSON.stringify(i,null,"\t"),'</div>\n<div class="data">').concat(JSON.stringify(n,null,"\t"),"</div>\n\t\t\t\t</div>")}}},s=(n(535),n(536),n(43)),l=Object(s.a)(a,(function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"timing-callbacks"},[n("form",{on:{submit:function(i){return i.preventDefault(),t.startTiming(i)}}},[n("div",{staticClass:"language- my-code"},[n("div",[t._v("timer = new abcjs.TimingCallbacks(visualObj, {")]),t._v(" "),n("label",[n("span",[t._v("qpm: ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.qpm,expression:"qpm"}],attrs:{type:"number",min:"4",max:"300",step:"4"},domProps:{value:t.qpm},on:{input:function(i){i.target.composing||(t.qpm=i.target.value)}}}),t._v(",\n\t\t")]),t._v(" "),n("label",[n("span",[t._v("extraMeasuresAtBeginning: ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.extraMeasuresAtBeginning,expression:"extraMeasuresAtBeginning"}],attrs:{type:"number",min:"0",max:"4"},domProps:{value:t.extraMeasuresAtBeginning},on:{input:function(i){i.target.composing||(t.extraMeasuresAtBeginning=i.target.value)}}}),t._v(",\n\t\t")]),t._v(" "),n("label",[n("span",[t._v("lineEndAnticipation: ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.lineEndAnticipation,expression:"lineEndAnticipation"}],attrs:{type:"number",min:"0",max:"4000",step:"100"},domProps:{value:t.lineEndAnticipation},on:{input:function(i){i.target.composing||(t.lineEndAnticipation=i.target.value)}}}),t._v(",\n\t\t")]),t._v(" "),n("label",[n("span",[t._v("beatSubdivisions: ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.beatSubdivisions,expression:"beatSubdivisions"}],attrs:{type:"number",min:"1",max:"8"},domProps:{value:t.beatSubdivisions},on:{input:function(i){i.target.composing||(t.beatSubdivisions=i.target.value)}}}),t._v(",\n\t\t")]),t._v(" "),n("div"),t._v(" "),n("div",{staticClass:"label-indent"},[t._v("beatCallback: function() {...},")]),t._v(" "),n("div",{staticClass:"label-indent"},[t._v("eventCallback: function() {...},")]),t._v(" "),n("div",{staticClass:"label-indent"},[t._v("lineEndCallback: function() {...}")]),t._v(" "),n("div",[t._v("}")])]),t._v(" "),n("button",{attrs:{type:"submit"}},[t._v("Start()")])]),t._v(" "),n("button",{on:{click:t.stopTiming}},[t._v("Stop()")]),t._v(" "),n("button",{on:{click:t.pauseTiming}},[t._v("Pause()")]),t._v(" "),n("button",{on:{click:t.resetTiming}},[t._v("Reset()")]),t._v(" "),n("button",{on:{click:t.setProgress}},[t._v("Set Progress(10)")]),t._v(" "),n("div",[n("h3",[t._v("Output Stream:")]),t._v(" "),n("div",{staticClass:"output",domProps:{innerHTML:t._s(t.outputStream)}})])])}),[],!1,null,"3e754994",null);i.default=l.exports}}]);