const customerSchema = require("../model/CustomerModel");
const fishermanSchema = require("../model/FishermanModel");
const adminSchema = require("../model/AdminModel");
const CryptoJs = require("crypto-js");
const CRYPTO_SECRET = require("../config/secret").CRYPTO_SECRET;
const JWT_SECRET = require("../config/secret").JWT_SECRET;
const jwt = require("jsonwebtoken");
const fs =require("fs");
// const path =require ("path");

const authController = {
  async customerRegister(req, res, next) {
    const newCustomer = new customerSchema({
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
      password: CryptoJs.AES.encrypt(
        req.body.password,
        CRYPTO_SECRET
      ).toString(),
      contact: req.body.contact,
    });

    try {
      await newCustomer.save();
      res.status(201).json({
        msg: "Register successfully! Please login",
      });
    } catch (err) {
      next(err);
    }
  },

  async fishermanRegister(req, res, next) {
    if (!req.file) {
      return res.status(401).json({msg:"Image is required"});
    }
    const img = req.file.path;
    const newCustomer = new fishermanSchema({
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
      password: CryptoJs.AES.encrypt(
        req.body.password,
        CRYPTO_SECRET
      ).toString(),
      contact: req.body.contact,
      liscence: img,
    });

    try {
      await newCustomer.save();
      // console.log(newCustomer)
      res.status(201).json({
        msg: "Register successfully! Please login",
      });
    } catch (err) {
      fs.unlink(`${appRoot}/${img}`, (err) => {
        console.log("deleted");
     })
     next(err)
    }
  },
  
  async adminRegister(req, res, next) {
    const newCustomer = new adminSchema({
      name: req.body.name,
      email: req.body.email,
      password: CryptoJs.AES.encrypt(
        req.body.password,
        CRYPTO_SECRET
      ).toString(),
    });

    try {
      await newCustomer.save();
      res.status(201).json({
        msg: "Register successfully! Please login",
      });
    } catch (err) {
      next(err);
    }
  },
  async customerLogIn(req, res, next) {
    const { email, password } = req.body;
    try {
      const isExist = await customerSchema.findOne({ email: email });
      if (!isExist) {
        res.status(404).json("User not found");
      }

      const hashPassword = CryptoJs.AES.decrypt(
        isExist.password,
        CRYPTO_SECRET
      );
      const originalPassword = hashPassword.toString(CryptoJs.enc.Utf8);

      originalPassword !== password && res.statsus(401).json({msg:"Wrong password"});

      const generateToken = jwt.sign(
        {
          id: isExist._id,
          role: isExist.role,
        },
        JWT_SECRET
      );    
      res.status(200).json({
        msg: "Login successfully",
        accessToken: generateToken,
      });
    } catch (err) {
      next(err);
    }
  },
    async fishermanLogIn(req,res,next){
      const { email, password } = req.body;
    try {
      const isExist = await fishermanSchema.findOne({ email: email });
      if (!isExist) {
        res.status(404).json("User not found");
      }

      const hashPassword = CryptoJs.AES.decrypt(
        isExist.password,
        CRYPTO_SECRET
      );
      const originalPassword = hashPassword.toString(CryptoJs.enc.Utf8);

      originalPassword !== password && res.statsus(401).json({msg:"Wrong password"});

      const generateToken = jwt.sign(
        {
          id: isExist._id,
          role: isExist.role,
        },
        JWT_SECRET
      );    
      res.status(200).json({
        msg: "Login successfully",
        accessToken: generateToken,
      });
    } catch (err) {
      next(err);
    }
    },
  async adminLogIn(req, res, next) {
    const { email, password } = req.body;
    try {
      const isExist = await adminSchema.findOne({ email: email });
      if (!isExist) {
        res.status(404).json("User not found");
      }

      const hashPassword = CryptoJs.AES.decrypt(
        isExist.password,
        CRYPTO_SECRET
      );
      const originalPassword = hashPassword.toString(CryptoJs.enc.Utf8);

      originalPassword !== password && res.statsus(401).json("Wrong password");

      const generateToken = jwt.sign(
        {
          id: isExist._id,
          role: isExist.role,
        },
        JWT_SECRET
      );
      res.status(200).json({
        msg: "Login successfully",
        accessToken: generateToken,
      });
    } catch (err) {
      next(err);
    }
  },
};

module.exports = authController;
