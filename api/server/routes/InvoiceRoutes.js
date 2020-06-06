import { Router } from "express";
import InvoiceController from "../controllers/InvoiceController";

const router = Router();

router.get("/report", InvoiceController.getAllInvoiceReport);
router.get("/", InvoiceController.getAllInvoiceHeaders);

router.post("/", InvoiceController.addInvoiceHeader);
router.get("/:id", InvoiceController.getAInvoiceHeader);

router.put("/:id", InvoiceController.updatedInvoiceHeader);
router.delete("/:id", InvoiceController.deleteInvoiceHeader);

export default router;
