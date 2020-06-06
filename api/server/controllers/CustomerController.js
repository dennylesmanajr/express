import CustomerService from '../services/CustomerService';
import Util from '../utils/Utils';

const util = new Util();

class CustomerController {
  static async getAllCustomer(req, res) {
    try {
      const allCustomer = await CustomerService.getAllCustomer();
      if (allCustomer.length > 0) {
        util.setSuccess(200, 'Customer retrieved', allCustomer);
      } else {
        util.setSuccess(200, 'No Customer found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addCustomer(req, res) {
    if (!req.body.customer_name) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newCustomer = req.body;
    try {
      const createdCustomer = await CustomerService.addCustomer(newCustomer);
      util.setSuccess(201, 'Customer Added!', createdCustomer);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedCustomer(req, res) {
    const alteredCustomer = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateCustomer = await CustomerService.updateCustomer(id, alteredCustomer);
      if (!updateCustomer) {
        util.setError(404, `Cannot find Customer with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Customer updated', updateCustomer);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getACustomer(req, res) {
    const { id } = req.params;
    console.log('id > ',id);

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theCustomer = await CustomerService.getACustomer(id);
      console.log('theCustomer: ', theCustomer);

      if (!theCustomer) {
        util.setError(404, `Cannot find Customer with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Customer', theCustomer);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteCustomer(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const CustomerToDelete = await CustomerService.deleteCustomer(id);

      if (CustomerToDelete) {
        util.setSuccess(200, 'Customer deleted');
      } else {
        util.setError(404, `Customer with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default CustomerController;