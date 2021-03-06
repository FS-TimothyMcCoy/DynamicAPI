const user = require('../../models/user')

module.exports = (express) => {
const router = express.Router();

router.get('/users', (req, res) => {
    user.findAll( (err) => {
        res.status(500).json(err);
    }, (data) => {
        res.status(200).json(data);
    })
  });

//Create
router.post('/users', (req, res) => {
    user.create(req.body, (err) => {
        res.status(500).json(err);
    }, (data) => {
        res.status(200).json(data);
    })
});

return router;

}
