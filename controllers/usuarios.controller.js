const UsuariosService = require("./services/usuarios.service.js");
let instance = null;

class UsuariosController {
  static getInstance() {
    if (!instance) {
      return new UsuariosController();
    }
    return instance;
  }

  async getUser(req, res) {
    try {
      const user = await UsuariosService.getProducts();
      return res.status(200).json(user);
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        method: "getUser",
        message: err,
      });
    }
  }

  async getUserById(req, res) {
    try {
      const id = req.params.id;
      let user = await UsuariosService.getUserById(id);
      if (!user) {
        return res.status(404).json({
          method: "getProductById",
          message: "Not Found",
        });
      }
      return res.status(200).json(User);
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        method: "getUserById",
        message: err,
      });
    }
  }

  async createUser(req, res) {
    try {
      const { user } = req.body;
      let isRegistered = await UsuariosService.isUserRegistered(
        user.email
      );
      if (!isRegistered) {
        let newuser = await UsuariosService.createUser(user);

        return res.status(201).json({
          message: "Created!",
          usuario: newuser,
        });
      }
      return res.status(400).json({
        message: "The User is already registered",
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        method: "createUser",
        message: err.message,
      });
    }
  }
}
module.exports = new UsuariosController();