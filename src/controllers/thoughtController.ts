import { Thought, User } from '../models/index.js';
import { Request, Response } from 'express';


  
  // finds all the applications and returns them as JSON
  export const getThought = async (_req: Request, res: Response) => {
    try {
      const thought = await Thought.find();
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  }


  // finds the application by id and returns the application document as JSON response
  export const getSingleThought = async (req: Request, res: Response) => {
    try {
      const thought = await Thought.findOne({ _id: req.params. thoughtId });  // thoughts/:thoughtId

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(thought);
      return;
    } catch (err) {
      res.status(500).json(err);
      return;
    }
  }

// adds an thought to the database
// adds a reference (id) from the application to the users application array
  export const createThought = async (req: Request, res: Response) => {
    try {
      const thought = await Thought.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { thoughts: thought._id } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({
          message: 'Thought created, but found no user with that ID',
        })
      }

      res.json('Created the thought 🎉');
      return;
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
      return;
    }
  }
  

  // find the application by id and sets the thought to the request body
  export const updateThought = async (req: Request, res: Response) => {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }

      res.json(thought);
      return;
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
      return;
    }
  }


  // find the thought by Id from thoughts collection
  // returns 404 if we try to delete a thought that doesnt exist. no thought id
  //   AND
  // find thought and $pull (delete)
  export const deleteThought = async (req: Request, res: Response) => {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }

      const user = await User.findOneAndUpdate(
        { thoughts: req.params.thoughtId },
        { $pull: { thoughts: req.params.thoughtId } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({
          message: 'Thought deleted but no user with this id found!',
        });
      }

      res.json({ message: 'Thought successfully deleted!' });
      return;
    } catch (err) {
      res.status(500).json(err);
      return;
    }
  }


  //  add the post body to the reactions array in the thought model
  // that matches the parameter thoughtId, only if that reaction is not already in the reactions array ($addToSet)
  export const addReaction = async (req: Request, res: Response) => {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }

      res.json(thought);
      return;
    } catch (err) {
      res.status(500).json(err);
      return;
    }
  }


  // find the thought by the id from the parameters
  // and remove the reaction from the thought
  // by removing the reaction data from the Thoughts's reactions array 
  export const removeReaction = async (req: Request, res: Response) => {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }

      res.json(thought);
      return;
    } catch (err) {
      res.status(500).json(err);
      return;
    }
  }

