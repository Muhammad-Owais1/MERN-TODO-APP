import jwt from "jsonwebtoken";
import "dotenv/config";

const authentication = (req, res, next) => {
  console.log(req.headers);
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(403).send({
      status: 403,
      message: "No authorization header provided.",
    });
  }
  const token = authorization.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).send({
        status: 403,
        message: "Token verification failed.",
      });
    }
    req.user = user; // You can add the user info to the request object if needed
    next();
  });
};

export default authentication;
