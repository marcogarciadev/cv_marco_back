const CvclientesModel = require("../models/cvclientes");

class CvclientesService {
  async getClient() {
    try {
      const client = await CvclientesModel.find();
      return client;
    } catch (err) {
      console.error(err);
      throw new Error("Error in getClient Service");
    }
  }

  async getClientById(id) {
    try {
      let client = await CvclientesModel.findOne({ _id: id });
      return client;
    } catch (err) {
      console.error(err);
      throw new Error("Error in getClientById Service");
    }
  }

  async isClientRegistered(email) {
    try {
      let client = await CvclientesModel.exists({ email });
      if (client) {
        return true;
      }
      return false;
    } catch (err) {
      console.error(err);
      throw new Error("Error in isClientRegistered Service");
    }
  }

  async createClient(client) {
    try {
      let savedClient = await CvclientesModel.create(client);
      return savedClient;
    } catch (err) {
      console.error(err);
      throw new Error("Error in createClient Service", err);
    }
  }
}

module.exports = new CvclientesService();
