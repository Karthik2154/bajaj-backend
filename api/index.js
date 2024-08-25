const app = require('../index');

module.exports = (req, res) => {
    if (req.method === 'POST') {
        return app._router.stack[1].route.stack[0].handle(req, res);
    } else if (req.method === 'GET') {
        return app._router.stack[2].route.stack[0].handle(req, res);
    }
};
