const PetDapp = artifacts.require('PetDapp');
const Web3 = require('web3');

contract('PetDapp', (accounts) => {
  let petDapp;

  beforeEach(async () => {
    petDapp = await PetDapp.new();
  });

  const owner = accounts[0];
  const user = accounts[1];
  const pet = {
    petId: 9307,
    ownerId: 1234,
    vetId: 5678,
    name: 'Jager',
    species: 'Dog',
    breed: 'Border Collie',
    birthDate: '4/11/19',
    bloodType: 'SneakersThief',
  };
  const petOwner = {
    name: 'Matias',
    lastName: 'Barrios',
    idNumber: '12345678',
    phoneNumber: '+56912345678',
    ownerAddress: 'Avenida Siempre Viva 1234',
    ownerId: 1234,
  };
  const veterinarian = {
    vetId: 5678,
    clinicName: 'PorLosKiltros',
    phoneNumber: '+56987654321',
    vetAddress: 'PorLosKiltros 5678',
    vetName: 'Rosalis Pulido',
  };

  it('should register a pet owner properly', async () => {
    const {
      ownerId, name, lastName, idNumber, phoneNumber, ownerAddress,
    } = petOwner;
    const transaction = await petDapp.registerPetOwner(ownerId, name, lastName, idNumber, phoneNumber, ownerAddress);
    assert.equal(transaction.logs[0].event, 'LogPetOwnerRegistered', 'LogPetOwnerRegistered not emitted.');
    const petOwnerStored = await petDapp.petOwnerMapping(ownerId);
    assert.equal(petOwnerStored.name, name, 'name incorrect');
    assert.equal(petOwnerStored.lastName, lastName, 'lastName incorrect');
    assert.equal(petOwnerStored.idNumber, idNumber, 'idNumber incorrect');
    assert.equal(petOwnerStored.phoneNumber, phoneNumber, 'phoneNumber incorrect');
    assert.equal(petOwnerStored.ownerAddress, ownerAddress, 'ownerAddress incorrect');
  });

  it('should register a veterinarian properly', async () => {
    const {
      vetId, clinicName, phoneNumber, vetAddress, vetName,
    } = veterinarian;
    const transaction = await petDapp.registerVeterinarian(vetId, clinicName, phoneNumber, vetAddress, vetName);
    assert.equal(transaction.logs[0].event, 'LogVetRegistered', 'LogVetRegistered not emitted.');
    const veterinarianStored = await petDapp.veterinarianMapping(vetId);
    assert.equal(veterinarianStored.clinicName, clinicName, 'clinicName incorrect');
    assert.equal(veterinarianStored.phoneNumber, phoneNumber, 'phoneNumber incorrect');
    assert.equal(veterinarianStored.vetAddress, vetAddress, 'vetAddress incorrect');
    assert.equal(veterinarianStored.vetName, vetName, 'vetName incorrect');
  });

  it('should register a pet properly', async () => {
    const {
      petId, ownerId, vetId, name, species, breed, birthDate, bloodType,
    } = pet;
    const transaction = await petDapp.registerPet(petId, ownerId, vetId, name, species, breed, birthDate, bloodType);
    assert.equal(transaction.logs[0].event, 'LogPetRegistered', 'LogPetRegistered not emitted.');
    const petStored = await petDapp.petMapping(petId);
    assert.equal(petStored.name, name, 'name incorrect');
    assert.equal(petStored.species, species, 'species incorrect');
    assert.equal(petStored.breed, breed, 'breed incorrect');
    assert.equal(petStored.birthDate, birthDate, 'birthDate incorrect');
    assert.equal(petStored.bloodType, bloodType, 'bloodType incorrect');
    assert.equal(petStored.ownerId.toNumber(), ownerId, 'ownerId incorrect');
    assert.equal(petStored.vetId.toNumber(), vetId, 'vetId incorrect');
    // Check the mappings to uint256 arrays of owners and vets
    // Get the lenghts
    const ownerPetsLength = await petDapp.getOwnerPetsArrayLength(1234);
    const vetPetsLength = await petDapp.getVetPetsArrayLength(5678);
    assert.equal(ownerPetsLength.toNumber(), 1, 'ownerPetsLength incorrect');
    assert.equal(vetPetsLength.toNumber(), 1, 'vetPetsLength incorrect');
    // Check that is the same as petId
    const ownerPets = await petDapp.ownerToPetMapping(petOwner.ownerId, 0);
    const vetPets = await petDapp.vetToPetMapping(veterinarian.vetId, 0);
    assert.equal(ownerPets, petId, 'ownerPets incorrect');
    assert.equal(vetPets, petId, 'vetPets incorrect');
  });

  it('should fetch the pet correctly', async () => {
    const {
      petId, ownerId, vetId, name, species, breed, birthDate, bloodType,
    } = pet;
    const transaction = await petDapp.registerPet(petId, ownerId, vetId, name, species, breed, birthDate, bloodType);
    assert.equal(transaction.logs[0].event, 'LogPetRegistered', 'LogPetRegistered not emitted.');
    const petStored = await petDapp.petMapping(petId);
    assert.equal(petStored.name, name, 'name incorrect');
    assert.equal(petStored.species, species, 'species incorrect');
    assert.equal(petStored.breed, breed, 'breed incorrect');
    assert.equal(petStored.birthDate, birthDate, 'birthDate incorrect');
    assert.equal(petStored.bloodType, bloodType, 'bloodType incorrect');
    assert.equal(petStored.ownerId.toNumber(), ownerId, 'ownerId incorrect');
    assert.equal(petStored.vetId.toNumber(), vetId, 'vetId incorrect');
    const petFetched = await petDapp.getPet(petId);
    assert.equal(petFetched.name, name, 'fetched name incorrect');
    assert.equal(petFetched.species, species, 'fetched species incorrect');
    assert.equal(petFetched.breed, breed, 'fetched breed incorrect');
    assert.equal(petFetched.birthDate, birthDate, 'fetched birthDate incorrect');
    assert.equal(petFetched.bloodType, bloodType, 'fetched bloodType incorrect');
    assert.equal(petFetched.ownerId.toNumber(), ownerId, 'fetched ownerId incorrect');
    assert.equal(petFetched.vetId.toNumber(), vetId, 'fetched vetId incorrect');
  });
});
