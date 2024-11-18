import { Schema, model, Document } from 'mongoose';
import Reaction from './Reaction.js';

interface IThought extends Document {
  thoughtText: string,
  createdAt: Date,
  username: string,
  reactions: typeof Reaction[]
}

// Schema to create Post model
const thoughtSchema = new Schema<IThought>(
  {
    thoughtText: {
      type: String,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: { 
    type: String,
    required: true
  },
    reactions: [Reaction]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `upvoteCount` that gets the amount of comments per user
thoughtSchema.virtual('reactionCount').get(function (this: any) {
    return this.reactions.length;
  });

// Initialize our Post model
const Thought = model('Thought', thoughtSchema);

export default Thought;
