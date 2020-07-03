// set db

// karna saya belum install maka install 
// dulu
const $ = require('jquery');

$('body').on('submit', 'form#login', function(event){
    event.preventDefault();
    let data = $(this).serializeArray();
    // cek user jika tersedia
    console.log('cek form');
    // ok selanjutnya menghubungkan dengan form
    DB.query(`SELECT * FROM user WHERE username = "${data[0].value}" AND password="${data[1].value}"`, (a)=>{
        console.log(a);
    })
})

