/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation, and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 * 
 * https://trufflesuite.com/docs/truffle/reference/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

 var HDWalletProvider = require("truffle-hdwallet-provider");
 //imtoken by myself
 //var mnemonic = "truck shadow arrive much social brain ribbon river chalk expose erupt menu";
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();
//const LoomTruffleProvider = require('loom-truffle-provider');

//const { readFileSync } = require('fs')

const LoomTruffleProvider = require('loom-truffle-provider')

console.log("-----------config---------Start---------------------------");
const result = require('dotenv').config(); // 默认读取项目根目录下的.env文件,用process.env.调用
if (result.error) {
  throw result.error;
}
console.log(result.parsed);
console.log("------------config--------End---------------------------");

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache, geth, or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    //
    development: {
      //http://192.168.0.101:46658
     host: "192.168.0.101",     // Localhost (default: none)
     port: 9545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
    //
    // An additional network, but with some advanced options…
    // advanced: {
    //   port: 8777,             // Custom port
    //   network_id: 1342,       // Custom network
    //   gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
    //   gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
    //   from: <address>,        // Account to send transactions from (default: accounts[0])
    //   websocket: true         // Enable EventEmitter interface for web3 (default: false)
    // },
    //
    // Useful for deploying to a public network.
    // Note: It's important to wrap the provider as a function to ensure truffle uses a new provider every time.
    // ropsten: {
    //   provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/YOUR-PROJECT-ID`),
    //   network_id: 3,       // Ropsten's id
    //   gas: 5500000,        // Ropsten has a lower block limit than mainnet
    //   confirmations: 2,    // # of confirmations to wait between deployments. (default: 0)
    //   timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    //   skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    // },
    //
    // Useful for private networks
    // private: {
    //   provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
    //   network_id: 2111,   // This network is yours, in the cloud.
    //   production: true    // Treats this network as if it was a public net. (default: false)
    // }
    loom_testnet: {
      //host: "127.0.0.1",     // Localhost (default: none)
      //port: 9545,            // Standard Ethereum port (default: none)
      from: "0x000b0b69CF787cB18f90fBDEc8D6C2aFA5e6fC45",        // Account to send transactions from (default: accounts[0])
      provider: function() {
        //主机上账户：0x03D0B3B321f5060650AC33dF4bFF9B73186db71F 的私钥
        //privateKey      = '9bd9a0d39481607edd6f8baab8725862d7c891b1e3251ce5f2637f552081d5ff';
        //const chainId   = 'default';
        //const writeUrl  = 'http://192.168.0.24:7545/rpc';
        //const readUrl   = 'http://192.168.0.24:7545/query';
        const chainId   = 'default';
        const writeUrl  = 'https://kovan.infura.io/v3/rpc';
        const readUrl   = 'https://kovan.infura.io/v3/query';
        //console.log("Accounts and Private KeysBBBBBB")
        //   gfQB5nChPxqRfXs/2ZnninWoufoEUgVzLP07PRMmuY3zkA61IsyUjEFjXhnWInfEmIe0Wb0zr0bHwI1j1t2O7g==
        const loomProvider = new LoomTruffleProvider(chainId, writeUrl, readUrl, 'gfQB5nChPxqRfXs/2ZnninWoufoEUgVzLP07PRMmuY3zkA61IsyUjEFjXhnWInfEmIe0Wb0zr0bHwI1j1t2O7g==');
        //console.log("Accounts and Private Keys", loomProvider.accounts)
        //return new LoomTruffleProvider(chainId, writeUrl, readUrl, "9bd9a0d39481607edd6f8baab8725862d7c891b1e3251ce5f2637f552081d5ff");
        return loomProvider;
        },
      network_id: '42'
    },
    loom_dapp_chain: {
      provider: function(){
        
        const chainId    = 'default'
        //本机端
        // const writeUrl   = 'http://127.0.0.1:46658/rpc'
        // const readUrl    = 'http://127.0.0.1:46658/query'
        //服务端
        const writeUrl   = 'ws://127.0.0.1:46658/websocket'
        const readUrl    = 'ws://127.0.0.1:46658/queryws'
        //const privateKey = readFileSync('./private_key', 'utf-8')
        //服务器端：TzC6kTI1MCyIZQkIwfDJD8AqGkurFg6smhLmobnDQ9I/Wl90nTEyLmGSKF37UvPndeZVAmTqty646sAkhk2Wdw==   
        //本机Ubuntu端：gfQB5nChPxqRfXs/2ZnninWoufoEUgVzLP07PRMmuY3zkA61IsyUjEFjXhnWInfEmIe0Wb0zr0bHwI1j1t2O7g==
        //new:
        const loomTruffleProvider = new LoomTruffleProvider(chainId, writeUrl, readUrl, '8R68lzlX5PBDDzThY/65rhQhhvzhhn4Gi44Rne0iHtCeKkoLeVSBC7v+WdiXVq3o0be55ooH81buJ5xc+M+1nw==')
        //const loomTruffleProvider = new LoomTruffleProvider(chainId, writeUrl, readUrl, 'gfQB5nChPxqRfXs/2ZnninWoufoEUgVzLP07PRMmuY3zkA61IsyUjEFjXhnWInfEmIe0Wb0zr0bHwI1j1t2O7g==')
        //loomTruffleProvider.createExtraAccountsFromMnemonic("gravity top burden flip student usage spell purchase hundred improve check genre", 10)

       
        //loomTruffleProvider

        return loomTruffleProvider
      },
      network_id: '*'
    },
    // Configuration for mainnet
    mainnet: {
      provider: function () {
        // Setting the provider with the Infura Mainnet address and Token
        return new HDWalletProvider(process.env.mnemonic, "https://mainnet.infura.io/v3/f75e0463e502431a8c74cf1290b02fdd")
      },
      network_id: "1"
    },
    // Configuration for rinkeby network
    rinkeby: {
      // Special function to setup the provider
      provider: function () {
        // Setting the provider with the Infura Rinkeby address and Token
        return new HDWalletProvider(process.env.mnemonic, "https://kovan.infura.io/v3/f75e0463e502431a8c74cf1290b02fdd")
      },
      // Network id is 4 for Rinkeby
      network_id: 4
    },
    kovan: {
      // Special function to setup the provider
      provider: function () {
        // Setting the provider with the Infura Rinkeby address and Token
        console.log(process.env.mnemonic + "    "+process.env.mnemonic);
        return new HDWalletProvider(process.env.mnemonic, "https://kovan.infura.io/v3/"+process.env.infurakey)
      },
      // Network id is 4 for Rinkeby
      network_id: "*"
    }
    
  },

  // Set default mocha options here, use special reporters, etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.14",      // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled:
  // false to enabled: true. The default storage location can also be
  // overridden by specifying the adapter settings, as shown in the commented code below.
  //
  // NOTE: It is not possible to migrate your contracts to truffle DB and you should
  // make a backup of your artifacts to a safe location before enabling this feature.
  //
  // After you backed up your artifacts you can utilize db by running migrate as follows:
  // $ truffle migrate --reset --compile-all
  //
  // db: {
  //   enabled: false,
  //   host: "127.0.0.1",
  //   adapter: {
  //     name: "sqlite",
  //     settings: {
  //       directory: ".db"
  //     }
  //   }
  // }
};
