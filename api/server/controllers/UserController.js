import UserService from '../services/UserService';
import Util from '../utils/Utils';

const util = new Util();

class UserController {
  static async getAllUser(req, res) {
    try {
      const allUser = await UserService.getAllUser();
      if (allUser.length > 0) {
        util.setSuccess(200, 'User retrieved', allUser);
      } else {
        util.setSuccess(200, 'No User found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addUser(req, res) {
    if (!req.body.email | !req.body.password | !req.body.full_name) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newUser = req.body;
    try {
      const createdUser = await UserService.addUser(newUser);
      util.setSuccess(201, 'User Added!', createdUser);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedUser(req, res) {
    const alteredUser = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateUser = await UserService.updateUser(id, alteredUser);
      if (!updateUser) {
        util.setError(404, `Cannot find User with the id: ${id}`);
      } else {
        util.setSuccess(200, 'User updated', updateUser);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAUser(req, res) {
    const { id } = req.params;
    console.log('id > ',id);

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theUser = await UserService.getAUser(id);
      console.log('theUser: ', theUser);

      if (!theUser) {
        util.setError(404, `Cannot find User with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found User', theUser);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteUser(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const UserToDelete = await UserService.deleteUser(id);

      if (UserToDelete) {
        util.setSuccess(200, 'User deleted');
      } else {
        util.setError(404, `User with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default UserController;