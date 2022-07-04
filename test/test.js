const MyContract = artifacts.require('./Blueprint.sol');

const LoomTruffleProvider = require('loom-truffle-provider')
contract('MyContract',(account) => {

    let myContract;
    beforeEach(async () => {
        myContract = await MyContract.new();

       

    });
    // 第1个测试：调用get()函数，检查返回值，测试合约中value初始值是否是: 'myValue'
    it('initializes with the correct value', async () => {
        // 获取合约实例
        //const myContract = await MyContract.deployed()
        const value = await myContract.store("11","萝莉")
        // 使用断言测试value的值
        //assert.equal(value, 'myValue')
  // eth_accounts JSON RPC call
  const jsonRPCString = '{"id": 1,"jsonrpc": "2.0", "method": "eth_accounts", "params": []}'


//   const privateKey = CryptoUtils.generatePrivateKey();
//     const publicKey = CryptoUtils.publicKeyFromPrivateKey(privateKey);

// // Create the client
// const client = new Client(
//   "default",
//   "ws://127.0.0.1:46658/websocket",
//   "ws://127.0.0.1:46658/queryws"
// );

// // The address for the caller of the function
// const from = LocalAddress.fromPublicKey(publicKey).toString();

// // Instantiate loom provider
// const loomProvider = new LoomProvider(client, privateKey);
//   // // Parse JSON is a necessary step before send
//    await loomTruffleProvider.sendAsync(JSON.parse(jsonRPCString))
        
//     })

    // 第2个测试: 调用set()函数来设置value值，然后调用get()函数来确保更新了值
    it('获取设置好的值', async () => {
        //const myContract = await MyContract.deployed()
        //myContract.set('New Value');
        await myContract.store("11","萝莉")
        const value = await myContract.load("11")
        assert.equal(value, '萝莉')
    })

    //  // 第2个测试: 调用set()函数来设置value值，然后调用get()函数来确保更新了值
    //  it('对比', async () => {
    //     const myContract = await MyContract.deployed()
    //     //myContract.set('New Value');
    //     const value = await myContract.load("111")
    //     assert.equal(value, '我是卖报的小行家')
    // })

    // contentx("新版本测试",async () => {
    //     //const myContract = await MyContract.deployed()
    //     //myContract.set('New Value');
    //     const value = await myContract.load("111")
    //     assert.equal(value, '我是卖报的小行家22')

    // })
})