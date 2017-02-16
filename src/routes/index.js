module.exports = (express) => {
    const router = express.Router();

    router.post('/status', (req, res) => {
        res.json({
            healthy: true,

        })

    });

    return router;

}
