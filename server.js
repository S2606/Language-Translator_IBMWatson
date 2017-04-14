/**
 * Created by Shagun on 14/04/2017.
 */
//get environment variables
require('dotenv').config();

var express=require('express');
var app=express();
var LanguageTranslatorV2 = require('watson-developer-cloud/language-translator/v2');
var language_translator = new LanguageTranslatorV2({
    username: "e0568806-5154-4edb-9574-0a3094ce9fb7",
    password: "1SzwUQsLxntO",
    url: 'https://gateway.watsonplatform.net/language-translator/api/'
});

app.get('/api',function (req,res) {

    var lang=req.param('word');
    language_translator.translate({
            text: lang, source : 'en', target: 'es' },
        function (err, translation) {
            if (err)
                console.log('error:', err);
            else
                //var ans=tran.word_count;
                res.send(translation['translations'][0].translation);
        });



});

var server = app.listen(process.env.PORT || 7000, function(){
    console.log('Server listening on port 7000');
});