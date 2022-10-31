import express from 'express';
import es6Renderer from 'express-es6-template-engine';
const app = express();


// ======================================================= setting the engine to html and css

app.use(express.static('public'));
app.engine('html', es6Renderer);
app.set('/html/struct', 'views');
app.set('view engine', 'html');
 
app.get('/', function(req, res) {

  res.render('struct');
  
});

app.get('/myacc', function(req, res) {
   res.render('myAcc')
   
});

app.get('/conv', function(req, res) {
  res.render('conv')

})

app.get('/myport', function(req, res){
  res.render('port')
})


// ================================================================Creating server at port 3000

app.listen(3000,function(req,res){
    console.log('started listening at server 3000')
})

