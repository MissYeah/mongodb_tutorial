const {
    Schema,
    model,
    Types: { ObjectId },
} = require("mongoose");

const CommentSchema = new Schema(
    {
        content: { type: String, required: true },
        user: { type: ObjectId, require: true, ref: "user", index: true },
        userFullName: { type: String, required: true },
        blog: { type: ObjectId, require: true, ref: "blog" },
    },
    { timestamps: true }
);

CommentSchema.index({ blog: 1, createdAt: -1 });

const Comment = model("comment", CommentSchema);

module.exports = { Comment, CommnentSchema: CommentSchema };
