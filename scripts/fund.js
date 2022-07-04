const { getNamedAccounts, ethers } = require("hardhat");

async function main() {
  const sendValue = await ethers.utils.parseEther("0.1");
  const { deployer } = await getNamedAccounts();
  const fundMe = await ethers.getContract("FundMe", deployer);
  const transactionResponse = await fundMe.fund({ value: sendValue });
  await transactionResponse.wait(1);
  console.log("Funded!");
}
main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
