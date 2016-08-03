function debounce(f,n){
	var t,w=window;
	return function(){
		var o=w,m=arguments;
		o.clearTimeout(t);
		t=o.setTimeout(function(){f.apply(this,m);},n);
	};
};

//Test:
var debounced = debounce(function(evt){
 console.dir(evt);
 alert('debounced');
},300);
//
window.addEventListener('resize',debounced);
