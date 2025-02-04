import jwt from "jsonwebtoken";

export const authUser = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.header.authorization.split(" ")[1];

    if (!token) {
      res.status(401).send("Unauthorized User");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).send("Unauthorized User");
  }
};
