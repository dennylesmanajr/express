import database from "../src/models";

class UserService {
  static async getAllUser() {
    try {
      return await database.User.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addUser(newUser) {
    try {
      return await database.User.create(newUser);
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(id, updateUser) {
    try {
      const UserToUpdate = await database.User.findOne({
        where: { id: Number(id) },
      });

      if (UserToUpdate) {
        await database.User.update(updateUser, {
          where: { id: Number(id) },
        });

        return updateUser;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAUser(id) {
    // console.log("getAUser > id: ", id);
    try {
      const theUser = await database.User.findOne({
        where: { id: Number(id) },
      });
      // console.log("theUser: ", theUser);
      return theUser;
    } catch (error) {
      // console.log("error: ", error);
      throw error;
    }
  }

  static async deleteUser(id) {
    try {
      const UserToDelete = await database.User.findOne({
        where: { id: Number(id) },
      });

      if (UserToDelete) {
        const deletedUser = await database.User.destroy({
          where: { id: Number(id) },
        });
        return deletedUser;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAUserByEmail(email, password) {
    console.log("getAUser > email: ", email);
    try {
      // const theUser = await database.User.findOne({
      //   where: { email },
      // })
      const theUser = database.User.findOne({ where: { email: email } }).then(async function (user) {
        // console.log('user: ', user);
        // console.log('!await user.validPassword(password): ', !await user.validPassword(password));
          if (!user) {
            throw 'User Not found.';
          } else if (!await user.validPassword(password)) {
              throw 'Invalid Password!';
          }
          return user;
      });

      // const valid = await database.User.validPassword(password);
      // console.log('valid: ', valid);
      
      return theUser;
    } catch (error) {
      console.log("error: ", error);
      throw error;
    }
  }

}

export default UserService;
