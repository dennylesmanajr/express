import database from "../src/models";

class CustomerService {
  static async getAllCustomer() {
    try {
      return await database.Customer.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addCustomer(newCustomer) {
    try {
      return await database.Customer.create(newCustomer);
    } catch (error) {
      throw error;
    }
  }

  static async updateCustomer(id, updateCustomer) {
    try {
      const CustomerToUpdate = await database.Customer.findOne({
        where: { id: Number(id) },
      });

      if (CustomerToUpdate) {
        await database.Customer.update(updateCustomer, {
          where: { id: Number(id) },
        });

        return updateCustomer;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getACustomer(id) {
    console.log("id: ", id);
    try {
      const theCustomer = await database.Customer.findOne({
        where: { id: Number(id) },
      });
      console.log("theCustomer: ", theCustomer);
      return theCustomer;
    } catch (error) {
      console.log("error: ", error);
      throw error;
    }
  }

  static async deleteCustomer(id) {
    try {
      const CustomerToDelete = await database.Customer.findOne({
        where: { id: Number(id) },
      });

      if (CustomerToDelete) {
        const deletedCustomer = await database.Customer.destroy({
          where: { id: Number(id) },
        });
        return deletedCustomer;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default CustomerService;
