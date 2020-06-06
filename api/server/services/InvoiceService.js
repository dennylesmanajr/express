import database from "../src/models";
import InvoiceHeader from "../src/models/invoiceheader";

class InvoiceService {
  static async getAllInvoiceHeaders() {
    try {
      return await database.InvoiceHeader.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addInvoiceHeader(newInvoice) {
    try {
      return await database.InvoiceHeader.create(newInvoice);
    } catch (error) {
      console.log('error: ', error);
      throw error;
    }
  }

  static async updateInvoice(id, updateInvoice) {
    try {
      const InvoiceToUpdate = await database.InvoiceHeader.findOne({
        where: { id: Number(id) },
      });

      if (InvoiceToUpdate) {
        await database.InvoiceHeader.update(updateInvoice, {
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
      const theInvoice = await database.InvoiceHeader.findOne({
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
      const InvoiceToDelete = await database.InvoiceHeader.findOne({
        where: { id: Number(id) },
      });

      if (InvoiceToDelete) {
        const deletedInvoice = await database.InvoiceHeader.destroy({
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

export default InvoiceService;
