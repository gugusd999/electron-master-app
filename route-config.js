// jika halaman tidak ada
// membuat login system

root.err = function(){
    console.log('error');
}


root.loginData = null;

root.verify = function(a){

    // make verify
    if (root.loginData === null) {
        console.log(a);
        rootCall('page/login', arguments);
    }else{
        return root.loginData;
    }

}

root.get('/menu', function(){
    rootCall('page/menu', arguments);
})

root.get('/home', function(){
    rootCall('page/home', arguments);
}, false)

root.get('/about', function(){
    rootCall('page/about', arguments)
})

root.get('/setting', function(){
    rootCall('page/setting', arguments)
})

// halaman pertama kali di load
root.start('/home');