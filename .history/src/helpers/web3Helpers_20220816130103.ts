export const getRecepte =async (tx:any)=>{
    const txRecipe = await tx.wait(1)
    return txRecipe
}