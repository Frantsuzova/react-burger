(this["webpackJsonpreact-burger"]=this["webpackJsonpreact-burger"]||[]).push([[0],{13:function(e,t,r){e.exports={burger_constructor__main_list:"burger-constructor_burger_constructor__main_list__E__kw",burger_constructor__noingr:"burger-constructor_burger_constructor__noingr__3eewf",burger_constructor__noingr_space:"burger-constructor_burger_constructor__noingr_space__22k5A",burger_constructor__noingr_space_other:"burger-constructor_burger_constructor__noingr_space_other__3rxKX",burger_constructor__main_list_item:"burger-constructor_burger_constructor__main_list_item__1lDC3",burger_constructor__draggable_list:"burger-constructor_burger_constructor__draggable_list__2oMLz",burger_constructor__draggable_list_item:"burger-constructor_burger_constructor__draggable_list_item__3IoEM",burger_constructor__order_details:"burger-constructor_burger_constructor__order_details__3ahtJ"}},17:function(e,t,r){e.exports={ingredient__container:"ingredient-details_ingredient__container__8HJfc",ingredient__img:"ingredient-details_ingredient__img__27Lmf",ingredient__info:"ingredient-details_ingredient__info__2yiSb",ingredient__element:"ingredient-details_ingredient__element__3G2NB"}},180:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),i=r(23),a=r.n(i),s=(r(98),r(40)),o=r.n(s),_="https://norma.nomoreparties.space/api",u=r(20),l=r.n(u),d=r(41),b=r.n(d),m=r(0);function j(e){return Object(m.jsx)("div",{className:"pl-5 pr-5 pt-4 pb-4 mt-4 mb-4 mr-2",children:Object(m.jsxs)("div",{className:b.a.menu_item__link,children:[Object(m.jsx)("div",{className:"mr-2",children:e.icon}),Object(m.jsx)("a",{className:e.active?b.a.menu_item__link_style_active:b.a.menu_item__link_style_unactive,href:e.link,title:e.text,children:Object(m.jsx)("p",{className:"text text_type_main-default",children:e.text})})]})})}var g=r(7);function p(){return Object(m.jsx)("header",{children:Object(m.jsx)("nav",{className:l.a.appheader,children:Object(m.jsxs)("ul",{className:l.a.appheader__menu_list,children:[Object(m.jsx)("li",{className:l.a.appheader__menu_item_left,children:Object(m.jsx)(j,{icon:Object(m.jsx)(g.BurgerIcon,{type:"primary"}),text:"\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440",link:"#1",active:!0})}),Object(m.jsx)("li",{className:l.a.appheader__menu_item_left,children:Object(m.jsx)(j,{icon:Object(m.jsx)(g.ListIcon,{type:"secondary"}),text:"\u041b\u0435\u043d\u0442\u0430\xa0\u0437\u0430\u043a\u0430\u0437\u043e\u0432",link:"#2"})}),Object(m.jsx)("li",{className:l.a.appheader__menu_item_center,children:Object(m.jsx)(g.Logo,{})}),Object(m.jsx)("li",{className:l.a.appheader__menu_item_right,children:Object(m.jsx)(j,{icon:Object(m.jsx)(g.ProfileIcon,{type:"secondary"}),text:"\u041b\u0438\u0447\u043d\u044b\u0439\xa0\u043a\u0430\u0431\u0438\u043d\u0435\u0442",link:"#3"})})]})})})}var O=r(24),x=r(186),f=r(187),h=r(13),y=r.n(h),v=r(4),N=r(31),E=r(29),C=r.n(E),R=r(62),I="GET_INGREDIENTS_API_REQUEST",T="GET_INGREDIENTS_API_SUCCESS",D="GET_INGREDIENTS_API_FAILED",L="SEND_ORDER_REQUEST",k="SEND_ORDER_SUCCESS",S="SEND_ORDER_FAILED",M="CONSTRUCTOR_BUN",A="CONSTRUCTOR_MAIN_INGREDIENTS",w="MODAL_INGRIDIENT_OPEN",U="MODAL_ORDER_OPEN",G="MODAL_CLOSE",B="WRITE_CURRENT_INGREDIENT",P="DELETE_CURRENT_INGREDIENT",K="TAB_SWITCH",F="CONSTRUCTOR_CARD_CHANGE",H="COUNT_TOTAL_PRICE",J="COUNT_CARD",X="MODAL_ORDER_ERROR",q="CONSTRUCTOR_CLEAN";function z(e){return function(t){t({type:K,value:e})}}function Q(e,t,r,n){var c=Object(N.a)(r),i=c[e];return c.splice(e,1),c.splice(t,0,i),function(e){e({type:"CONSTRUCTOR_CARD_CHANGE",value:c})}}function V(e,t,r){var n=[],c=e.filter((function(e){return e.keyAdd--,e!==r}));return n=1===e.length?e:c,function(e){e({type:F,value:n})}}var W="movableCard",Y="addbleCard";function Z(e){return function(t){var r;e&&(t({type:"CONSTRUCTOR_CLEAN"}),t((r=e,function(){var e=Object(R.a)(C.a.mark((function e(t){var n,c,i,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:L}),n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ingredients:r})},e.prev=2,e.next=5,fetch("".concat(_,"/orders"),n);case 5:if(!(c=e.sent).ok){e.next=14;break}return e.next=9,c.json();case 9:return i=e.sent,e.next=12,i;case 12:a=e.sent,t({type:k,data:a});case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),t({type:S,error:e.t0.message});case 19:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(t){return e.apply(this,arguments)}}())),t({type:"MODAL_ORDER_OPEN",open:!0})),e||t({type:"MODAL_ORDER_ERROR",open:!0})}}function $(){return Object(v.c)((function(e){return e.constructorList.mainIngredients})).map((function(e,t){return Object(m.jsx)(ee,{className:y.a.burger_constructor__draggable_list,elemKey:e,id:e._id,name:e.name,price:e.price,image:e.image_mobile,index:t},e.key+e.keyAdd)}))}function ee(e){var t=e.id,r=e.name,c=e.price,i=e.image,a=e.index,s=e.elemKey,o=Object(v.b)(),_=Object(v.c)((function(e){return e.apiList})),u=(Object(v.c)((function(e){return e.createdOrder.orderBase})),Object(v.c)((function(e){return e.constructorList}))),l=u.mainIngredients,d=u.bun;Object(n.useEffect)((function(){o(function(e,t,r){var n=Object(N.a)(r.burgerData).filter((function(e){return"bun"!==e.type})),c=Object(N.a)(e),i=c.filter((function(e){return e._id===t._id})).length,a=n.find((function(e){return e._id===t._id})),s=n.indexOf(a),o=n.filter((function(e){return!c.includes(e)})).concat(c.filter((function(e){return!n.includes(e)})));return o&&(o.map((function(e){return e.counter=0,e})),n.concat(o).filter((function(e,t){return n.indexOf(e)===t&&0===e.counter}))),a.counter=i,n.splice(s,1,a),function(e){e({type:J,value:r.burgerData})}}(l,s,_))}),[l,d,V,Q]);var b=Object(n.useRef)(null),j=Object(x.a)({accept:W,collect:function(e){return{isOver:!!e.isOver()}},hover:function(e,t){var r;if(b.current){var n=e.index,c=a;if(n!==c){var i=null===(r=b.current)||void 0===r?void 0:r.getBoundingClientRect(),s=(i.bottom-i.top)/2,_=t.getClientOffset().y-i.top;n<c&&_<s||n>c&&_>s||(o(Q(n,c,l)),e.index=c)}}}}),p=Object(O.a)(j,2)[1],h=Object(f.a)({type:W,item:function(){return{id:t,index:a,elemKey:s}},collect:function(e){return{isDragging:e.isDragging()}}}),E=Object(O.a)(h,2),C=E[0].isDragging?0:1;return(0,E[1])(p(b)),Object(m.jsxs)("div",{className:y.a.burger_constructor__draggable_list_item,ref:b,style:{opacity:C},children:[Object(m.jsx)(g.DragIcon,{type:"primary"}),Object(m.jsx)(g.ConstructorElement,{text:r,price:c,thumbnail:i,handleClose:function(){o(V(l,0,s))}})]})}function te(){var e=Object(v.c)((function(e){return e.constructorList})),t=e.mainIngredients,r=e.bun,c=Object(v.b)(),i=Object(x.a)({accept:Y,collect:function(e){return{isOver:!!e.isOver()}},drop:function(e){c(function(e,t,r){var n=Object(N.a)(t),c={};if(e.item)return function(i){"bun"===e.item.type&&e.item!==r&&(e.item.keyAdd=2,r.counter=0,e.item.counter=2,i({type:M,bun:e.item})),"bun"===e.item.type||t.includes(e.item)||(n.push(e.item),e.item.keyAdd++),"bun"!==e.item.type&&t.includes(e.item)&&(e.item.keyAdd++,Object.assign(c,e.item),c.key+=c.keyAdd,n.push(c)),i({type:A,mainIngredients:n})}}(e,t,r))}}),a=Object(O.a)(i,2)[1],s=Object(v.c)((function(e){return e.apiList.burgerData}));Object(n.useEffect)((function(){c(function(e,t){var r=0,n=0;return t.type&&(n=2*t.price),t.type||(n=0),e.length>0&&(r=e.map((function(e){return e.price})).reduce((function(e,t){return e+t}),0)),0===e.length&&(r=0),function(e){e({type:H,value:n+r})}}(t,r))}),[t,r]);var o=Object(v.c)((function(e){return e.price.totalPrice})),_=null;return _=r.type?t.map((function(e){return e._id})).concat(r._id,r._id):null,Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("ul",{className:y.a.burger_constructor__main_list,ref:a,children:[r.type&&Object(m.jsx)("li",{className:y.a.burger_constructor__main_list_item,children:Object(m.jsx)(g.ConstructorElement,{type:"top",isLocked:!0,text:r.name+" (\u0432\u0435\u0440\u0445)",thumbnail:r.image,price:r.price})},"top_bun"),!r.type&&0===t.length&&Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{className:y.a.burger_constructor__noingr_space+"text text_type_main-medium",children:"\u041f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0441\u044e\u0434\u0430 \u0438\u043d\u0433\u0440\u0435\u0434\u0438\u0435\u043d\u0442\u044b"}),Object(m.jsx)("div",{className:y.a.burger_constructor__noingr})]}),0===t.length&&r.type&&Object(m.jsx)("div",{className:y.a.burger_constructor__noingr_space_other,children:Object(m.jsxs)("p",{className:"text text_type_main-medium",children:[Object(m.jsx)("span",{className:"text_color_inactive",children:"\u041d\u0435\u043b\u044c\u0437\u044f \u043f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c \u043e\u043c\u043b\u0435\u0442, \u043d\u0435 \u0440\u0430\u0437\u0431\u0438\u0432 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u044f\u0438\u0446, \u0430 \u0431\u0443\u0440\u0433\u0435\u0440, \u043d\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0432"})," \u0438\u043d\u0433\u0440\u0435\u0434\u0438\u0435\u043d\u0442\u043e\u0432",Object(m.jsxs)("span",{className:"text text_type_main-small text_color_inactive",children:[".",Object(m.jsx)("br",{}),"\xa9 \u0410\u043c\u0430\u0440 \u0425\u0430\u044f\u043c \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0437\u0430\u043c\u0435\u0447\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0444\u0438\u043b\u043e\u0441\u043e\u0444\u044b"]})]})}),Object(m.jsx)("li",{className:y.a.burger_constructor__draggable_list,children:t.length>0&&Object(m.jsx)($,{})}),r.type&&Object(m.jsx)("li",{className:y.a.burger_constructor__main_list_item,children:Object(m.jsx)(g.ConstructorElement,{isLocked:!0,type:"bottom",text:r.name+" (\u043d\u0438\u0437)",thumbnail:r.image,price:r.price})},"bottom_bun")]}),Object(m.jsxs)("div",{className:y.a.burger_constructor__order_details,children:[Object(m.jsx)("p",{className:"text text_type_digits-medium",children:o}),Object(m.jsx)("span",{className:"ml-2 mr-10",children:Object(m.jsx)(g.CurrencyIcon,{type:"primary"})}),!r.type&&Object(m.jsx)(g.Button,{type:"primary",size:"medium",children:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0431\u0443\u043b\u043a\u0438!"}),r.type&&Object(m.jsx)(g.Button,{type:"primary",size:"medium",onClick:function(){return c(Z(_),function(e){var t=e.map((function(e){return e.counter=0,e}));return function(e){e({type:J,value:t})}}(s))},children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"})]})]})}var re=r(64),ne=r.n(re),ce=r(14),ie=r.n(ce),ae=r(89),se=r.n(ae),oe=r(42),_e=r.n(oe);function ue(e){var t=e.id,r=e.image,n=e.price,c=e.name,i=e.index,a=e.elem,s=Object(v.b)(),o=Object(f.a)({type:Y,item:{item:a,index:i},collect:function(e){return{isDragging:e.isDragging()?.4:1}}}),_=Object(O.a)(o,2),u=(_[0].isDragging,_[1]);return Object(m.jsxs)("li",{className:_e.a.burgeringredients_card,ref:u,id:t,onClick:function(){return s(function(e){return function(t){t({type:B,name:e.name,image:e.image_large,calories:e.calories,proteins:e.proteins,fat:e.fat,carbohydrates:e.carbohydrates}),t({type:w,open:!0})}}(a))},children:[a.counter>0&&Object(m.jsx)(g.Counter,{count:a.counter,size:"default"}),Object(m.jsx)("img",{src:r,alt:c,title:c,className:"ml-4 mr-4"}),Object(m.jsxs)("div",{className:_e.a.burgeringredients_card__ingredient_price,children:[Object(m.jsx)("p",{className:"pr-2 text text_type_digits-default",children:n}),Object(m.jsx)(g.CurrencyIcon,{})]}),Object(m.jsx)("p",{className:_e.a.burgeringredients_card__ingredient_name+" text text_type_main-default",children:c})]})}function le(e){var t=e.type,r=Object(v.c)((function(e){return e.apiList.burgerData}));return Object(m.jsx)("ul",{className:se.a.burger_ingredients_list+" ml-4 mt-6 mr-2 mb-10",children:r.map((function(e,r){if(e.type===t)return Object(m.jsx)(ue,{name:e.name,id:e._id,price:e.price,image:e.image,index:r,elem:e},e._id)}))})}function de(e){var t=e.textContent,r=e.cardType;return Object(m.jsxs)("section",{id:r,children:[Object(m.jsx)("h2",{className:"text text_type_main-medium mt-10 mb-6",children:t}),Object(m.jsx)(le,{type:r})]})}ie.a.shape({textContent:ie.a.string.isRequired,cardType:ie.a.string.isRequired});function be(){var e=Object(v.b)(),t=Object(v.c)((function(e){return e.tabSwtich.currentTab})),r=function(t){e(z(t));var r=document.getElementById(t);r&&r.scrollIntoView({behavior:"smooth"})};return Object(m.jsxs)("div",{className:ne.a.burgeringredients__tab_selector,children:[Object(m.jsx)(g.Tab,{value:"bun",active:"bun"===t,onClick:function(e){return r(e)},children:"\u0411\u0443\u043b\u043a\u0438"}),Object(m.jsx)(g.Tab,{value:"sauce",active:"sauce"===t,onClick:function(e){return r(e)},children:"\u0421\u043e\u0443\u0441\u044b"}),Object(m.jsx)(g.Tab,{value:"main",active:"main"===t,onClick:function(e){return r(e)},children:"\u041d\u0430\u0447\u0438\u043d\u043a\u0438"})]})}function me(){var e=Object(v.b)(),t=Object(n.useRef)(),r=function(r){var n=r.target.childNodes[0].offsetHeight,c=r.target.childNodes[1].clientHeight;t.current.scrollTop<n&&e(z("bun")),t.current.scrollTop>=n&&t.current.scrollTop<n+c&&e(z("sauce")),t.current.scrollTop>=n+c&&e(z("main"))};return Object(n.useEffect)((function(){return t&&t.current&&t.current.addEventListener("scroll",(function(e){r(e)})),function(){t.current.removeEventListener("scroll",(function(e){r(e)}))}}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{className:"text text_type_main-large mt-10",children:"\u0421\u043e\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u0443\u0440\u0433\u0435\u0440"}),Object(m.jsx)(be,{}),Object(m.jsxs)("div",{className:ne.a.burgeringredients__scroll_container,ref:t,children:[Object(m.jsx)(de,{textContent:"\u0411\u0443\u043b\u043a\u0438",cardType:"bun"}),Object(m.jsx)(de,{textContent:"\u0421\u043e\u0443\u0441\u044b",cardType:"sauce"}),Object(m.jsx)(de,{textContent:"\u041d\u0430\u0447\u0438\u043d\u043a\u0438",cardType:"main"})]})]})}var je=r.p+"static/media/done.3ba9e5cd.svg",ge=r(30),pe=r.n(ge);function Oe(){var e=Object(v.c)((function(e){return e.createdOrder})),t=e.hasError,r=e.error,n=e.isLoading,c=e.orderInfo,i=e.success;return Object(m.jsxs)(m.Fragment,{children:[n&&Object(m.jsx)("span",{className:"".concat(pe.a.order__loading," text text_type_main-default mb-8"),children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),!n&&!t&&i&&Object(m.jsxs)("div",{className:"".concat(pe.a.order__container," pt-30 pb-25"),children:[Object(m.jsx)("div",{className:"mb-8",children:Object(m.jsx)("p",{className:"".concat(pe.a.order__digitdecor," text text_type_digits-large"),children:c.order.number})}),Object(m.jsx)("p",{className:"text text_type_main-medium",children:"\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0437\u0430\u043a\u0430\u0437\u0430"}),Object(m.jsx)("img",{className:"".concat(pe.a.order__img," mb-15 mt-15"),alt:"\u0437\u0430\u043a\u0430\u0437 \u043f\u0440\u0438\u043d\u044f\u0442",src:je}),Object(m.jsx)("p",{className:"text text_type_main-default",children:"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 \u043d\u0430\u0447\u0430\u043b\u0438 \u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c"}),Object(m.jsx)("div",{className:"mt-2",children:Object(m.jsx)("p",{className:"text text_type_main-default text_color_inactive",children:"\u0414\u043e\u0436\u0434\u0438\u0442\u0435\u0441\u044c \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u043d\u0430 \u043e\u0440\u0431\u0438\u0442\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0442\u0430\u043d\u0446\u0438\u0438"})})]}),t&&Object(m.jsx)("span",{className:"text text_type_digits-large mb-8",children:"\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(r)})]})}var xe=r(17),fe=r.n(xe);var he=function(){var e=Object(v.c)((function(e){return e.currentIngredient})),t=e.name,r=e.image,n=e.calories,c=e.proteins,i=e.fat,a=e.carbohydrates,s=Object(v.c)((function(e){return e.modalInfo.ingridientModal}));return console.log("\u0442\u044b \u0432 \u0434\u0435\u0442\u0430\u043b\u044f\u0445 \u0438\u043d\u0433\u0440\u0438\u0434\u0438\u0435\u043d\u0442\u0430"),s?Object(m.jsxs)("div",{className:"".concat(fe.a.ingredient__container," p-10"),children:[Object(m.jsx)("p",{className:"text text_type_main-large",children:"\u0414\u0435\u0442\u0430\u043b\u0438 \u0438\u043d\u0433\u0440\u0435\u0434\u0438\u0435\u043d\u0442\u0430"}),Object(m.jsx)("img",{className:"".concat(fe.a.ingredient__img),alt:"\u0432\u0430\u0448 \u0438\u043d\u0433\u0440\u0438\u0434\u0438\u0435\u043d\u0442",src:r}),Object(m.jsx)("p",{className:"text text_type_main-medium",children:t}),Object(m.jsxs)("div",{className:"".concat(fe.a.ingredient__info," mt-8 text_color_inactive"),children:[Object(m.jsxs)("div",{className:"".concat(fe.a.ingredient__element," mr-5"),children:[Object(m.jsx)("p",{className:"text text_type_main-default",children:"\u041a\u0430\u043b\u043e\u0440\u0438\u0438,\u043a\u043a\u0430\u043b"}),Object(m.jsx)("p",{className:"text text_type_digits-default",children:n})]}),Object(m.jsxs)("div",{className:"".concat(fe.a.ingredient__element," mr-5"),children:[Object(m.jsx)("p",{className:"text text_type_main-default",children:"\u0411\u0435\u043b\u043a\u0438, \u0433"}),Object(m.jsx)("p",{className:"text text_type_digits-default",children:c})]}),Object(m.jsxs)("div",{className:"".concat(fe.a.ingredient__element," mr-5"),children:[Object(m.jsx)("p",{className:"text text_type_main-default",children:"\u0416\u0438\u0440\u044b, \u0433"}),Object(m.jsx)("p",{className:"text text_type_digits-default",children:i})]}),Object(m.jsxs)("div",{className:"".concat(fe.a.ingredient__element," mr-5"),children:[Object(m.jsx)("p",{className:"text text_type_main-default",children:"\u0423\u0433\u043b\u0435\u0432\u043e\u0434\u044b, \u0433"}),Object(m.jsx)("p",{className:"text text_type_digits-default",children:a})]})]})]}):null},ye=r(65),ve=r.n(ye),Ne=r(90),Ee=r.n(Ne),Ce=function(e){var t=e.closeClick;return Object(m.jsx)("div",{className:Ee.a.overlay,onClick:t})},Re=(ie.a.shape({onClick:ie.a.func.isRequired,children:ie.a.element.isRequired}),function(e){var t=e.children,r=Object(v.b)(),c=Object(v.c)((function(e){return e.modalInfo})).allClose,a=Object(n.useCallback)((function(e){"Escape"===e.key&&r((function(e){e({type:"MODAL_CLOSE"}),e({type:"DELETE_CURRENT_INGREDIENT"})}))}),[]);return Object(n.useEffect)((function(){return document.addEventListener("keydown",a),function(){document.removeEventListener("keydown",a)}}),[]),c?null:Object(i.createPortal)(Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(Ce,{closeClick:function(){return r((function(e){e({type:"MODAL_CLOSE"}),e({type:"DELETE_CURRENT_INGREDIENT"})}))}}),Object(m.jsxs)("div",{className:ve.a.modal__space,children:[Object(m.jsx)("div",{className:ve.a.modal__close_icon,children:Object(m.jsx)(g.CloseIcon,{type:"primary",onClick:function(){return r((function(e){e({type:"MODAL_CLOSE"}),e({type:"DELETE_CURRENT_INGREDIENT"})}))}})}),t]})]}),document.getElementById("modal-root"))}),Ie=r(185),Te=r(92);function De(){var e=Object(v.b)(),t=Object(v.c)((function(e){return e.apiList})),r=t.hasError,n=t.error,i=t.isLoading,a=t.burgerData,s=Object(v.c)((function(e){return e.modalInfo})),u=s.ingridientModal,l=s.orderModal;return c.a.useEffect((function(){var t;e((t="".concat(_,"/ingredients"),function(){var e=Object(R.a)(C.a.mark((function e(r){var n,c,i;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r({type:I}),e.prev=1,e.next=4,fetch(t);case 4:if(!(n=e.sent).ok){e.next=11;break}return e.next=8,n.json();case 8:c=e.sent,i=c.data.map((function(e){return e.keyAdd=0,e.key=e._id,e.counter=0,e})),r({type:T,items:i});case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),r({type:D,error:"\u041e\u0448\u0438\u0431\u043a\u0430! ".concat(e.t0.message)});case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}()))}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(p,{}),r&&Object(m.jsx)("div",{children:n}),!i&&!r&&a&&Object(m.jsxs)("main",{className:o.a.container,children:[Object(m.jsxs)(Ie.a,{backend:Te.a,children:[Object(m.jsx)("section",{className:o.a.container_left+" mr-5",children:Object(m.jsx)(me,{})}),Object(m.jsx)("section",{className:o.a.container_right+" ml-5",children:Object(m.jsx)(te,{})})]}),u&&Object(m.jsx)(Re,{children:Object(m.jsx)(he,{})}),l&&Object(m.jsx)(Re,{children:Object(m.jsx)(Oe,{})})]})]})}var Le=r(16),ke=r(91),Se=r(3),Me={hasError:!1,error:null,isLoading:!1,burgerData:null},Ae={bun:[],mainIngredients:[]},we={name:"",image:null,calories:null,proteins:null,fat:null,carbohydrates:null},Ue={ingridientModal:!1,orderModal:!1,allClose:!0},Ge={hasError:!1,error:null,isLoading:!1,orderInfo:null,orderBase:[],success:!1},Be={currentTab:"bun"},Pe={totalPrice:null},Ke=Object(Le.b)({apiList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(Se.a)(Object(Se.a)({},e),{},{isLoading:!0});case T:return Object(Se.a)(Object(Se.a)({},e),{},{burgerData:t.items,isLoading:!1,hasError:!1});case D:return Object(Se.a)(Object(Se.a)({},e),{},{isLoading:!1,hasError:!0,burgerData:null,error:t.error});case J:return Object(Se.a)(Object(Se.a)({},e),{},{burgerData:t.value});default:return e}},constructorList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return Object(Se.a)(Object(Se.a)({},e),{},{bun:t.bun});case A:return Object(Se.a)(Object(Se.a)({},e),{},{mainIngredients:t.mainIngredients});case F:return Object(Se.a)(Object(Se.a)({},e),{},{mainIngredients:t.value});case q:return Object(Se.a)(Object(Se.a)({},e),{},{mainIngredients:Ae.mainIngredients,bun:Ae.bun});default:return e}},modalInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(Se.a)(Object(Se.a)({},e),{},{ingridientModal:t.open,orderModal:!1,allClose:!1,orderModalError:!1});case U:return Object(Se.a)(Object(Se.a)({},e),{},{orderModal:t.open,ingridientModal:!1,orderModalError:!1,allClose:!1});case X:return Object(Se.a)(Object(Se.a)({},e),{},{orderModalError:t.open,ingridientModal:!1,allClose:!1});case G:return Object(Se.a)(Object(Se.a)({},e),{},{ingridientModal:!1,orderModal:!1,orderModalError:!1,allClose:!0});default:return e}},currentIngredient:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(Se.a)(Object(Se.a)({},e),{},{name:t.name,image:t.image,calories:t.calories,proteins:t.proteins,fat:t.fat,carbohydrates:t.carbohydrates});case P:return Object(Se.a)(Object(Se.a)({},e),{},{initialCurrentIngredient:we});default:return e}},createdOrder:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(Se.a)(Object(Se.a)({},e),{},{isLoading:!0});case k:return Object(Se.a)(Object(Se.a)({},e),{},{isLoading:!1,success:!0,hasError:!1,orderInfo:t.data,orderBase:e.orderBase.concat(t.data)});case S:return Object(Se.a)(Object(Se.a)({},e),{},{isLoading:!1,hasError:!0,error:t.error,orderInfo:null});default:return e}},tabSwtich:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;return t.type===K?Object(Se.a)(Object(Se.a)({},e),{},{currentTab:t.value}):e},price:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;return t.type===H?Object(Se.a)(Object(Se.a)({},e),{},{totalPrice:t.value}):e}}),Fe=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):Le.c)(Object(Le.a)(ke.a)),He=Object(Le.d)(Ke,Fe);a.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(v.a,{store:He,children:Object(m.jsx)(De,{})})}),document.getElementById("root"))},20:function(e,t,r){e.exports={appheader:"app-header_appheader__3TnN2",appheader__menu_list:"app-header_appheader__menu_list__3LK_X",appheader__menu_item_left:"app-header_appheader__menu_item_left__1F4IX",appheader__menu_item_center:"app-header_appheader__menu_item_center__hKKRx",appheader__menu_item_right:"app-header_appheader__menu_item_right__rTD0n"}},30:function(e,t,r){e.exports={order__container:"order-details_order__container__2tlqp",order__img:"order-details_order__img__gKARh",order__digitdecor:"order-details_order__digitdecor__hRfMx",order__loading:"order-details_order__loading__8YDg-"}},40:function(e,t,r){e.exports={container:"app_container__3oySj",container_left:"app_container_left__2BdKF",container_right:"app_container_right__3mMa8"}},41:function(e,t,r){e.exports={menu_item__link:"menu-item_menu_item__link__7BC_U",menu_item__link_style_unactive:"menu-item_menu_item__link_style_unactive__1g--Z",menu_item__link_style_active:"menu-item_menu_item__link_style_active__3HIBp"}},42:function(e,t,r){e.exports={burgeringredients_card:"burger-ingredients-card_burgeringredients_card__36h5k",burgeringredients_card__ingredient_price:"burger-ingredients-card_burgeringredients_card__ingredient_price__1G5Iw",burgeringredients_card__ingredient_name:"burger-ingredients-card_burgeringredients_card__ingredient_name__-GGUT"}},64:function(e,t,r){e.exports={burgeringredients__tab_selector:"burger-ingredients_burgeringredients__tab_selector__2Kr0J",burgeringredients__scroll_container:"burger-ingredients_burgeringredients__scroll_container__HfQOK"}},65:function(e,t,r){e.exports={modal__space:"modal_modal__space__lmCTc",modal__close_icon:"modal_modal__close_icon__8g-C1"}},89:function(e,t,r){e.exports={burger_ingredients_list:"burger-ingredients-category_burger_ingredients_list__2Jwyq"}},90:function(e,t,r){e.exports={overlay:"modal-overlay_overlay__2GbMP"}},98:function(e,t,r){}},[[180,1,2]]]);
//# sourceMappingURL=main.c5e5b07c.chunk.js.map