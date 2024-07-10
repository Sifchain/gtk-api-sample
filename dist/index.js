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
exports.main = main;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // Initialize the APIClientWrapper
        // const network = "mainnet"; // Replace with the appropriate network
        // const wallet: DirectSecp256k1HdWallet =
        //   await DirectSecp256k1HdWallet.fromMnemonic(
        //     "mnemonic", // Replace with the appropriate mnemonic
        //     {
        //       prefix: "sif",
        //     }
        //   );
        // const client = await APIClientWrapper.create(wallet, network);
        // Call placeOrder method
        // const trade = await client.placeOrder(
        //   "uusdc", // collateralTokenType
        //   0.01, // tokenAmount
        //   "btc", // targetTokenType
        //   TradeDirectionEnum.LONG, // tradeDirection
        //   5, // leverage
        //   40000, // stopLoss or null
        //   75000, // takeProfit or null
        //   71000 // limit_price
        // );
        // console.log("Place Order:", trade);
        // Call closeOrder method
        // const closedTrade = await client.closeOrder(1623); // Use a mock orderId
        // console.log("Close Order:", closedTrade);
        // Call cancelOrder method
        // const cancelledTrade = await client.cancelOrder(1630); // Use a mock orderId
        // console.log("Cancel Order:", cancelledTrade);
        // Call getCurrentInterestRate method
        // const interestRate = await client.getCurrentInterestRate("btc");
        // console.log("Current Interest Rate:", interestRate);
        // Call getTrades method
        // const trades = await client.getTrades(
        //   TradeDirectionEnum.LONG, // tradeType
        //   TradeStatusEnum.ACTIVE // status
        // );
        // console.log("Get Trades:", trades);
        // Call getTrade method
        // const tradeDetails = await client.getTrade(123); // Use a mock tradeId
        // console.log("Get Trade:", tradeDetails);
        // Call getTopMatch method
        // const topMatch = await client.getTopMatch("uusdc", 10);
        // console.log("Top Match:", topMatch);
        // Call getPnl method
        // const pnl = await client.getPnl(PnlTypeEnum.REALIZED);
        // console.log("PnL:", pnl);
    });
}
main().catch(console.error);
