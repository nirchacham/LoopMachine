(this["webpackJsonploop-machine"]=this["webpackJsonploop-machine"]||[]).push([[0],{17:function(t,e,a){},20:function(t,e,a){},22:function(t,e,a){},24:function(t,e,a){},25:function(t,e,a){"use strict";a.r(e);var o=a(1),s=a.n(o),i=a(11),n=a.n(i),c=a(4),l=a(5),r=a(7),d=a(6),u=(a(17),a(8)),p=a(3),h=a.n(p),m=(a(20),a(0)),g=function(t){Object(r.a)(a,t);var e=Object(d.a)(a);function a(t){var o;return Object(c.a)(this,a),(o=e.call(this,t)).state={size:110,isOn:!1},o}return Object(l.a)(a,[{key:"changeLoopState",value:function(){var t=this,e=1!=this.state.isOn;this.setState({isOn:e},(function(){t.props.isAudioOn(t.props.audio)}))}},{key:"render",value:function(){var t=this,e=1==this.state.isOn?"toggle-on":"toggle-off";return Object(m.jsx)("div",{className:"image-root",style:{backgroundImage:"url(".concat(this.props.photo,")"),width:this.state.size+"px",height:this.state.size+"px"},children:Object(m.jsx)("div",{children:Object(m.jsx)(h.a,{className:"image-icon",name:e,title:"play",onClick:function(){return t.changeLoopState()}})})})}}]),a}(s.a.Component),b=(a(22),a.p+"static/media/120_future_funk_beats_25.5eb417fc.mp3"),S=a.p+"static/media/120_stutter_breakbeats_16.37c82282.mp3",j=a.p+"static/media/Bass Warwick heavy funk groove on E 120 BPM.52c24c81.mp3",f=a.p+"static/media/electric guitar coutry slide 120bpm - B.230fcab8.mp3",I=a.p+"static/media/FUD_120_StompySlosh.27bdc145.mp3",O=a.p+"static/media/GrooveB_120bpm_Tanggu.3e1411b4.mp3",E=a.p+"static/media/MazePolitics_120_Perc.2d08c654.mp3",v=a.p+"static/media/PAS3GROOVE1.03B.f77c6da4.mp3",A=a.p+"static/media/SilentStar_120_Em_OrganSynth.f2d668af.mp3",w=a.p+"static/media/funk_beats.d3b67a0b.png",C=a.p+"static/media/Stutter_breakbeats.3c441967.png",y=a.p+"static/media/Bass_Warwick.6db34cb5.png",k=a.p+"static/media/Country_guitar.e30d7978.png",x=a.p+"static/media/Stompy_slosh.0d823416.png",J=a.p+"static/media/Tanggu.2eb30f9d.png",R=a.p+"static/media/Groove_Michael.b3fdfdc5.png",T=a.p+"static/media/Silent_star.057e2ebf.png",L=a(12),Q=a(9),Y=[{song:b,photo:w},{song:S,photo:C},{song:j,photo:y},{song:f,photo:k},{song:I,photo:x},{song:O,photo:J},{song:E,photo:"data:image/png;base64,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"},{song:v,photo:R},{song:A,photo:T}],F=function(t){Object(r.a)(a,t);var e=Object(d.a)(a);function a(t){var o;return Object(c.a)(this,a),(o=e.call(this,t)).start=function(){o.setState({recordState:Q.a.START})},o.stop=function(){o.setState({recordState:Q.a.STOP})},o.onStop=function(t){o.setState({audioData:t})},o.playRecord=function(){o.state.audioData.play()},o.handleSave=function(){var t=o.state.audioData;localStorage.setItem("audioData",JSON.stringify(t))},o.handleLoad=function(){var t=localStorage.getItem("audioData");o.setState({audioData:JSON.parse(t)})},o.deleteLoopFromPlaylist=function(t){var e=o.state.playlist;e.map((function(a){a._src==t&&(a.stop(),e.splice(e.indexOf(a),1))})),0==e.length?o.setState({isPlaying:!1,playlist:e}):o.setState({playlist:e})},o.deleteLoopFromQueue=function(t){var e=o.state.loopQueue;e.map((function(a){a._src==t&&e.splice(e.indexOf(a),1)})),o.setState({loopQueue:e})},o.PlayLoops=function(t){var e=o.state.playlist,a=o.state.loopQueue;o.state.isPlaying||(a.length>0&&a.map((function(t){var o=a.splice(a.indexOf(t),1);e.push(o[0])})),e.length>0&&(e.map((function(t){return t.play()})),o.setState({playlist:e,loopQueue:a,isPlaying:!0})))},o.checkForNewLoops=function(){var t=o.state.playlist,e=o.state.loopQueue;e.length>0&&e.map((function(a){a.play();var o=e.splice(e.indexOf(a),1);t.push(o[0])})),o.setState({playlist:t,loopQueue:e})},o.StopLoops=function(){var t=o.state.playlist;t.map((function(t){return t.stop()})),o.setState({playlist:t,isPlaying:!1})},o.RenderLoopButtonsAndSound=function(){var t=o.state.recordState;return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"buttons",children:Object(m.jsx)(h.a,{className:"image-icon",name:"play",title:"Record session",onClick:o.PlayLoops})}),Object(m.jsx)("div",{className:"buttons",children:Object(m.jsx)(h.a,{className:"image-icon",name:"stop",title:"Stop recording",onClick:o.StopLoops})}),Object(m.jsx)(Q.b,{state:t,onStop:o.onStop,canvasHeight:"50",canvasWidth:"300"}),Object(m.jsx)("div",{children:Object(m.jsx)("audio",{id:"audio",controls:!0,src:o.state.audioData?o.state.audioData.url:null,children:" "})})]})},o.RenderControlers=function(){var t;return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"buttons",children:Object(m.jsx)(h.a,(t={className:"image-icon"},Object(u.a)(t,"className","record"),Object(u.a)(t,"name","circle"),Object(u.a)(t,"title","Record session"),Object(u.a)(t,"onClick",o.start),t))}),Object(m.jsx)("div",{className:"buttons",children:Object(m.jsx)(h.a,{className:"image-icon",name:"stop",title:"Stop recording",onClick:o.stop})}),Object(m.jsx)("div",{className:"buttons",children:Object(m.jsx)(h.a,{className:"image-icon",name:"save",title:"Save session",onClick:o.handleSave})}),Object(m.jsx)("div",{className:"buttons",children:Object(m.jsx)(h.a,{className:"image-icon",name:"upload",title:"Load session",onClick:o.handleLoad})})]})},o.state={playlist:[],loopQueue:[],recordState:null,audioData:null,isPlaying:!1},o}return Object(l.a)(a,[{key:"addLoopAudio",value:function(t){var e=this.state.playlist,a=this.state.loopQueue,o=new L.Howl({src:t,loop:!0});o.on("end",this.checkForNewLoops),0==e.length?(e.push(o),this.setState({playlist:e})):this.state.isPlaying?e.some((function(e){return t==e._src}))||a.some((function(e){return t==e._src}))?(this.deleteLoopFromPlaylist(t),this.deleteLoopFromQueue(t)):(a.push(o),this.setState({loopQueue:a})):e.some((function(e){return t==e._src}))?this.deleteLoopFromPlaylist(t):(e.push(o),this.setState({playlist:e}))}},{key:"render",value:function(){var t=this;return Object(m.jsxs)("div",{className:"loops-root",children:[Y.map((function(e,a){return Object(m.jsx)(g,{audio:e.song,photo:e.photo,isAudioOn:t.addLoopAudio.bind(t)},a)})),this.RenderLoopButtonsAndSound(),this.RenderControlers()]})}}]),a}(s.a.Component),M=a.p+"static/media/cover.3451f7d7.jpeg",N=function(t){Object(r.a)(a,t);var e=Object(d.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"app-root",style:{backgroundImage:"url(".concat(M,")"),backgroundSize:"100% 100%"},children:[Object(m.jsx)("h1",{children:"Nir Chacham's Loop Machine"}),Object(m.jsx)(F,{})]})}}]),a}(s.a.Component);a(24);n.a.render(Object(m.jsx)(N,{}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.cc917f9c.chunk.js.map