module.exports = (req, res) => {
  res.end(process.env.NODE_ENV)
}