import { Router } from "express";
import ItemController from "../controllers/ItemController";

const router = Router();

router.get("/", ItemController.getAllItem);
router.post("/", ItemController.addItem);
router.get("/:id", ItemController.getAItem);
router.put("/:id", ItemController.updatedItem);
router.delete("/:id", ItemController.deleteItem);

export default router;
