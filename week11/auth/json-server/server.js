const fs = require('fs');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const server = jsonServer.create();
const router = jsonServer.router('./database.json');

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

const SECRET_KEY = '123456789';

// token timeout is set here
const expiresIn = '1m';

// Create a token from a payload
function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

// Verify the token
function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) => {
    if (err) {
      throw Error(err);
    } else {
      return decode;
    }
  });
}

// Check if the user exists in database
function isAuthenticated({ email, password }) {
  return (
    //userdb.users.findIndex(user => user.username === username && user.password === password) !== -1
    router.db
      .get('users')
      .findIndex(user => user.email === email && user.password === password)
      .value() !== -1
  );
}

server.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (isAuthenticated({ email, password }) === false) {
    const status = 401;
    const message = 'Incorrect username or password';
    res.status(status).json({ status, message });
    return;
  }
  const accessToken = createToken({ email, password });
  res.status(200).json({ accessToken });
});
server.use((req, res, next) => {
  if (req.method === 'POST') {
    const { authorization } = req.headers;
    if (authorization) {
      const [scheme, token] = authorization.split(' ');
      //jwt.verify(token, 'json-server-auth-123456');
      // Add claims to request
      req.claims = verifyToken(token);
      req.body.userId = req.claims.email;
    }
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});
server.use(/^(?!\/auth).*$/, (req, res, next) => {
  if (
    req.headers.authorization === undefined ||
    req.headers.authorization.split(' ')[0] !== 'Bearer'
  ) {
    const status = 401;
    const message = 'Error in authorization format';
    res.status(status).json({ status, message });
    return;
  }
  try {
    console.log('checking token');
    verifyToken(req.headers.authorization.split(' ')[1]);

    next();
  } catch (err) {
    const status = 401;
    const message = err.message;
    res.status(status).json({ status, message });
  }
});

server.use(router);

server.listen(3000, () => {
  console.log('Run Auth API Server');
});
