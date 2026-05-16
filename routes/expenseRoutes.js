import express from 'express';
import { createExpense, deleteExpense, getExpenses, updateExpense } from '../controllers/expenseController.js';
console.log('reached');

const router = express.Router();
router.post('/', createExpense);
router.get('/', getExpenses);
router.delete('/:id', deleteExpense);
router.put('/:id', updateExpense);
export default router;
