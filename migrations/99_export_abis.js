// 99_export_abis.js
const fs = require('fs')
const path = require('path')
const contracts = path.resolve(__dirname, '../build/contracts/')
const unityAbis = path.resolve(__dirname, 'H:/chromeDownLoad/unity-sdk-master/UnityProject/Assets/Resources/contracts/abi')

//将所有合约的abi都保存到指定目录
module.exports = async function(deployer, network, accounts) {
    let builtContracts = fs.readdirSync(contracts)
    // loop over every contract
    builtContracts.forEach(contract => {
        // Get the JSON for a specific contract
        let json = JSON.parse(fs.readFileSync(path.resolve(contracts, contract)))
        // Extract just the abi
        let { abi } = json
        // Write the abi to a new file in the unityAbis directory
        fs.writeFileSync(path.resolve(unityAbis, contract), JSON.stringify(json.abi))
    });
}