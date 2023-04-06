import useApi from "../../hooks/useApi/useApi";
import { useAppSelector } from "../../store/hooks";
import Card from "../Card/Card";
import { useEffect } from "react";

const CardList = (): JSX.Element => {
  const { getPets } = useApi();
  const pets = useAppSelector((state) => state.pets);

  useEffect(() => {
    getPets();
  }, [getPets]);

  return (
    <ul className="home__pet-alerts pet-alerts">
      {pets.map((pet) => (
        <li className="pet-alerts__pet pet" key={pet.id}>
          <Card pet={pet} />
        </li>
      ))}
    </ul>
  );
};

export default CardList;
