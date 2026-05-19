import Expense from "../models/Expense.js";
 
export const createExpense = async (req,res)=>{

    try{
        const {title,amount,category} = req.body; 
        if(!title || !amount || !category){
            return res.status(400).json({message:"All fields are required"});
        }
        const expense = await Expense.create({title,amount,category,user: req.user._id,});
    res.status(201).json({message:"Expense created successfully",expense});
    }catch (error){
        res.status(500).json({message: error.message,});
    }

}

export const getExpenses = async (req,res)=>{
    try{
        const expenses= await Expense.find({
        user: req.user._id,
      })
        res.status(200).json({expenses});

    }catch (error){
        res.status(500).json({message: error.message,});
    }
}

export const deleteExpense = async (req,res)=>{
    try{
        const {id} = req.params
        await Expense.findByIdAndDelete(id);
        res.status(200).json({message:"Expense deleted successfully"});
    }catch (error){
        res.status(500).json({message: error.message,});
    }
}


export const updateExpense = async (req,res)=>{
    try{
        const {id} = req.params
        const {title,amount,category} = req.body;
        const expense = await Expense.findByIdAndUpdate(
          id,
          { title, amount, category },
          {
            new: true,
            runValidators: true,
          }
        );

        if (!expense) {
          return res.status(404).json({
            message: 'Expense not found',
          });
        }

        res.status(200).json({
          message: 'Expense updated successfully',
          expense,
        });
    }catch (error){
        res.status(500).json({message: error.message,});
    }
}