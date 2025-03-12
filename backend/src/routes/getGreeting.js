const GREETING = 'Prosaurus Breakroom';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
