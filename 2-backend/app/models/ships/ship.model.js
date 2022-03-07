module.exports = mongoose => {

    var schema = mongoose.Schema(
      {
        src: String,
        alt: String,
        name: String,
        description: String,
        nation: String,
        type: String,
        caliber: Number,
        speed: Number,
        unit: String,
        planes: Number,
        crew: Number
      },
      { versionKey: false, timestamps: { createdAt: true, updatedAt: false } }
    );
  
    const Ship = mongoose.model("ship", schema);
    return Ship;
};