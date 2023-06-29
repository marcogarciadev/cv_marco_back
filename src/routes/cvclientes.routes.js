const {Router} = require('express');
const CvClientesController = require('./controllers/cvclientes.controller.js');
const jwtValidator = require('./middlewares/jwtValidator.js/index.js');
const checkFields = require('./middlewares/validateFields.js/index.js');
const { check } = require("express-validator");

const router = Router();

router.get('/',
[
    check('jwt').not().isEmpty(),
    checkFields
],
jwtValidator, CvClientesController.getClient); //GET CLIENT
router.get('/:id',[
    check('jwt').not().isEmpty(),
    checkFields
],jwtValidator,CvClientesController.getClientById); //GET CLIENT BY ID

router.post('/',[
    check('jwt').not().isEmpty(),
    check('Client.name').not().isEmpty(),
    check('Client.email').not().isEmpty(),
    check('Client.phone').not().isEmpty(),
    check('Client.subjet').not().isEmpty(),
    check('Client.message').not().isEmpty(),
    checkFields
],jwtValidator,CvClientesController.createClient); //POST CLIENTS





module.exports = router;