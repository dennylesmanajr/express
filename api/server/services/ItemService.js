import database from "../src/models";

class ItemService {
  static async getAllItem() {
    try {
      return await database.Item.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addItem(newItem) {
    try {
      return await database.Item.create(newItem);
    } catch (error) {
      throw error;
    }
  }

  static async updateItem(id, updateItem) {
    try {
      const ItemToUpdate = await database.Item.findOne({
        where: { id: Number(id) },
      });

      if (ItemToUpdate) {
        await database.Item.update(updateItem, {
          where: { id: Number(id) },
        });

        return updateItem;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAItem(id) {
    console.log("id: ", id);
    try {
      const theItem = await database.Item.findOne({
        where: { id: Number(id) },
      });
      console.log("theItem: ", theItem);
      return theItem;
    } catch (error) {
      console.log("error: ", error);
      throw error;
    }
  }

  static async deleteItem(id) {
    try {
      const ItemToDelete = await database.Item.findOne({
        where: { id: Number(id) },
      });

      if (ItemToDelete) {
        const deletedItem = await database.Item.destroy({
          where: { id: Number(id) },
        });
        return deletedItem;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default ItemService;
