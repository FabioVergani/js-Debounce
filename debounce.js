/*
Returns a function (f), 
that, as long as it continues to be invoked, will not be triggered.
The function will be called after it stops being called for (n) milliseconds.
*/


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
