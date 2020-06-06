import database from "../src/models";
import InvoiceDetail from "../src/models/invoiceDetail";

class InvoiceDetailService {
  static async getAllInvoiceDetail() {
    try {
      return await database.InvoiceDetail.findAll({
        include: [{
          model: database.Item,
          attributes: ['item_name','unit_price'],
        },],
      });
    } catch (error) {
      throw error;
    }
  }

  static async addInvoiceDetail(newInvoice) {
    try {
      return await database.InvoiceDetail.create(newInvoice);
    } catch (error) {
      console.log('error: ', error);
      throw error;
    }
  }

  static async updateInvoice(id, updateInvoice) {
    try {
      const InvoiceToUpdate = await database.InvoiceDetail.findOne({
        where: { id: Number(id) },
      });

      if (InvoiceToUpdate) {
        await database.InvoiceDetail.update(updateInvoice, {
          where: { id: Number(id) },
        });

        return updateInvoice;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAInvoice(id) {
    console.log("id: ", id);
    try {
      const theInvoice = await database.InvoiceDetail.findOne({
        where: { id: Number(id) },
      });
      console.log("theInvoice: ", theInvoice);
      return theInvoice;
    } catch (error) {
      console.log("error: ", error);
      throw error;
    }
  }

  static async deleteInvoice(id) {
    try {
      const InvoiceToDelete = await database.InvoiceDetail.findOne({
        where: { id: Number(id) },
      });

      if (InvoiceToDelete) {
        const deletedInvoice = await database.InvoiceDetail.destroy({
          where: { id: Number(id) },
        });
        return deletedInvoice;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default InvoiceDetailService;
