	const debounce=(f,v=300)=>{
		const w=window,a=w.clearTimeout,b=w.setTimeout;
		let c;
		return o=>{
			a(c);
			c=b(()=>{f(o)},v)
		}
	};
	window.addEventListener('resize',debounce(event=>{
		console.info('resized');
		console.dir(event);
	}));

/*
const debounce=(c,t=300)=>{
		const w=window;
		return o=>{
			w.clearTimeout(c.timeOut);
			c.timeOut=w.setTimeout(()=>{c(o)},t)
		}
	};
	window.addEventListener('resize',debounce(event=>{
		console.info('resized');
		console.dir(event);
	}));
*/
