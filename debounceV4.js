	const w=window,
	debounced=(f,i=300)=>{
		const a=w.setTimeout,b=w.clearTimeout;
		let e;
		return (...args)=>{
			b(e);
			e=a(()=>{f.apply(null,args)},i)
		}
	};
	//
	w.addEventListener('resize',debounced(event=>{
		console.info('resize:%O',event)
	}));
