const {
  add, subtract, multiply, divide, remainder,
} = require('../lib/numbers');

exports.add = (req, res) => {
  const isNumeric = (string) => {
    return !Number.isNaN(parseInt(string));
  };
  if (isNumeric(req.params.a) && isNumeric(req.params.b)) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.status(200).json({ result: add(a, b) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
};

exports.subtract = (req, res) => {
  const isNumeric = (string) => {
    return !Number.isNaN(parseInt(string));
  };
  if (isNumeric(req.params.a) && isNumeric(req.params.b)) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.status(200).json({ result: subtract(b, a) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
};

exports.multiply = (req, res) => {
  const isNumeric = (string) => {
    return !Number.isNaN(parseInt(string));
  };
  if (isNumeric(req.body.a) && isNumeric(req.body.b)) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.status(200).json({ result: multiply(a, b) });
  } else if (!req.body.a || !req.body.b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
};

exports.divide = (req, res) => {
  const a = req.body.a;
  const b = req.body.b;

  if (a === undefined || b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: divide(a, b) });
  }
};

exports.remainder = (req, res) => {
  if (req.query.a && req.query.b) {
    const { a, b } = req.query;
    res.status(200).json({ result: remainder(a, b) });
  } else {
    const a = req.body.a;
    const b = req.body.b;

    if (a === undefined || b === undefined) {
      res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
    } else if (b === 0) {
      res.status(400).json({ error: 'Unable to divide by 0.' });
    } else if (isNaN(a) || isNaN(b)) {
      res.status(400).json({ error: 'Parameters must be valid numbers.' });
    } else {
      res.status(200).json({ result: remainder(a, b) });
    }
  }
};

