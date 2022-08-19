/** @format */

export const getRecept = async (tx: any) => {
    
  const txRecept = await tx.wait(1);
  return txRecept;
};
