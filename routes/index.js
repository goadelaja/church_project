const express = require('express');
const router = express.Router();

//homepage
router.get('/', (req, res, next)=>{
    return res.render('index', {title : 'Home Page'});
});

//Programs
router.get('/programs', (req, res, next) => {
    return res.render('programs', { title: 'Programs' });
});

//contact
router.get('/contact', (req, res, next) => {
    return res.render('contact', { title: 'Contact Us' });
});

//about
router.get('/about', (req, res, next) => {
    return res.render('about', { title: 'About Us' });
});




module.exports = router;
