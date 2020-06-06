import InvoiceService from '../services/InvoiceService';
import Util from '../utils/Utils';

const util = new Util();

class InvoiceHeaderController {
  static async getAllInvoiceHeaders(req, res) {
    try {
      const allInvoiceHeaders = await InvoiceService.getAllInvoiceHeaders();
      if (allInvoiceHeaders.length > 0) {
        util.setSuccess(200, 'InvoiceHeaders retrieved', allInvoiceHeaders);
      } else {
        util.setSuccess(200, 'No InvoiceHeader found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addInvoiceHeader(req, res) {
    if (!req.body.invoice_number || !req.body.invoice_date, !req.body.customer_id) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newInvoiceHeader = req.body;
    try {
      const createdInvoiceHeader = await InvoiceService.addInvoiceHeader(newInvoiceHeader);
      util.setSuccess(201, 'InvoiceHeader Added!', createdInvoiceHeader);
      return util.send(res);
    } catch (error) {
      console.log('error: ', error);
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedInvoiceHeader(req, res) {
    const alteredInvoiceHeader = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateInvoiceHeader = await InvoiceService.updateInvoice(id, alteredInvoiceHeader);
      if (!updateInvoiceHeader) {
        util.setError(404, `Cannot find InvoiceHeader with the id: ${id}`);
      } else {
        util.setSuccess(200, 'InvoiceHeader updated', updateInvoiceHeader);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAInvoiceHeader(req, res) {
    const { id } = req.params;
    console.log('id > ',id);

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theInvoiceHeader = await InvoiceService.getAInvoice(id);
      console.log('theInvoiceHeader: ', theInvoiceHeader);

      if (!theInvoiceHeader) {
        util.setError(404, `Cannot find InvoiceHeader with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found InvoiceHeader', theInvoiceHeader);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteInvoiceHeader(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const InvoiceHeaderToDelete = await InvoiceService.deleteInvoice(id);

      if (InvoiceHeaderToDelete) {
        util.setSuccess(200, 'InvoiceHeader deleted');
      } else {
        util.setError(404, `InvoiceHeader with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default InvoiceHeaderController;