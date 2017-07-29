/**
 * Created by Shagun on 14/04/2017.
 */
//get environment variables
require('dotenv').config();

var express=require('express');//middleware
var app=express();
var LanguageTranslatorV2 = require('watson-developer-cloud/language-translator/v2');
//IBM watson package for language translator
var language_translator = new LanguageTranslatorV2({
    username: process.env.username,
    password: process.env.password,
    url: 'https://gateway.watsonplatform.net/language-translator/api/'
});

app.get('/api',function (req,res) {

    var lang=req.param('word');
    language_translator.translate({
            text: lang, source : 'en', target: 'es' },
            //converting from english to spanish
        function (err, translation) {
            if (err)
                console.log('error:', err);
            else
                res.send(translation['translations'][0].translation);
        });



});
// http://localhost:7000/api?word="Hello"(for testing)
var server = app.listen(process.env.PORT || 7000, function(){
    console.log('Server listening on port 7000');
});
