const express= require("express");

const app= express();


// index route
app.get('/', (req, res) => {
  res.send("home");
  
});
// about 
app.get('/about', (req, res) => {
  res.send("about");
  
});


const Port=3000;

app.listen(Port, () => {
  console.log(`App listening on port ${Port}!`);
});