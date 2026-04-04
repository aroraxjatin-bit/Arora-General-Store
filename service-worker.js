self.addEventListener('install',e=>{
e.waitUntil(

caches.open('arora').then(cache=>{

return cache.addAll([

'index.html',

'manifest.json',

'icon.png'

]);

})

);

});