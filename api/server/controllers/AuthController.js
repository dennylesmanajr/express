import jwt from 'jsonwebtoken';
import UserService from '../services/UserService';
import UserRoleService from '../services/UserRoleService';
import Util from '../utils/Utils';

const util = new Util();

class AuthController {

  static async login(req, res) {
    console.log('req: ', req.body);
    if (!req.body.email || !req.body.password) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }

    try {
      const theUser = await UserService.getAUserByEmail(req.body.email, req.body.password);
      // console.log('theUser: ', theUser);


      var token = jwt.sign({ id: theUser.id }, process.env.SECRET_KEY, {
        expiresIn: 86400 // 24 hours
      });
      console.log('token: ', token);

      const role = await UserRoleService.getAllUserRoleByUserId(theUser.id);
      console.log('role: ', role);
      var all_roles = [];
      // for (let i = 0; i < role.length; i++) {
      //   all_roles.push("ROLE_" + roles[i].name.toUpperCase());
      // }

      const successRes = {
        id: theUser.id,
        email: theUser.email,
        roles: role,
        accessToken: token
      };

      util.setSuccess(200, 'Success Login', successRes);

      // if (!theUser) {
      //   util.setError(404, `User Not found.`);
      // } else {
      //   var passwordIsValid = bcrypt.compareSync(
      //     req.body.password,
      //     theUser.password
      //   );
        
  
      //   if (!passwordIsValid) {
      //     util.setError(401, `Invalid Password!`);
      //   }

      //   // util.setSuccess(200, 'Found User', theUser);
      // }
      return util.send(res);
    } catch (error) {
      console.log('error: ', error);
      util.setError(404, error);
      return util.send(res);
    }
  }
}

export default AuthController;