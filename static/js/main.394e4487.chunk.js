(this["webpackJsonpfloordoor-records"]=this["webpackJsonpfloordoor-records"]||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/floordoor_logo.222aeaaf.svg"},24:function(e){e.exports=JSON.parse('[{"artist":"underorder","title":"Other Ways to be Apart, Volume 1","image":"https://f4.bcbits.com/img/a4075427056_16.jpg","bandcamp_url":"https://underorder.bandcamp.com/album/other-ways-to-be-apart-volume-1","bandcamp_id":4293248199},{"artist":"Public Speaking","title":"Six Golden Tumors","image":"https://f4.bcbits.com/img/a1882965004_16.jpg","bandcamp_url":"https://publicspeaking.bandcamp.com/album/six-golden-tumors","bandcamp_id":3233261320},{"artist":"A Bunch of Dead People","title":"QUIT","image":"https://f4.bcbits.com/img/a0125296611_16.jpg","bandcamp_url":"https://abunchofdeadpeople.bandcamp.com/album/quit","bandcamp_id":3694610830},{"artist":"Wsabi Fox","title":"GUSHING","image":"https://f4.bcbits.com/img/a3288875131_16.jpg","bandcamp_url":"https://wsabifox.bandcamp.com/album/gushing","bandcamp_id":1357759231},{"artist":"Madam West","title":"Warm Bodies EP","image":"https://f4.bcbits.com/img/a4001102167_16.jpg","bandcamp_url":"https://madamwest.bandcamp.com/album/warm-bodies-ep","bandcamp_id":1183560199},{"artist":"Supplier","title":"Supplier I","image":"https://f4.bcbits.com/img/a4183441711_16.jpg","bandcamp_url":"https://supplier.bandcamp.com/album/supplier-i","bandcamp_id":4155842484},{"artist":"A Bunch of Dead People","title":"Your Eternal Reward","image":"https://f4.bcbits.com/img/a3285796354_16.jpg","bandcamp_url":"https://abunchofdeadpeople.bandcamp.com/album/your-eternal-reward","bandcamp_id":750991499},{"artist":"Public Speaking","title":"Caress, Redact","image":"https://f4.bcbits.com/img/a4226140795_16.jpg","bandcamp_url":"https://publicspeaking.bandcamp.com/album/caress-redact","bandcamp_id":1965995191},{"artist":"My Love MHz","title":"EPZERO","image":"https://f4.bcbits.com/img/a3930350332_16.jpg","bandcamp_url":"https://mylovemhz.bandcamp.com/album/epzero","bandcamp_id":4267698897}]')},25:function(e,t,a){e.exports=a(41)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(20),s=a.n(c),l=(a(30),a(4)),r=a(5),o=a(7),m=a(6),u=a(11),p=a(8),d=(a(31),a(32),a(21)),b=a.n(d),h=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={isOpen:e.isOpen},a.handleMenuClicked=a.handleMenuClicked.bind(Object(u.a)(a)),a.getButtonStyle=a.getButtonStyle.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"getIcon",value:function(){return this.state.isOpen?i.a.createElement("i",{className:"material-icons"},"menu_open"):i.a.createElement("i",{className:"material-icons"},"menu")}},{key:"handleMenuClicked",value:function(){this.props.onMenuClicked&&this.props.onMenuClicked(!this.state.isOpen)}},{key:"componentDidUpdate",value:function(e,t,a){this.props.isOpen!==e.isOpen&&this.setState({isOpen:this.props.isOpen})}},{key:"getButtonStyle",value:function(){return this.state.isOpen?"Toolbar-menu Toolbar-open":"Toolbar-menu"}},{key:"render",value:function(){return i.a.createElement("div",{className:"Toolbar"},i.a.createElement("button",{className:this.getButtonStyle(),onClick:this.handleMenuClicked},this.getIcon()),i.a.createElement("div",{className:"Toolbar-title"},i.a.createElement("img",{src:b.a,alt:"logo"})))}}]),t}(n.Component),f=(a(33),a(12)),O=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={isOpen:a.props.isOpen},a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"getOpenClass",value:function(){return this.state.isOpen?"Menu Menu-open":"Menu"}},{key:"componentDidUpdate",value:function(e,t,a){this.props.isOpen!==e.isOpen&&this.setState({isOpen:this.props.isOpen})}},{key:"render",value:function(){return i.a.createElement("div",{className:this.getOpenClass()},i.a.createElement("div",null),i.a.createElement("div",{className:"Menu-link-container"},i.a.createElement(f.a,null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(f.b,{to:"/",className:"Menu-link",activeClassName:"Menu-selected"},"Releases")),i.a.createElement("li",null,i.a.createElement(f.b,{to:"/artists",className:"Menu-link",activeClassName:"Menu-selected"},"Artists")),i.a.createElement("li",null,i.a.createElement(f.b,{to:"/contact",className:"Menu-link",activeClassName:"Menu-selected"},"Contact"))))),i.a.createElement("div",{className:"Menu-footer"}))}}]),t}(i.a.Component),g=a(10),E=(a(39),a(40),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Album"},i.a.createElement("img",{src:this.props.albumData.image,alt:this.props.albumData.title}),i.a.createElement("div",{className:"Album-overlay"},i.a.createElement("h4",null,this.props.albumData.title),i.a.createElement("h5",null,this.props.albumData.artist)))}}]),t}(i.a.Component)),v=a(24),j=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"AlbumGrid"},v.map((function(e){return i.a.createElement(E,{albumData:e,key:e.title})})))}}]),t}(i.a.Component),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={isMenuOpen:!1},a.handleMenuClicked=a.handleMenuClicked.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"handleMenuClicked",value:function(e){this.setState({isMenuOpen:e})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement(h,{isOpen:this.state.isMenuOpen,onMenuClicked:this.handleMenuClicked}),i.a.createElement(O,{isOpen:this.state.isMenuOpen})),i.a.createElement("div",{className:"App-content"},i.a.createElement(f.a,null,i.a.createElement(g.c,null,i.a.createElement(g.a,{exact:!0,path:"/"},i.a.createElement(j,null))))),i.a.createElement("footer",{className:"App-footer"},"Floordoor Records"))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.394e4487.chunk.js.map