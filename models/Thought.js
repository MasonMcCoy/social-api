const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
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
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        reactions: []
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

userSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;