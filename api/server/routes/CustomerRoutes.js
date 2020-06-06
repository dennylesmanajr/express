import { Router } from "express";
import CustomerController from "../controllers/CustomerController";

const router = Router();

router.get("/", CustomerController.getAllCustomer);
router.post("/", CustomerController.addCustomer);
router.get("/:id", CustomerController.getACustomer);

router.put("/:id", CustomerController.updatedCustomer);
router.delete("/:id", CustomerController.deleteCustomer);

export default router;
