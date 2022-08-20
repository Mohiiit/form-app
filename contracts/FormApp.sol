// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract FormApp {
    
    struct Data {
        string name;
        uint8 age;
        string answer;
    }

    Data[] public datas;

    function add_data(string memory _name, uint8 _age, string memory _answer) public {
        datas.push(Data(_name, _age, _answer));
    }

    function get_data(uint _index) public view returns(Data memory){
        require(datas.length > _index);
        return datas[_index];
    }
    
}