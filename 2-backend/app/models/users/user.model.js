module.exports = mongoose => {

    var schema = mongoose.Schema(
      {
        username: String,
        password: String
      },
      { versionKey: false, timestamps: { createdAt: true, updatedAt: false } }
    );
  
    const User = mongoose.model("user", schema);
    return User;
};