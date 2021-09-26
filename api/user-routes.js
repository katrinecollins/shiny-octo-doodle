const { Schema, model } = require('mongoose');
const { User } = require('.');

const UserSchema = new User(
    {
      userName: {
          type: String,
          unique: true,
          require: true,
          trim: true
      },
       userEmail: {
           type: String,
           require: true,
           unique: true,
           //valid email address
       },
       userThoughts: {
           //Array of id values referencing thought model
       },
       userFriends: {
           //Array of id values refrencing the User model(self reference)
       }
        
    }
)