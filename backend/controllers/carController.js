const Car = require('../models/Car');
const cloudinary = require('../config/cloudinaryConfig');

// Create a new car
exports.createCar = async (req, res) => {
  const { title, description, tags, images } = req.body;
  try {
    // Upload images to Cloudinary
    const uploadedImages = [];
    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.uploader.upload(images[i], { folder: 'cars' });
      uploadedImages.push(result.secure_url);
    }

    const car = new Car({
      title,
      description,
      tags,
      images: uploadedImages,
      user: req.user.id
    });

    await car.save();
    res.status(201).json({ message: 'Car created successfully', car });
  } catch (error) {
    res.status(500).json({ message: 'Error creating car', error });
  }
};

// Get all cars for a user
exports.getCars = async (req, res) => {
  try {
    const cars = await Car.find({ user: req.user.id });
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cars', error });
  }
};
