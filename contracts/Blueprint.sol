// SPDX-License-Identifier: SimPL-3.0
pragma solidity ^0.8.14;

import "./Migrations.sol";
// interface DiceInterfce{
//     function loseDice() external returns(uint256 winningNum,bytes32 randHash);

//     function test(uint _uid,string memory _value)external ;

//     function test2(uint _key) external view returns(string memory);

//     function test4() external pure returns(uint);
// }

// A template contract that is just a string-to-string map.
contract Blueprint is Migrations {
    event ValueChanged(string key, string newValue);
    event ValueRemoved(string key);

    mapping (string => User) database;

    struct User
    {
        string name;
        bool exist;
    }

    
    uint count = 0;

    //DiceInterfce _DiceInterfce = DiceInterfce(0x1B1c8941430132eE378eDD1cb5833c0883C7ebE8) ;

    constructor() {
        
    }

    function store(string memory key, string memory value) public {
        count++;
        database[key].name = value;
        database[key].exist = true;
        emit ValueChanged(key, value);
    }

    function load(string memory key) public view returns(string memory) {
        //require(database[key].exist,"not existprople");
        return database[key].name;  
        //require(keccak256(abi.encode(database[key])) == keccak256(abi.encode("")),"key not exist mapping.");
    }

    function remove(string memory key) public {
        delete database[key];
        emit ValueRemoved(key);
    }

    //uint256 winCount;
    //bytes32 currentRandom;

    // function loseDice() public returns(uint256 winningNum,bytes32 randHash){
    //     (winCount,currentRandom) = _DiceInterfce.loseDice();
    //     return (winCount,currentRandom);
    // }

    // function getWinCount() public view returns(uint256 winningNum)
    // {
    //     return winCount;
    // }

    // function getCurrentRandomCount() public view returns(bytes32 randHash)
    // {
    //     return currentRandom;
    // }
    // function getIndex() public  pure  returns(uint randHash)
    // {
    //     return 100;
    // }

    // function diceSetStore(uint _uid,string memory _value) public {
    //     _DiceInterfce.test(_uid, _value);
    // }

    // function diceLoad(uint _uid) public view returns(string memory value) {
    //    value = _DiceInterfce.test2(_uid);
    //    return value;
    // }

    // function diceLoad3() public view returns(uint  value) {
    //    value = _DiceInterfce.test4();
    //    return value;
    // }
}
