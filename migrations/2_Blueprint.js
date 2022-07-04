const Blueprint = artifacts.require("Blueprint");

// module.exports = function (deployer) {
//     deployer.deploy(Blueprint);
//   };

// Blueprint.js
const fs = require('fs')
const path = require('path')
//var Blueprint = artifacts.require("./Blueprint.sol");
//将abi导入Unity做存储
const unityAddresses = path.resolve(__dirname, 'H:/chromeDownLoad/unity-sdk-master/UnityProject/Assets/Resources/contracts/address')

module.exports = function(deployer) {
  deployer.deploy(Blueprint).then(() => {
    // Write the abi to a new file in the unityAbis directory
    fs.writeFileSync(path.resolve(unityAddresses, "Blueprint.txt"), Blueprint.address)
  });
  
};