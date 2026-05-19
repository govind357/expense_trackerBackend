import express from 'express';
import { createExpense, deleteExpense, getExpenses, updateExpense } from '../controllers/expenseController.js';
            import protect from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/', protect, createExpense);
router.get('/', protect, getExpenses);
router.delete('/:id', protect, deleteExpense);
router.put('/:id', protect, updateExpense);
export default router;
