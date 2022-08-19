export const getRecept =async (tx:any)=>{
    const txRecipe = await tx.wait(1)
    return txRecipe
}