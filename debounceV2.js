function debounce(a,b){
	const w=window;
	let x;
	return function(){
		w.clearTimeout(x);
		x=w.setTimeout(function(){a.apply(this,arguments)},b);
	};
};

//Test:
window.addEventListener('resize',debounce(function(evt){
 console.dir(evt);
 alert('debounced');
},300));
