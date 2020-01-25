module.exports = (req, res, next) => {
    req.header('STASH_CACHE', 'MISS');
}