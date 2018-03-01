(function(win){

	const del_T=win.clearTimeout, set_T=win.setTimeout;

	const debounce_on=(a,b,c=300)=>{
		let e;
		win.addEventListener(a,(o)=>{
			del_T(e);
			e=set_T(()=>{b(o)},c)
		})
	};

	let orientationchanged=false, resized=false;

	debounce_on('orientationchange',evt=>{
		console.info('oriented');
		console.dir(evt);
	});

	debounce_on('resize',evt=>{
		console.info('resized');
		console.dir(evt);
	});

})(window);
