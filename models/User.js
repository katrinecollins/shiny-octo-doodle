const { Schema, model } = require('mongoose');
const { User } = require('.');

const UserSchema = new Schema(
    {
       name: {
          type: String,
          unique: true,
          require: true,
          trim: true
      },
       email: {
           type: String,
           require: true,
           unique: true,
           match: []
       },
       thoughts: {
           //Array of id values referencing thought model
           type: Schema.Types.ObjectId,
           ref: 'Thought'
       },
       userFriends: {
           //Array of id values refrencing the User model(self reference)
           type: Schema.Types.ObjectId,
           ref: 'User'
       }
        
    }
)