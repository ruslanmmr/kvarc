"use strict";!function(z){z.fn.circliful=function(e,T){var S=z.extend({foregroundColor:"#3498DB",backgroundColor:"#ccc",pointColor:"none",fillColor:"none",foregroundBorderWidth:15,backgroundBorderWidth:15,pointSize:28.5,fontColor:"#aaa",beforePercent:"",percent:75,animation:1,animationStep:5,icon:"none",iconSize:"30",iconColor:"#ccc",iconPosition:"top",iconDecoration:!0,target:0,showPercent:1,percentageTextSize:22,percentageX:100,percentageY:113,textAdditionalCss:"",targetPercent:0,targetTextSize:17,targetColor:"#2980B9",text:null,textStyle:null,textColor:"#666",textY:null,textX:null,percentages:[],multiPercentageLegend:0,textBelow:!1,noPercentageSign:!1,replacePercentageByText:null,halfCircle:!1,animateInView:!1,decimals:0,alwaysDecimals:!1,title:"Circle Chart",description:"",progressColor:null,strokeLinecap:"butt"},e);return this.each(function(){var r,n,x=z(this);r=S,n=x.data(),z.each(r,function(e,t){e.toLowerCase()in n&&(r[e]=n[e.toLowerCase()])});var d,p,l=S.percent,e=83,t=100,f=S.percentageY,g=S.percentageX,h="",u=S.backgroundBorderWidth,a=S.progressColor;if(S.halfCircle?"left"===S.iconPosition?(t=80,g=117,f=e=100):S.halfCircle&&(e=80,f=100):"bottom"===S.iconPosition?(e=124,f=95):"left"===S.iconPosition?(t=80,e=110,g=117):"middle"===S.iconPosition?(0===S.percentages.length&&(S.iconDecoration&&(d='<g stroke="'+("none"!==S.backgroundColor?S.backgroundColor:"#ccc")+'" ><line x1="133" y1="50" x2="140" y2="40" stroke-width="2"  /></g>',d+='<g stroke="'+("none"!==S.backgroundColor?S.backgroundColor:"#ccc")+'" ><line x1="140" y1="40" x2="200" y2="40" stroke-width="2"  /></g>'),g=170,f=35),e=110):"right"===S.iconPosition?(t=120,e=110,g=80):"top"===S.iconPosition&&"none"!==S.icon&&(f=120),0<S.targetPercent&&!0!==S.halfCircle&&(f=95,d='<g stroke="'+("none"!==S.backgroundColor?S.backgroundColor:"#ccc")+'" ><line x1="75" y1="101" x2="125" y2="101" stroke-width="1"  /></g>',d+='<text text-anchor="middle" x="'+g+'" y="120" style="font-size: '+S.targetTextSize+'px;" fill="'+S.targetColor+'">'+S.targetPercent+(S.noPercentageSign&&null===S.replacePercentageByText?"":"%")+"</text>",d+='<circle cx="100" cy="100" r="69" fill="none" stroke="'+S.backgroundColor+'" stroke-width="3" stroke-dasharray="450" transform="rotate(-90,100,100)" />',d+='<circle cx="100" cy="100" r="69" fill="none" stroke="'+S.targetColor+'" stroke-width="3" stroke-dasharray="'+4.35*S.targetPercent+', 20000" transform="rotate(-90,100,100)" />'),null!==S.text&&(S.halfCircle?S.textBelow?d+='<text text-anchor="middle" x="'+(null!==S.textX?S.textX:"100")+'" y="'+(null!==S.textY?S.textY:"64%")+'" style="'+S.textStyle+'" fill="'+S.textColor+'">'+S.text+"</text>":d+='<text text-anchor="middle" x="'+(null!==S.textX?S.textX:"100")+'" y="'+(null!==S.textY?S.textY:"115")+'" style="'+S.textStyle+'" fill="'+S.textColor+'">'+S.text+"</text>":S.textBelow?d+='<text text-anchor="middle" x="'+(null!==S.textX?S.textX:"100")+'" y="'+(null!==S.textY?S.textY:"99%")+'" style="'+S.textStyle+'" fill="'+S.textColor+'">'+S.text+"</text>":d+='<text text-anchor="middle" x="'+(null!==S.textX?S.textX:"100")+'" y="'+(null!==S.textY?S.textY:"115")+'" style="'+S.textStyle+'" fill="'+S.textColor+'">'+S.text+"</text>"),p="none"!==S.icon?'<text text-anchor="middle" x="'+t+'" y="'+e+'" class="icon" style="font-size: '+S.iconSize+'px" fill="'+S.iconColor+'">&#x'+S.icon+"</text>":"",S.halfCircle){var o=0===S.showPercent?"display:none":"";x.addClass("svg-container").append(z('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 194 186" class="circliful">'+(void 0!==d?d:"")+'<clipPath id="cut-off-bottom"> <rect x="100" y="0" width="100" height="200" /> </clipPath><circle cx="100" cy="100" r="57" class="border" fill="'+S.fillColor+'" stroke="'+S.backgroundColor+'" stroke-width="'+u+'" stroke-dasharray="360" clip-path="url(#cut-off-bottom)" transform="rotate(-90,100,100)" /><circle class="circle" cx="100" cy="100" r="57" fill="none" stroke="'+S.foregroundColor+'" stroke-width="'+S.foregroundBorderWidth+'" stroke-dasharray="0,20000" transform="rotate(-180,100,100)" stroke-linecap="'+S.strokeLinecap+'" /><circle cx="100" cy="100" r="'+S.pointSize+'" fill="'+S.pointColor+'" clip-path="url(#cut-off-bottom)" transform="rotate(-90,100,100)" />'+p+'<text class="timer" text-anchor="middle" x="'+g+'" y="'+f+'" style="font-size: '+S.percentageTextSize+"px; "+h+";"+S.textAdditionalCss+'" fill="'+S.fontColor+'"><tspan class="number" style="'+o+'">'+(null===S.replacePercentageByText?0:S.replacePercentageByText)+'</tspan><tspan class="percent">'+(S.noPercentageSign||null!==S.replacePercentageByText?"":"%")+"</tspan></text>"))}else!function(){if(0<S.percentages.length){var e,t,r,n,o=S.percentages,l=47,a=360,c="";for(e=0;e<o.length;++e)r=o[e].percent,n=o[e].color,t=a/100*r,0<e&&(t=(a+=62.5)/100*r),c+='<circle cx="100" cy="100" r="'+(l+=10)+'" class="border" fill="'+S.fillColor+'" stroke="'+S.backgroundColor+'" stroke-width="'+u+'" stroke-dasharray="'+a+'" transform="rotate('+-90+',100,100)" /><circle class="circle" id="circle'+(e+1)+'" data-percent="'+r+'" cx="100" cy="100" r="'+l+'" class="border" fill="none" stroke="'+n+'" stroke-width="'+S.foregroundBorderWidth+'" stroke-dasharray="'+t+',20000" transform="rotate('+-90+',100,100)" stroke-linecap="'+S.strokeLinecap+'" />';var i=0===S.showPercent?"display:none":"";x.addClass("svg-container").append(z('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 194 186" class="circliful">'+(void 0!==d?d:"")+c+p+'<text class="timer" text-anchor="middle" x="'+g+'" y="'+f+'" style="font-size: '+S.percentageTextSize+"px; "+h+";"+S.textAdditionalCss+'" fill="'+S.fontColor+'"><tspan class="number" style="'+i+'">'+(null===S.replacePercentageByText?0:S.replacePercentageByText)+'</tspan><tspan class="percent">'+(S.noPercentageSign||null!==S.replacePercentageByText?"":"%")+"</tspan></text>")),0<S.percentages.length&&function(){var e,t=x.height(),r=x.width(),n=S.percentages,o="";for(e=0;e<n.length;++e){var l=n[e].title,a=n[e].color,c=n[e].percent;o+='<div><span class="color-box" style="background: '+a+'"></span>'+l+", "+c+"%</div>"}x.append(z("<div/>").append(o).attr("style","position:absolute;top:"+t/3+"px;left:"+(r+20)+"px").attr("class","legend-line"))}()}else{var s="";""!==S.beforePercent&&(s="f"===S.beforePercent.charAt(0)?'<tspan class="icon before-percent">&#x'+S.beforePercent+" </tspan>":'<tspan class="before-percent">'+S.beforePercent+" </tspan>");var i=0===S.showPercent?"display:none":"";x.addClass("svg-container").append(z('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 194 186" class="circliful">'+(void 0!==d?d:"")+'<circle cx="100" cy="100" r="57" class="border" fill="'+S.fillColor+'" stroke="'+S.backgroundColor+'" stroke-width="'+u+'" stroke-dasharray="360" transform="rotate(-90,100,100)" /><circle class="circle" cx="100" cy="100" r="57" fill="none" stroke="'+S.foregroundColor+'" stroke-width="'+S.foregroundBorderWidth+'" stroke-dasharray="0,20000" transform="rotate(-90,100,100)" stroke-linecap="'+S.strokeLinecap+'" /><circle cx="100" cy="100" r="'+S.pointSize+'" fill="'+S.pointColor+'" />'+p+'<text class="timer" text-anchor="middle" x="'+g+'" y="'+f+'" style="font-size: '+S.percentageTextSize+"px; "+h+";"+S.textAdditionalCss+'" fill="'+S.fontColor+'">'+s+'<tspan class="number" style="'+i+'">'+(null===S.replacePercentageByText?0:S.replacePercentageByText)+'</tspan><tspan class="percent">'+(S.noPercentageSign||null!==S.replacePercentageByText?"":"%")+"</tspan></text>"))}}();var c=x.find(".circle"),i=x.find(".timer"),s=30,y=0,C=S.animationStep,k=0,w=0,m=l,P=3.6*l;function b(){var e=c,t=P;if(0<S.percentages.length){var r,n=S.percentages,o=360;for(r=0;r<n.length;++r)t=o/100*(l=n[r].percent),e=x.find("#circle"+(r+1)),0<r&&(t=(o+=62.5)/100*l),v(e,t,o,l)}else v(e,t,360,S.percent)}function v(r,e,n,t){var o=window.setInterval(function(){e<=y?(window.clearInterval(o),k=1,"function"==typeof T&&T.call(this)):y+=C,S.halfCircle?t<=2*y/(n/100)&&1===k&&(y=n/100*t/2):t<=y/(n/100)&&1===k&&(y=n/100*t),w>S.target&&1===k&&(w=S.target),null===S.replacePercentageByText&&(m=S.halfCircle?parseFloat(100*y/n*2):parseFloat(100*y/n),!S.alwaysDecimals&&(0===t||1<t&&1!==k)?(m=Math.floor(m))>S.percent&&(m=S.percent.toFixed(S.decimals)):m=1!==k?Math.floor(m):S.percent.toFixed(S.decimals)),r.attr("stroke-dasharray",y+", 20000"),0===S.percentages.length?1===S.showPercent?i.find(".number").text(m):(i.find(".number").text(w),i.find(".percent").text("")):(i.find(".number").text(""),i.find(".percent").text("")),null!==a&&z.each(a,function(e,t){S.halfCircle&&(e/=2),e*(n/100)<=y&&r.css({stroke:t,transition:"stroke 0.1s linear"})})}.bind(r),s)}function B(){var e,t,r,n;c.hasClass("start")||(e=c.offset().top,t=e+c.outerHeight(),r=z(window).scrollTop(),n=r+z(window).height(),r<t&&e<n&&(c.addClass("start"),setTimeout(b,250)))}S.halfCircle&&(P=3.6*l/2),null!==S.replacePercentageByText&&(m=S.replacePercentageByText),1===S.animation||S.animateInView?S.animateInView?(B(),z(window).scroll(function(){B()})):b():0===S.percentages.length?(c.attr("stroke-dasharray",P+", 20000"),1===S.showPercent?i.find(".number").text(m):(i.find(".number").text(S.target),i.find(".percent").text(""))):null!==S.replacePercentageByText&&(i.find(".number").text(S.replacePercentageByText),i.find(".percent").text(""))})}}(jQuery);