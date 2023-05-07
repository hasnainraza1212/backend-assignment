

const express = require('express');
const app = express();
const port = 2800;
app.get('/', (req, res) =>{
  res.send(`hello home at port ${port}`)
})

app.get('/about', (req, res) => {
  res.send("<h1>list of programmers</h1> <br> <ul><li>osama</li> <li>moiz</li> <liarslan</li> <li>shaheer</li> <li>saddam</li> <li>hassan</li> <li>talha</li> <li>ibrahim</li> <li>kanchan</li> <li>ayesha</li> <li>sualiha</li> <li>aiman</li><li>hasnain</li></ul>")
});

app.get('/about/moiz', (req, res) => {
  res.send("<h1>I'm moiz</h1>")
});

app.get('/about/osama', (req, res) => {
  res.send("<h1>I'm osama</h1>")
})


app.get('/about/arslan', (req, res) => {
  res.send("<h1>I'm arslan</h1>")
});


app.get('/about/shaheer', (req, res) => {
  res.send("<h1>I'm shaheer</h1>")
});

app.get('/about/saddam', (req, res) => {
  res.send("<h1>I'm saddam</h1>")
})


app.get('/about/hassan', (req, res) => {
  res.send("<h1>I'm hassan</h1>")
});



app.get('/about/talha', (req, res) => {
  res.send("<h1>I'm talha</h1>")
});

app.get('/about/ibrahim', (req, res) => {
  res.send("<h1>I'm ibrahim</h1>")
})


app.get('/about/kanchan', (req, res) => {
  res.send("<h1>I'm kanchan</h1>")
});


app.get('/about/ayesha', (req, res) => {
  res.send("<h1>I'm ayesha</h1>")
});

app.get('/about/aiman', (req, res) => {
  res.send("<h1>I'm aiman</h1>")
})


app.get('/about/sualiha', (req, res) => {
  res.send("<h1>I'm sualiha</h1>")
});


app.get('/about/hasnain', (req, res) => {
  res.send("<h1>I'm Hasnain</h1>")
});



app.listen(port, ()=>{
  console.log(`app is runnning at port ${port}`);
});