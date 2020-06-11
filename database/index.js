const express=require("express");
const bodyparser=require("body-parser");
const cors=require("cors");
const db=require('./query');
const app=express();
const port=3111;
app.use(cors());
app.use(bodyparser.json());
app.use(
    bodyparser.urlencoded({
        extended:true,
    })
);


app.get('/getacctype',db.getacctype);
app.post('/addsignup',db.addsignup);
app.get('/getsignup',db.getsignup);
app.delete('/deletesignup/:sid',db.deletesignup);
app.put('/updatesignup',db.updatesignup);
app.get('/getsignupbyid/:sid',db.getsignupbyid);
app.post('/getlogin',db.getlogin);
app.get('/getuserprofilebyid/:sid',db.getuserprofilebyid);
app.get('/getcontactdetails',db.getcontactdetails);
app.post('/addcontactdetails',db.addcontactdetails);
app.delete('/deletecontactdetails/:cid',db.deletecontactdetails);
app.post('/')
app.get('/',(request,response)=>{
    response.json({info:'Node.js,Express, and Postgres API'});
});
app.listen(port,()=>{
    console.log(`App running on port ${port}.`);
})