const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const reactionSchema = require("./Reaction");

// const ReactionSchema = new Schema(
//   {
//     // set custom id to avoid confusion with parent thought _id
//     reactiontId: {
//       type: Schema.Types.ObjectId,
//       default: () => new Types.ObjectId()
//     },
//     reactionBody: {
//       type: String,
//       required: true,
//       maxlength: 280
//     },
//     username: {
//       type: String,
//       required: true
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now,
//       get: createdAtVal => dateFormat(createdAtVal)
//     }
//   },
//   {
//     toJSON: {
//       getters: true
//     }
//   }
// );

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: "Leave a thought, please.",
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);

ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
