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

root.verifydata = {}

root.verifydata.data = {}

root.get = function (a, func, verify = false){
    root.data['#'+a] = func;
    root.verifydata.data['#'+a] = verify;
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
            if (root.verifydata.data[rootKey] === true) {
                if (root.verify(rootKey) != false){
                    root.verify(rootKey)
                } else{
                    root.data[rootKey].apply(null, target);
                }
            }else if(root.verifydata.data[rootKey] === false){
                root.data[rootKey].apply(null, target);
            }
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

        document.querySelectorAll('[root]').forEach((item) => {
            item.setAttribute('class', '')
        })

        event.target.setAttribute('class', 'active');

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
        console.log(rootKey);
        if(root.data[rootKey] != undefined){
            if (root.verifydata.data[rootKey] === true) {
                if (root.verify(rootKey) != false){
                    root.verify(rootKey)
                } else{
                    root.data[rootKey].apply(null, target);
                }
            }else if(root.verifydata.data[rootKey] === false){
                root.data[rootKey].apply(null, target);
            }
        }else{
            root.err();
        }
    })
})
