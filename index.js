// const algosdk = require('algosdk');
// const algodToken = '';
//          const algodServer = 'https://academy-algod.dev.aws.algodev.network/';
//          const algodPort = '';
//          let algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);
//  const GetBalance=  function(){
//      let accountInfo = algodClient.accountInformation('Q2COFN4H6SO33FZBCAI3YA2Y2HM5NL5MF64KOXG2HYIKFBA5P37YZVZBWM');
//      console.log("Account balance: %d microAlgos", accountInfo.amount);
//      let startingAmount = accountInfo.amount;
//  }

// const createAccount =  function (){
//     try{  
//         const myaccount = algosdk.generateAccount();
//         console.log("Account Address = " + myaccount.addr);
//         let account_mnemonic = algosdk.secretKeyToMnemonic(myaccount.sk);
//         console.log("Account Mnemonic = "+ account_mnemonic);
//         console.log("Account created. Save off Mnemonic and address");
//         console.log("Add funds to account using the TestNet Dispenser: ");
//         console.log("https://dispenser.testnet.aws.algodev.network/ ");
//         return myaccount;
//     }
//     catch (err) {
//         console.log("err", err);
//     }
// };
// async function firstTransaction() {

//     try {
//         let myAccount = 'GRVROP2F6QPRZOCOGVOJF7GRJZDR3DSDY5MGVEDFP67A6F6LYGVNGE3R2Y'
//         // Connect your client
//         const algodToken = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
//         const algodServer = 'http://localhost';
//         const algodPort = 4001;
//         let algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);
//         let accountInfo = await algodClient.accountInformation(myAccount.addr).do();
//         console.log("Account balance: %d microAlgos", accountInfo.amount);
//         let startingAmount = accountInfo.amount;
//     }catch(err)
//     {
//         console.log(err);
//     }
// }

// firstTransaction()

// const algosdk = require('algosdk');
// const getBalance = async() => {
//     try {
//         const myaccount = "GRVROP2F6QPRZOCOGVOJF7GRJZDR3DSDY5MGVEDFP67A6F6LYGVNGE3R2Y";
//         const algodToken = '2f3203f21e738a1de6110eba6984f9d03e5a95d7a577b34616854064cf2c0e7b';
//         const algodServer = 'https://academy-algod.dev.aws.algodev.network/';
//         const algodPort = '';
//         let algodClient = await new algosdk.Algodv2(algodToken, algodServer, algodPort);
//         console.log("Account Address = " + myaccount);
//         console.log("https://dispenser.testnet.aws.algodev.network?account=" + myaccount);
//        let accountInfo = await algodClient.accountInformation(myaccount).do();

//         console.log(accountInfo.amount/1000000);
//         console.log(accountInfo.round);
//         return ("account",myaccount)
//     }
//     catch (err) {
//         throw err;
//     }
// };
// getBalance();











