import database from "../src/models";

class UserRoleService {
  static async getAllUserRole() {
    try {
      return await database.UserRole.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async getAllUserRoleByUserId(userId) {
    console.log('userId: ', userId);
    try {
      const userRole = await database.UserRole.findOne({
        where: { user_id: Number(userId) },
      });

      const role = await database.Role.findOne({
        where: { id: Number(userRole.role_id) },
      });

      // console.log('role: ', role);
      // console.log('userRole: ', userRole);
      return role;
    } catch (error) {
      throw error;
    }
  }

  static async addUserRole(newUserRole) {
    try {
      return await database.UserRole.create(newUserRole);
    } catch (error) {
      throw error;
    }
  }

  static async updateUserRole(id, updateUserRole) {
    try {
      const UserRoleToUpdate = await database.UserRole.findOne({
        where: { id: Number(id) },
      });

      if (UserRoleToUpdate) {
        await database.UserRole.update(updateUserRole, {
          where: { id: Number(id) },
        });

        return updateUserRole;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAUserRole(id) {
    console.log("id: ", id);
    try {
      const theUserRole = await database.UserRole.findOne({
        where: { id: Number(id) },
      });
      console.log("theUserRole: ", theUserRole);
      return theUserRole;
    } catch (error) {
      console.log("error: ", error);
      throw error;
    }
  }

  static async deleteUserRole(id) {
    try {
      const UserRoleToDelete = await database.UserRole.findOne({
        where: { id: Number(id) },
      });

      if (UserRoleToDelete) {
        const deletedUserRole = await database.UserRole.destroy({
          where: { id: Number(id) },
        });
        return deletedUserRole;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default UserRoleService;
