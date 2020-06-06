import { Router } from "express";
import InvoiceDetailController from "../controllers/InvoiceDetailController";

const router = Router();

router.get("/", InvoiceDetailController.getAllInvoiceDetail);
router.post("/", InvoiceDetailController.addInvoiceDetail);
router.get("/:id", InvoiceDetailController.getAInvoiceDetail);

router.put("/:id", InvoiceDetailController.updatedInvoiceDetail);
router.delete("/:id", InvoiceDetailController.deleteInvoiceDetail);

export default router;
