(w=>{
	const console=w.console,
	//
	debounced=(f,i=300)=>{
		const a=w.setTimeout,b=w.clearTimeout;
		let e;
		return x=>{
			b(e);
			//console.info('cleared timeOut-id:',e);
			e=a(()=>{f(x)},i)
		}
	};
	//
	w.addEventListener('resize',debounced(event=>{
		console.info('resize:%O',event)
	}));
})(window);
