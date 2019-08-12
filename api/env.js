module.exports = (req, res) => {
  res.end(`current NODE_ENV: ${process.env.NODE_ENV}`);
}