const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Contact = require("../models/contactus");

const register = (body) => {
  return User.create(body);
};

const login = async (body) => {
  let { userEmail, password } = body;
  const user = await User.findOne({ userEmail });
  const valid = await bcrypt.compare(password, user.password);
  const userName = user.userName;
  const userPassword = user.password;
  const userId = user._id;
  console.log("auth Controllers", userId);
  console.log("auth Controllers", userPassword);

  if (!valid) {
    throw "UN_AUTH";
  } else {
    return {
      token: jwt.sign(
        {
          userEmail,
          userId: user.id,
        },
        "gytrfdtrdjtfyuhnjinkjklsaaolkyygydssiphazemh",
        { expiresIn: "8d" }
      ),
      userEmail,
      userName,
      userId,
      userPassword,
    };
  }
};
const contactUs = async (body) => {
  console.log(body);
  return Contact.create(body);
};

const profileEdit = async (body) => {
  let password = "";
  console.log("server auth", body.userPassword.charAt(0));
  const FChar = body.userPassword.charAt(0);
  if (FChar === "$") {
    password = body.userPassword;
  } else {
    const salt = bcrypt.genSaltSync(10);
    password = bcrypt.hashSync(body.userPassword, salt);
  }
  User.findByIdAndUpdate(
    body.userId,
    { userName: body.userName, password : password },
    function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        console.log("Updated User : ", docs);
      }
    }
  );
  return true;
};

module.exports = {
  register,
  login,
  contactUs,
  profileEdit,
};
