!function(e,t){e.MDA2||(e.MDA2=function(){var n,o,a,i,u,r,s,c,l,m="sso_uuid",d="sso_status",f="mda2_beacon",p=null,v=null,_=50,h="synchronized",g="synchronized_no_beacon",C={_iframe:null,_iframeBeacon:null};return{init:function(t){n=t.uuid,o=t.root,a=t.sso,i=t.listener,u="https://"+a,s=(r="https://"+o)+"/pull?origin="+encodeURIComponent(e.location.href)+"&uuid="+encodeURIComponent(n),c=r+"/beacon",e.addEventListener?e.addEventListener("message",T):e.attachEvent("onmessage",T)},sync:function t(){var a=(u=y(d),function(e,t){for(var n,o=t.split("#"),a=0;a<o.length;){if((n=o[a].split(":"))[0]===e)return n[1];a++}return null}(o,u));var u;var r=y(m);var T=y(f);var U=new Date((new Date).getTime()+25e3);var x="timeout";if(r)return void i({uuid:r,status:"inprogress"});if(null!==a){if(x="beacon",a===g&&(l=0),void 0===l){if(_<25e3)return e.clearTimeout(v),_*=2,v=e.setTimeout(t,_),void(C._iframeBeacon||w({_iframe:"_iframeBeacon",_source:c}));l=-1}if(0===l&&(b({status:g,root:o,timeout:36e5}),a=g),C._iframeBeacon&&(C._iframeBeacon.parentNode.removeChild(C._iframeBeacon),C._iframeBeacon=null),e.clearTimeout(v),_=50,l<=T)return i(a===g?{uuid:n,status:"blocked"}:a===h?{uuid:n,status:"up_to_date"}:{uuid:n,status:a}),void(l=void 0)}R({name:m,value:n,expires:U.toUTCString()});B({status:"ok",action:"start",result:x});p=e.setTimeout(I,25e3);w({_iframe:"_iframe",_source:s})}};function w(e){var n=t.createElement("iframe");n.src=e._source,n.style.position="absolute",n.style.left="-1000px",n.style.top="-1000px",C[e._iframe]=n,t.body.appendChild(n)}function I(){B({status:"error",result:"failed",action:"timeout"}),b({status:"failed",root:o,timeout:12e5}),U(),i({uuid:n,status:"failed"})}function T(e){var t,o,a,s,c;if(~[u,r].indexOf(e.origin)&&e.data){if("last_update"===e.data.type)return void(l=Number(e.data.last_update));t=e.data,o=t.status,a=t.timeout,s=t.root,c=t.message,B({status:"ok",action:"finish",result:o,message:c||null}),b({status:o,root:s,timeout:a}),U(),i({uuid:n,status:o})}}function U(){try{C._iframe&&(C._iframe.parentNode.removeChild(C._iframe),C._iframe=null),p&&e.clearTimeout(p),R({name:m,value:"",expires:"Thu, 01 Jan 1970 00:00:00 GMT"})}catch(e){B({status:"error",action:"clean_up",message:e})}}function y(t){var n=new RegExp("(?:(?:^|.*;\\s*)"+t+"\\s*=\\s*([^;]*).*$)|^.*$");return e.document.cookie.replace(n,"$1")}function R(e){var n=a.split(".").slice(-2).join(".");t.cookie=e.name+"="+e.value+";domain=."+n+";path=/;Expires="+e.expires}function x(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n+":"+e[n]);return t.join("#")}function b(e){var t=e.status,n=e.root,o=new Date((new Date).getTime()+parseInt(e.timeout,10)),a=function(e){var t,n=e.split("#"),o={},a=0;if(!e)return o;for(;a<n.length;)o[(t=n[a].split(":"))[0]]=t[1],a++;return o}(y(d));a[n]=t,R({name:d,value:x(a),expires:o.toUTCString()})}function B(t){var a=new Image,i=["uuid="+encodeURIComponent(n)];i.push("event=pull"),i.push("action="+encodeURIComponent(t.action)),i.push("status="+encodeURIComponent(t.status)),i.push("target="+encodeURIComponent(e.location.hostname)),i.push("origin="+encodeURIComponent(o)),t.result&&i.push("result="+encodeURIComponent(t.result)),t.message&&i.push("message="+encodeURIComponent(t.message)),a.src="https://"+o+"/log?"+i.join("&"),a=null}}())}(window,window.document);
