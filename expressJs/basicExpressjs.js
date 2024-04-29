// const express = require('express');
// const app = express();
// app.get('',(req, res)=>{
//     console.log("data Send by browser ", req.query);   //localhost:5000/?name=sneha  it;s called server se request krna
//     res.send('hello this is a home page'+'req.query.name');
// })  
// //how to render html
// // req.qurey.name -> to get value of parameter
// // you can also link pages using anchor tag 
// // you can perform all operation which you are doing by the help of html css
// app.get('/about',(req, res)=>{
//     res.send(`<h1>hello this is a about page</h1>
    
//     <input type= "text" placeholder="userName" value = "${req.qurey.name}"/>
//     <a href="/help">go to help page</a>
//     <button>Click Me </button>
//     `
// );
// })
// app.get('/help', (req, res) => {   
//     // how to rendor json data on page

//   res.send({     
//     name: 'sneha',
//     email: 'iit2021132@iiita.ac.in'
//   },
//   {
//     name: 'rahul',
//     email:'rahul@gmail.com'
//   }

// );
// });
// app.listen(5000);
const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, 'public')
app.get('', (_, resp)=>{
  resp.sendFile(`${publicPath}/index.html`)
})
app.get('about', (_, resp) => {
  resp.sendFile(`${publicPath}/about.html`);
});
app.get('help', (_, resp) => {
  resp.sendFile(`${publicPath}/help.html`);
});
app.listen(5000);