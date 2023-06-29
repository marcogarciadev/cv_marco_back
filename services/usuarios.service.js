const UsuariosModel = require("../models/usuarios");

class UsuariosService {
  async getUser() {
    try {
      const user = await UsuariosModel.find();
      return user;
    } catch (err) {
      console.error(err);
      throw new Error("Error in getClient Service");
    }
  }

  async getUserById(id) {
    try {
      let user = await UsuariosModel.findOne({_id:id});
      return user;
    } catch (err) {
      console.error(err);
      throw new Error("Error in getClientById Service");
    }
  }

  async isUserRegistered(email) {
    try {
      let user = await UsuariosModel.exists({ email });
      if(user){
        return true;
      }
      return false;
    } catch (err) {
      console.error(err);
      throw new Error("Error in isClientRegistered Service");
    }
  }

  async createUser(client) {
    try {
      let saveduser = await UsuariosModel.create(client);
      return saveduser;
    
    } catch (err) {
      console.error(err);
      throw new Error("Error in createClient Service",err);
    }
  }
}

module.exports = new UsuariosService();