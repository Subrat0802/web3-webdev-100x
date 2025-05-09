import { useWriteContract } from "wagmi"

const AllowUSDT = () => {
    const {data, writeContract} = useWriteContract();
    const allowUSDTtouser = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        writeContract({
            address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
            abi: [{
              "constant": false,
              "inputs": [
                {
                  "name": "_spender",
                  "type": "address"
                },
                {
                  "name": "_value",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [
                {
                  "name": "",
                  "type": "bool"
                }
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            }
            ],
            functionName: 'approve',
            args: ["0x2966473D85A76A190697B5b9b66b769436EFE8e5", BigInt(1)],
          })
    }
    console.log("s",data);
  return (
    <div>
        <form onSubmit={allowUSDTtouser}>
            <input required placeholder="address to allow"/>
            <button type="submit">Allow</button>    
            {data && <div>Transaction hash: {data}</div>}
        </form>    
    </div>
  )
}

export default AllowUSDT 

