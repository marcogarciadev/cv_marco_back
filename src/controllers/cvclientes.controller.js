const CvclientesService = require("../services/cvclientes.service.js");
let instance = null;

class CvClientesController {
  static getInstance() {
    if (!instance) {
      return new CvClientesController();
    }
    return instance;
  }

  async getClient(req, res) {
    try {
      const client = await CvclientesService.getProducts();
      return res.status(200).json(client);
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        method: "getClient",
        message: err,
      });
    }
  }

  async getClientById(req, res) {
    try {
      const id = req.params.id;
      let client = await CvclientesService.getClientById(id);
      if (!client) {
        return res.status(404).json({
          method: "getProductById",
          message: "Not Found",
        });
      }
      return res.status(200).json(client);
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        method: "getClientById",
        message: err,
      });
    }
  }

  async createClient(req, res) {
    try {
      const { client } = req.body;
      let isRegistered = await CvclientesService.isClientRegistered(
        client.email
      );
      if (!isRegistered) {
        let newClient = await CvclientesService.createClient(client);

        return res.status(201).json({
          message: "Created!",
          cliente: newClient,
        });
      }
      return res.status(400).json({
        message: "The Client is already registered",
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        method: "createClient",
        message: err.message,
      });
    }
  }
}
module.exports = new CvClientesController();
