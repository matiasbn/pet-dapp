pragma solidity ^0.5.11;

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

    struct PetOwner {
        string name;
        string lastName;
        string idNumber;
        string phoneNumber;
        string ownerAddress;
    }

    struct Veterinarian {
        string clinicName;
        string phoneNumber;
        string vetAddress;
        string vetName;
    }

    mapping (uint256=>Pet) public petMapping;
    mapping (uint256=>PetOwner) public petOwnerMapping;
    mapping (uint256=>Veterinarian) public veterinarianMapping;
    mapping (uint256=>uint256[]) public ownerToPetMapping;
    mapping (uint256=>uint256[]) public vetToPetMapping;

    // Events
    event LogPetOwnerRegistered (uint256 ownerId, string name, string lastName, string idNumber, string phoneNumber, string ownerAddress);
    event LogVetRegistered (uint256 vetId, string clinicName, string phoneNumber, string vetAddress, string vetName);
    event LogPetRegistered (uint256 petId, uint256 ownerId, uint256 vetId, string name, string species, string breed, string birthDate, string bloodType);

    function registerPetOwner
    (uint256 ownerId,
    string memory name,
    string memory lastName,
    string memory idNumber,
    string memory phoneNumber,
    string memory ownerAddress)
    public
    returns (bool) {
        PetOwner memory newPetOwner = PetOwner(name,lastName,idNumber,phoneNumber,ownerAddress);
        petOwnerMapping[ownerId] = newPetOwner;
        emit LogPetOwnerRegistered (ownerId, name, lastName, idNumber, phoneNumber, ownerAddress);
        return true;
    }

    function registerVeterinarian
    (uint256 vetId,
    string memory clinicName,
    string memory phoneNumber,
    string memory vetAddress,
    string memory vetName)
    public
    returns (bool) {
        Veterinarian memory newVeterinarian = Veterinarian(clinicName,phoneNumber,vetAddress,vetName);
        veterinarianMapping[vetId] = newVeterinarian;
        emit LogVetRegistered (vetId, clinicName, phoneNumber, vetAddress, vetName);
        return true;
    }

    function registerPet
    (uint256 petId,
    uint256 ownerId,
    uint256 vetId,
    string memory name,
    string memory species,
    string memory breed,
    string memory birthDate,
    string memory bloodType)
    public
    returns (bool) {
        Pet memory newPet = Pet(name,species,breed,birthDate,bloodType,ownerId,vetId);
        ownerToPetMapping[ownerId].push(petId);
        vetToPetMapping[vetId].push(petId);
        petMapping[petId] = newPet;
        emit LogPetRegistered (petId, ownerId, vetId, name, species, breed, birthDate, bloodType);
        return true;
    }

    function getPet (uint256 petId)
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
    ){
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

    function getOwnerPetsArrayLength (uint256 ownerId) public view returns (uint256){
        return ownerToPetMapping[ownerId].length;
    }

    function getVetPetsArrayLength (uint256 ownerId) public view returns (uint256){
        return vetToPetMapping[ownerId].length;
    }
}