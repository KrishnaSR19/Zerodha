const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res) => {
  try {
    // Extract user details from the request body
    const { email, password, username, createdAt } = req.body;

    // Check if a user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    // Create a new user in the database
    const user = await User.create({ email, password, username, createdAt });

    // Generate a JWT token for the user
    const token = createSecretToken(user._id);

    // Set the token in a cookie
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false, // Set to true in production
    });

    // Send a success response
    res.status(201).json({ message: "User signed in successfully", success: true, user });

  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.Login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if(!email || !password ){
        return res.json({message:'All fields are required'})
      }
      const user = await User.findOne({ email });
      if(!user){
        return res.json({message:'Incorrect password or email' }) 
      }
      const auth = await bcrypt.compare(password,user.password)
      if (!auth) {
        return res.json({message:'Incorrect password or email' }) 
      }
       const token = createSecretToken(user._id);
       res.cookie("token", token, {
         withCredentials: true,
         httpOnly: false,
       });
       res.status(201).json({ message: "User logged in successfully", success: true });
    } catch (error) {
      console.error(error);
    }
  }
