/** @format */

export const getRecept = async (tx: any) => {
    console.log(tx)
  const txRecept = await tx.wait(1);
  console.log(tx)
  return txRecept;
};
