const jwt = require("jsonwebtoken");


class TokenService {
  constructor(secretKey) {
    this.secretKey = secretKey;
  }

  generateAccessToken(user) {
    return jwt.sign({ user }, this.secretKey, { expiresIn: "30d" });
  }

  generateRefreshToken(user) {
    return jwt.sign({ user }, this.secretKey, { expiresIn: "30d" });
  }

  verifyAccessToken(accessToken) {
    try {
      const decoded = jwt.verify(accessToken, this.secretKey);
      return decoded.user;
    } catch (error) {
      return null;
    }
  }

  refreshAccessToken(refreshToken) {
    try {
      const decoded = jwt.verify(refreshToken, this.secretKey);
      const user = decoded.user;
      return this.generateAccessToken(user);
    } catch (error) {
      return null;
    }
  }
}

module.exports = TokenService;