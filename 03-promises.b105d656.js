!function(){var e=document.querySelector('input[name="delay"]'),n=document.querySelector("input[name='step']"),o=document.querySelector("input[name='amount']"),t=document.querySelector(".form");console.log(e),t.addEventListener("submit",setTimeout((function(){parseInt(e.value);for(var t=parseInt(n.value),c=parseInt(o.value),a=0;a<c;a++)(void Math.random()).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),t}),1e3))}();
//# sourceMappingURL=03-promises.b105d656.js.map
