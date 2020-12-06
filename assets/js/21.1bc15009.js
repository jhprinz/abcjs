(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{553:function(t,a,s){"use strict";s.r(a);var e=s(43),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"deprecated-api-calls"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deprecated-api-calls"}},[t._v("#")]),t._v(" Deprecated API Calls")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Deprecation")]),t._v(" "),s("p",[t._v("The following calls still work, but they have been superseded by other methods. If you are writing a new app, avoid these because they might go away sometime in the future.")])]),t._v(" "),s("h2",{attrs:{id:"parseonly"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parseonly"}},[t._v("#")]),t._v(" parseOnly")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("tuneObjectArray "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ABCJS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseOnly")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tunebookString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Parses all the tunes in the tunebookString and returns an array of them parsed structure.")]),t._v(" "),s("p",[t._v('This has turned out to not be that useful since you can do the same effect by passing "*" in as the element and the returned value will have a lot more information.')]),t._v(" "),s("h2",{attrs:{id:"animation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#animation"}},[t._v("#")]),t._v(" Animation")]),t._v(" "),s("p",[t._v("This animation has been replaced by "),s("code",[t._v("TimingCallbacks")]),t._v(", which is much more flexible.")]),t._v(" "),s("h3",{attrs:{id:"startanimation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#startanimation"}},[t._v("#")]),t._v(" startAnimation")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ABCJS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("startAnimation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("outputElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tuneObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" animationParams"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Puts an animated cursor on the rendered music. Note: this is deprecated in favor of "),s("code",[t._v("TimingCallbacks")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"stopanimation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stopanimation"}},[t._v("#")]),t._v(" stopAnimation")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ABCJS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stopAnimation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Stops the animation that was started with "),s("code",[t._v("startAnimation")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"pauseanimation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pauseanimation"}},[t._v("#")]),t._v(" pauseAnimation")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ABCJS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pauseAnimation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pause"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Pauses/resumes the animation that was started with "),s("code",[t._v("startAnimation")]),t._v(". Pass "),s("code",[t._v("true")]),t._v(" or "),s("code",[t._v("false")]),t._v(" to pause or resume.")]),t._v(" "),s("h2",{attrs:{id:"midi-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#midi-js"}},[t._v("#")]),t._v(" Midi.js")]),t._v(" "),s("p",[t._v("This has been replaced by the new audio interface. Hopefully the new interface will work on more systems, be faster, and require fewer resources.")]),t._v(" "),s("h3",{attrs:{id:"devicesupportsmidi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#devicesupportsmidi"}},[t._v("#")]),t._v(" deviceSupportsMidi")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ABCJS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("midi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("deviceSupportsMidi")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Returns true if the device and browser is capable of playing MIDI.")]),t._v(" "),s("h3",{attrs:{id:"setsoundfont"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setsoundfont"}},[t._v("#")]),t._v(" setSoundFont")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ABCJS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("midi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSoundFont")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Sets an alternate location for the soundfont.")]),t._v(" "),s("h3",{attrs:{id:"rendermidi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rendermidi"}},[t._v("#")]),t._v(" renderMidi")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("tuneObjectArray "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ABCJS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("renderMidi")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("output"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tunebookString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Completely creates midi for the tunebook. Note: this is deprecated in favor of "),s("RouterLink",{attrs:{to:"/deprecated/synth.html"}},[t._v("Synth Documentation")]),t._v(".")],1),t._v(" "),s("h3",{attrs:{id:"startplaying"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#startplaying"}},[t._v("#")]),t._v(" startPlaying")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ABCJS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("midi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("startPlaying")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("targetEl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Starts playing the MIDI for the element passed in. If the element is already playing, this pauses it.")]),t._v(" "),s("h3",{attrs:{id:"stopplaying"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stopplaying"}},[t._v("#")]),t._v(" stopPlaying")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ABCJS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("midi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stopPlaying")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Stops playing whatever is currently playing.")]),t._v(" "),s("h3",{attrs:{id:"restartplaying"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#restartplaying"}},[t._v("#")]),t._v(" restartPlaying")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ABCJS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("midi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("restartPlaying")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Moves the progress back to the beginning for whatever is currently playing.")]),t._v(" "),s("h3",{attrs:{id:"setrandomprogress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setrandomprogress"}},[t._v("#")]),t._v(" setRandomProgress")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ABCJS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("midi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setRandomProgress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("percent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Moves the progress to whatever percent is passed in for whatever is currently playing.")]),t._v(" "),s("h3",{attrs:{id:"setloop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setloop"}},[t._v("#")]),t._v(" setLoop")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ABCJS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("midi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setLoop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("targetEl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v('Sets the "loop" mode for the element passed in. State should be true or false.')])])}),[],!1,null,null,null);a.default=n.exports}}]);