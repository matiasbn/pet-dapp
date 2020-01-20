import ACTION_TYPES from './actionTypes';
import pet from '../common/pet';
import veterinarian from '../common/veterinarian';
import petOwner from '../common/petOwner';

const initialState = {
  pet, veterinarian, petOwner,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.petNameChanged:
      return {
        ...state,
        pet: {
          ...state.pet,
          name: action.value,
        },
      };
    case ACTION_TYPES.petSpeciesChanged:
      return {
        ...state,
        pet: {
          ...state.pet,
          species: action.value,
        },
      };
    case ACTION_TYPES.petBreedChanged:
      return {
        ...state,
        pet: {
          ...state.pet,
          breed: action.value,
        },
      };
    case ACTION_TYPES.petBirthChanged:
      return {
        ...state,
        pet: {
          ...state.pet,
          birthDate: action.value,
        },
      };
    case ACTION_TYPES.petBloodTypeChanged:
      return {
        ...state,
        pet: {
          ...state.pet,
          bloodType: action.value,
        },
      };
    case ACTION_TYPES.petIDChanged:
      return {
        ...state,
        pet: {
          ...state.pet,
          petId: action.value,
        },
      };
    default:
      break;
  }
  return state;
};

export default reducer;
