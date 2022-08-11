const { Schema, model } = require('mongoose');

const thoughtcShema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            max_length: 280
        },
        createdAt: {
            type: Date,
            default: Date.now()
        },
        username: {
            type: String,
            ref: 'User',
            require: true
        },
        reactions: []
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

thoughtcShema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// TO-DO: Getter method for date format

const Thought = model('thought', thoughtcShema);

module.exports = Thought;