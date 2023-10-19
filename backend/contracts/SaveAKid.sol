// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.7;

// Errors
error InputsCantBeNull();
error DeadlineShouldBeInFuture();
error AmountDonatedMustBeGreaterThanZero(uint minAmount, uint donatedAmount);
error DeadlineReached(uint campaignDeadline, uint timeRequested);

contract SaveAKid {
    struct Home {
        address owner;
        string homeName;
        string description;
        string location;
        string image;
        uint256 contactPerson;
    }

    struct Campaign {
        address owner;
        string name;
        string category;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amountCollected;
        string image;
        address[] donators;
        uint256[] donations;
    }

    event Action(
        uint256 id,
        string actionType,
        address indexed executor,
        uint256 timestamp
    );

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

    function createCampaign(
        address _owner,
        string memory _name,
        string memory _title,
        string memory _category,
        string memory _description,
        uint256 _target,
        uint256 _deadline,
        string memory _image
    ) public returns (uint256) {
        Campaign storage campaign = campaigns[numberOfCampaigns];

        // check that the dealine is in the future
        require(
            campaign.deadline < block.timestamp,
            "deadline should be a date in the future"
        );

        campaign.owner = _owner;
        campaign.name = _name;
        campaign.title = _title;
        campaign.category = _category;
        campaign.description = _description;
        campaign.target = _target;
        campaign.deadline = _deadline;
        campaign.amountCollected = 0;
        campaign.image = _image;

        numberOfCampaigns++;

        return numberOfCampaigns - 1;
    }

    function donateToCampaign(uint256 _id) public payable {
        uint256 amount = msg.value;

        Campaign storage campaign = campaigns[_id];

        // amount donated shouldn't be zero or less
        if (amount <= 0 wei) {
            revert AmountDonatedMustBeGreaterThanZero({
                minAmount: 1 wei,
                donatedAmount: amount
            });
        }

        // cannot donate after deadline
        if (campaign.deadline < block.timestamp) {
            revert DeadlineReached({
                campaignDeadline: campaigns[_id].deadline,
                timeRequested: block.timestamp
            });
        }

        campaign.donators.push(msg.sender);
        campaign.donations.push(amount);

        (bool sent, ) = payable(manager).call{value: amount}("");
        require(sent, "donation failed");

        if (sent) {
            campaign.amountCollected = campaign.amountCollected + amount;
        }
    }

    function getDonators(
        uint256 _id
    ) public view returns (address[] memory, uint256[] memory) {
        return (campaigns[_id].donators, campaigns[_id].donations);
    }

    function getCampaigns() public view returns (Campaign[] memory) {
        // create an empty array of as many structs as there are campaigns
        Campaign[] memory allCampaigns = new Campaign[](numberOfCampaigns);

        // now we loop through the campaigns and populate the variable
        for (uint i = 0; i < numberOfCampaigns; i++) {
            Campaign storage item = campaigns[i];
            allCampaigns[i] = item;
        }

        return allCampaigns;
    }
}
