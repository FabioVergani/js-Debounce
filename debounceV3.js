const c$t=$.clearTimeout,s$t=$.setTimeout,debounce=(a,b)=>{let x;return ()=>{c$t(x);x=s$t(a,b)}},at=(a,b,c)=>{const f=()=>{a.removeEventListener(b,c)};f();a.addEventListener(b,c);return f};


at(xxx,'xxx',debounce(()=>{},300));
