"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const CURRENT_BLOCK_NUMBER = 123123123;
const provider = new ethers_1.JsonRpcProvider('https://eth-mainnet.g.alchemy.com/v2/X5PHPfGBYCUT44WA7oNOI5MawKteNihV');
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        //get the interested addresses from DB
        const instanceAddress = ["0xdAC17F958D2ee523a2206206994597C13D831ec7", "0xB82DbbE29f7D4550a2D6964eAc410c8eFce72096", "0x38dFd1Cae3A5138Dcd9033f66deb40B234E18090"];
        const block = yield provider.getBlock(22382299, true);
        console.log(block);
        //Inspact the block for native eth transactions on one of these addreses
        //
    });
}
main();
