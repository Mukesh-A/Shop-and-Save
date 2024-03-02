const passport = require("passport");

exports.isAuth = (req, re, done) => {
  // console.log("AAA", passport.authenticate("jwt"));

  return passport.authenticate("jwt");
};

exports.sanitizerUser = (user) => {
  return { id: user.id, role: user.role };
};
exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
    // console.log("req.cookies", token);
  }
  // token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTFhYTFjNDdlNTE5OTQ2ODdjMDA2YyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA5MzY4MDU2fQ.Oyt7KkkkssDl9nGrSz-5HWwVxFXZWfV3yl0j0MNwu2k";
  return token;
};
