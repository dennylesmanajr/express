import sequelize from "sequelize";
import database from "../src/models";
import InvoiceHeader from "../src/models/invoiceheader";

class InvoiceService {
  static async getAllInvoiceHeaders() {
    try {
      const list =  await database.InvoiceHeader.findAll({
        include: [{
          model: database.Customer,
          attributes: ['customer_name'],
        }],
      });

      for (let i = 0; i < list.length; i++) {
        const element = list[i];
        

        if(element && element.dataValues){
          
          const totalAmount = await database.InvoiceDetail.findAll({
            where: { invoice_id: Number(element.dataValues.id)},
            
            attributes: [
              'invoice_id',
              [sequelize.fn('sum', sequelize.col('amount')), 'total_amount'],
            ],
            group: ['invoice_id'],
          });
          
          
          
          if(totalAmount[0] && totalAmount[0].dataValues && totalAmount[0].dataValues.total_amount){
            element.dataValues.total_amount = totalAmount[0].dataValues.total_amount;
          }
        }
        
        
      }


      return list;
    } catch (error) {
      throw error;
    }
  }


  static async getLatestInvoiceHeaders() {
    try {
      // return await database.InvoiceHeader.findAll({
      //   attributes: [
      //     [sequelize.fn('MAX', sequelize.col('InvoiceHeader.id')),'max_id'],'invoice_date','total_amount',
      //   ],
      //   group: ['invoice_date','total_amount','Customer.id'],
      //   include: [{
      //     model: database.Customer,
      //     attributes: ['customer_name','customer_phone'],
      //   }],
      // });

      return await database.InvoiceHeader.findAll({
        attributes: [[sequelize.fn("max", sequelize.col('id')),'max_id'],'customer_id'],
        group: ["customer_id"]
      }).then(function(maxIds){
        

        let ids = maxIds.map(result => {
          return result.dataValues.max_id;
        });

        // 
          return database.InvoiceHeader.findAll({
              where: {
                  id: {
                      [sequelize.Op.in]: ids
                  }
              },
              include: [{
                  model: database.Customer,
                  attributes: ['customer_name','customer_phone'],
                }],
          })
      }).then(function(result){
        
          return Promise.resolve(result);
      });
    } catch (error) {
      throw error;
    }
  }

  static async addInvoiceHeader(newInvoice) {
    try {
      return await database.InvoiceHeader.create(newInvoice);
    } catch (error) {
      
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
    
    try {
      const theInvoice = await database.InvoiceHeader.findOne(
      {
        where: { id: Number(id) },
        include: [{
          model: database.Customer,
          attributes: ['customer_name','customer_address','customer_phone'],
        }],
      }
      );

      

      const totalAmount = await database.InvoiceDetail.findAll({
        where: { invoice_id: Number(id)},
        attributes: [
          'invoice_id',
          [sequelize.fn('sum', sequelize.col('amount')), 'total_amount'],
        ],
        group: ['invoice_id'],
      });
      
      if(totalAmount[0] && totalAmount[0].dataValues && totalAmount[0].dataValues.total_amount){
        theInvoice.dataValues.total_amount = totalAmount[0].dataValues.total_amount;
      }
      
      return theInvoice;
    } catch (error) {
      
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
