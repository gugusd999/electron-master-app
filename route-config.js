// jika halaman tidak ada

root.err = function(){
    alert('error');
}

root.get('/login', function(){
    rootCall('page/login', arguments);
})

root.get('/home', function(){
    rootCall('page/home', arguments);
})

root.get('/about', function(){
    rootCall('page/about', arguments)
})

root.get('/contact', function(){
    rootCall('page/contact', arguments)
})

root.get('/setting', function(){
    rootCall('page/setting', arguments)
})

// halaman pertama kali di load
root.start('/home');