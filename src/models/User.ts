import { Schema, model, Document, ObjectId } from 'mongoose';

interface IUser extends Document {
  userName?: string,
  email?: string,
  thoughts: ObjectId[],
  friends: ObjectId[],
}

// Schema to create User model
const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,

    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (value: string) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: 'Invalid email address format',
      },
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Friend'
      }
    ]
  },
  {

    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `friendCount` that gets the length of the user's friends array
userSchema.virtual('friendCount').get(function (this: IUser) {
  return this.friends.length;
});

// Initialize our User model
const User = model('user', userSchema);

export default User;
