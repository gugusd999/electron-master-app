// root membutuhkan axios

const axios = require('axios');


const rootCall = function (a, b){
    axios.get(a+'.js').then(function(res){
        eval(
            'const funcCall = '+res.data+`
            funcCall.apply(null, b);`
        );
    })
}


var root = {}

// data rooting
root.data = {}

root.get = function (a, func){
    root.data['#'+a] = func;
}

root.start = function(a){
    var location = window.location;
    if(location.hash != ""){
        var link = location.hash;
        var target = location.hash;
            
        var rootKey =  Object.keys(root.data);
        rootKey = rootKey.filter(function(item){
            if(target.indexOf(item) != -1){
                return item;
            }
        })[0];

        target = target.replace(rootKey, "").split("/");

        target.shift();
        
        window.location.hash = link;
        if(root.data[rootKey] != undefined){
            root.data[rootKey].apply(null, target);
        }else{
            root.err();
        }
    }else{
        location.hash = "#"+a;
        var link = location.hash;
        var target = location.hash;
        var rootKey =  Object.keys(root.data);
        rootKey = rootKey.filter(function(item){
            if(target.indexOf(item) != -1){
                return item;
            }
        })[0];

        target = target.replace(rootKey, "").split("/");

        target.shift();
        
        window.location.hash = link;
        if(root.data[rootKey] != undefined){
            root.data[rootKey].apply(null, target);
        }else{
            root.err();
        }
    }
}
// how about parameter ???....

// rootcall
document.querySelectorAll('[root]').forEach(function(item){
    item.addEventListener('click', function(event){
        event.preventDefault()

        var link = '#'+event.target.getAttribute('root');
        var target = '#'+event.target.getAttribute('root');
        
        var rootKey =  Object.keys(root.data);

        rootKey = rootKey.filter(function(item){
            if(target.indexOf(item) != -1){
                return item;
            }
        })[0];

        target = target.replace(rootKey, "").split("/");

        target.shift();
        
        window.location.hash = link;
        if(root.data[rootKey] != undefined){
            root.data[rootKey].apply(null, target);
        }else{
            root.err();
        }
    })
})
