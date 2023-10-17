// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.7;

contract SaveAKid {
    struct Home {
        address owner;
        string homeName;
        string description;
        string location;
        string image;
        uint256 contactPerson;
    }

    mapping(uint256 => Home) public homes;
    mapping(address => uint) balances;

    address public manager;
    uint256 public platformFee;
    uint256 public numberOfHomes;

    constructor(uint256 _platformFee) payable {
        manager == msg.sender;
        platformFee = _platformFee;
        balances[msg.sender] = msg.value;
    }

    modifier onlyManager() {
        require(msg.sender == manager, "not owner");
        _;
    }

    function registerHome(
        address _owner,
        string memory _homeName,
        string memory _description,
        string memory _location,
        string memory _image,
        uint256 _contactPerson
    ) public returns (uint256) {
        Home storage home = homes[numberOfHomes];

        home.owner = _owner;
        home.homeName = _homeName;
        home.description = _description;
        home.location = _location;
        home.image = _image;
        home.contactPerson = _contactPerson;

        numberOfHomes++;
        return numberOfHomes - 1;
    }
}
