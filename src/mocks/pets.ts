import { PetsStructure, PetStructure } from "../hooks/types";

export const petMute: PetStructure = {
  id: "1",
  name: "Mute",
  age: 12,
  specie: "dog",
  gender: "male",
  tag: "adopt",
  description: "",
  imageUrl:
    "https://www.cheshirewestandchester.gov.uk/image-library/stray-dogs-service.x167dbeb4.jpg",
};

export const petRoc: PetStructure = {
  id: "2",
  name: "Roc",
  age: 6,
  specie: "dog",
  gender: "male",
  tag: "care",
  description: "",
  imageUrl: "",
};

export const petNoa: PetStructure = {
  id: "3",
  name: "Noa",
  age: 9,
  specie: "cat",
  gender: "female",
  tag: "lost",
  description: "",
  imageUrl: "",
};

const pets: PetsStructure = [petMute, petRoc, petNoa];

export default pets;
