const {Router} = require('express');
const UsuariosController = require('../controllers/usuarios.controller.js');
const jwtValidator = require('../middlewares/jwtValidator.js');
const checkFields = require('../middlewares/validateFields.js');
const { check } = require("express-validator");

const router = Router();

router.get('/',
[
    check('jwt').not().isEmpty(),
    checkFields
],
jwtValidator, UsuariosController.getClient); //GET USER
router.get('/:id',[
    check('jwt').not().isEmpty(),
    checkFields
],jwtValidator,UsuariosController.getClientById); //GET USER BY ID

router.post('/',[
    check('jwt').not().isEmpty(),
    check('Usuarios.name').not().isEmpty(),
    check('Usuarios.pass').not().isEmpty(),

    checkFields
],jwtValidator,UsuariosController.createClient); //POST Users





module.exports = router;