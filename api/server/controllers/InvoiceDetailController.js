import InvoiceDetailService from '../services/InvoiceDetailService';
import Util from '../utils/Utils';

const util = new Util();

class InvoiceDetailController {
  static async getAllInvoiceDetail(req, res) {
    try {
      const allInvoiceDetails = await InvoiceDetailService.getAllInvoiceDetail();
      if (allInvoiceDetails.length > 0) {
        util.setSuccess(200, 'InvoiceDetails retrieved', allInvoiceDetails);
      } else {
        util.setSuccess(200, 'No InvoiceDetail found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addInvoiceDetail(req, res) {
    if (!req.body.invoice_id || !req.body.item_ref_id || !req.body.qty || !req.body.amount) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newInvoiceDetail = req.body;
    try {
      const createdInvoiceDetail = await InvoiceDetailService.addInvoiceDetail(newInvoiceDetail);
      util.setSuccess(201, 'InvoiceDetail Added!', createdInvoiceDetail);
      return util.send(res);
    } catch (error) {
      console.log('error: ', error);
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedInvoiceDetail(req, res) {
    const alteredInvoiceDetail = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateInvoiceDetail = await InvoiceDetailService.updateInvoice(id, alteredInvoiceDetail);
      if (!updateInvoiceDetail) {
        util.setError(404, `Cannot find InvoiceDetail with the id: ${id}`);
      } else {
        util.setSuccess(200, 'InvoiceDetail updated', updateInvoiceDetail);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAInvoiceDetail(req, res) {
    const { id } = req.params;
    console.log('id > ',id);

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theInvoiceDetail = await InvoiceDetailService.getAInvoice(id);
      console.log('theInvoiceDetail: ', theInvoiceDetail);

      if (!theInvoiceDetail) {
        util.setError(404, `Cannot find InvoiceDetail with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found InvoiceDetail', theInvoiceDetail);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteInvoiceDetail(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const InvoiceDetailToDelete = await InvoiceDetailService.deleteInvoice(id);

      if (InvoiceDetailToDelete) {
        util.setSuccess(200, 'InvoiceDetail deleted');
      } else {
        util.setError(404, `InvoiceDetail with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default InvoiceDetailController;