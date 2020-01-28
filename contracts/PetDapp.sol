pragma solidity ^0.6.1;

contract PetDapp {
    struct Pet {
        string name;
        string species;
        string breed;
        string birthDate;
        string bloodType;
        uint256 ownerId;
        uint256 vetId;
    }

    struct Veterinarian {
        string clinicName;
        string phoneNumber;
        string vetAddress;
        string vetName;
    }

    mapping(uint256 => Pet) public petMapping;
    mapping(string => string) public petOwnerMapping;
    mapping(uint256 => Veterinarian) public veterinarianMapping;
    mapping(uint256 => uint256[]) public ownerToPetMapping;
    mapping(uint256 => uint256[]) public vetToPetMapping;

    // Events
    event LogPetOwnerRegistered(string ownerId, string phoneNumber);
    event LogVetRegistered(
        uint256 vetId,
        string clinicName,
        string phoneNumber,
        string vetAddress,
        string vetName
    );
    event LogPetRegistered(
        uint256 petId,
        uint256 ownerId,
        uint256 vetId,
        string name,
        string species,
        string breed,
        string birthDate,
        string bloodType
    );

    function registerPetOwner(string memory ownerId, string memory phoneNumber)
        public
        returns (bool)
    {
        petOwnerMapping[ownerId] = phoneNumber;
        emit LogPetOwnerRegistered(ownerId, phoneNumber);
        return true;
    }

    function registerVeterinarian(
        uint256 vetId,
        string memory clinicName,
        string memory phoneNumber,
        string memory vetAddress,
        string memory vetName
    ) public returns (bool) {
        Veterinarian memory newVeterinarian = Veterinarian(
            clinicName,
            phoneNumber,
            vetAddress,
            vetName
        );
        veterinarianMapping[vetId] = newVeterinarian;
        emit LogVetRegistered(
            vetId,
            clinicName,
            phoneNumber,
            vetAddress,
            vetName
        );
        return true;
    }

    function registerPet(
        uint256 petId,
        uint256 ownerId,
        uint256 vetId,
        string memory name,
        string memory species,
        string memory breed,
        string memory birthDate,
        string memory bloodType
    ) public returns (bool) {
        Pet memory newPet = Pet(
            name,
            species,
            breed,
            birthDate,
            bloodType,
            ownerId,
            vetId
        );
        ownerToPetMapping[ownerId].push(petId);
        vetToPetMapping[vetId].push(petId);
        petMapping[petId] = newPet;
        emit LogPetRegistered(
            petId,
            ownerId,
            vetId,
            name,
            species,
            breed,
            birthDate,
            bloodType
        );
        return true;
    }

    function getPet(uint256 petId)
        public
        view
        returns (
            string memory name,
            string memory species,
            string memory breed,
            string memory birthDate,
            string memory bloodType,
            uint256 ownerId,
            uint256 vetId
        )
    {
        Pet memory pet = petMapping[petId];
        return (
            pet.name,
            pet.species,
            pet.breed,
            pet.birthDate,
            pet.bloodType,
            pet.ownerId,
            pet.vetId
        );
    }

    function getOwnerPetsArrayLength(uint256 ownerId)
        public
        view
        returns (uint256)
    {
        return ownerToPetMapping[ownerId].length;
    }

    function getVetPetsArrayLength(uint256 ownerId)
        public
        view
        returns (uint256)
    {
        return vetToPetMapping[ownerId].length;
    }
}
