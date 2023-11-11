const express = require('express');
const User = require('../model/user');

//auth route
const auth = express.Router();


//register 
auth.post('/register',async function(req,res){
    const {
        name,
        rollno,
        email,
        password,
    } = req.body;


    console.log(req.body);


    try{

          const userDoc = await User.create({
            name:name,
            rollno:rollno,
            email:email,
            password:password

          });

          res.status(200).json({
            message: "successfull"
          })
      

    }catch(e){

        res.status(422).json({'message': 'Somthing went wrong'})

    } 
})

//login
auth.post('/login',async function(req,res){

    
    const { rollno,password } = req.body;
    const user = await User.findOne({rollno});

    try{

       if(user){

         const  isAuth = password == user.password
         if(isAuth){

            res.status(200).json({
                'rollno': user.rollno
            });

         }else{
            res.status(401).json({message:'password increect'})
         }


       }else{

        res.status(404).json({message : "Not found"})
       }

    


    }catch(e){

        res.status(422).json({
            message : 'Something went wrong'
        });

    }
});

//get details 

auth.get('/profile/:id',async function(req,res){

    const rollno = req.params.id;
    const user = await User.findOne({rollno});
    if(user){
        res.status(200).json({
            'name' : user.name,
            'rollno' : user.rollno,
            'email' : user.email

        })
    }else{
        res.status(404).json({message:'Not found'})
    }

})

module.exports = auth