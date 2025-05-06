import {JsonRpcProvider} from "ethers"
const CURRENT_BLOCK_NUMBER = 22382299;

const provider = new JsonRpcProvider('');

async function main(){
    //get the interested addresses from DB
    const instanceAddress = ["0xdAC17F958D2ee523a2206206994597C13D831ec7", "0xB82DbbE29f7D4550a2D6964eAc410c8eFce72096", "0x38dFd1Cae3A5138Dcd9033f66deb40B234E18090"];
    const transactions = getTransactionReceipt(CURRENT_BLOCK_NUMBER.toString());

    const instrestedTransactions = transactions?.result.filter(x => instanceAddress.includes(x.to));

    const fulltxn = await Promise.all(instrestedTransactions.map(async ({transactionHash}) => {
        const txn = await provider.getTransaction(transactionHash);
        return txn;
    }))

    // const block = await provider.getBlock(CURRENT_BLOCK_NUMBER, true);
    console.log(fulltxn);
    
    //Inspact the block for native eth transactions on one of these addreses

    //
}
 main();

function getTransactionReceipt(arg0: string) {
    throw new Error("Function not implemented.");
}
