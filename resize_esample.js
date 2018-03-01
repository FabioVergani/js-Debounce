(function(){

	const win=window;
	const on=(a,b)=>{win.addEventListener(a,b)};
	const debounce=(a,b=300)=>{let e=win;const c=e.clearTimeout,s=e.setTimeout;return (x)=>{c(e);e=s(()=>{a(x)},b)}};

	let orientationchanged=false, resized=false;

	on('orientationchange',debounce(event=>{
		console.info('oriented');
		console.dir(event);
	}));

	on('resize',debounce(event=>{
		console.info('resized');
		console.dir(event);
	}));

})();
