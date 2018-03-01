const win=window;
 
let debounce=(f,n=300)=>{
	const c=win.clearTimeout,s=win.setTimeout;
	let e;
	return (x)=>{c(e);e=s(()=>{f(x)},n)}
};

//Test:
win.addEventListener('resize',debounce(evt=>{
	console.dir(evt);
}));

debounce=null;
