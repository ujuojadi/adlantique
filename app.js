const express = require('express');
const app = express();
const path = require('path');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')));



app.get('/adlantique', (req, res)=>{
    res.render('adlantique/home', {title:'home'});
});
app.get('/adlantique/contactus', (req, res)=>{
    res.render('adlantique/contactus', {title:'contactus'});
});
app.get('/adlantique/bundles', (req, res)=>{
    res.render('adlantique/bundles', {title:'bundles'});
});
app.get('/adlantique/services', (req, res)=>{
    res.render('adlantique/services', {title:'services'});
});
app.get('/adlantique/signup', (req, res)=>{
    res.render('adlantique/signup', {title:'signup'});
});

app.get('/adlantique/login', (req, res)=>{
    res.render('adlantique/login', {title:'login'});
});
app.get('/adlantique/aboutus', (req, res)=>{
    res.render('adlantique/aboutus', {title:'aboutus'});
});



// app.use((err, req, res, next) => {
//     const { statusCode = 500 } = err;
//     if (!err.message) err.message = 'Oh No, Something Went Wrong!'
//     res.status(statusCode).render('error', { err })
// })


app.listen(3000, ()=>{
    console.log('Serving on port 3000')
})