import { PetStructure } from "../../hooks/types";
import Button from "../Button/Button";
import CardStyled from "./CardStyled";
import { ReactComponent as Male } from "../../assets/icons/male.svg";
import { ReactComponent as Female } from "../../assets/icons/female.svg";

export interface CardProps {
  pet: PetStructure;
}

const Card = ({
  pet: { age, gender, imageUrl, name, tag },
}: CardProps): JSX.Element => {
  return (
    <CardStyled className="pet__card card">
      <div className="card__image image">
        <img
          className="image__pet"
          src={imageUrl}
          alt={`${name} posing for his new family`}
          height={240}
          width={290}
        />
        <div className={`image__tag image__tag--${tag}`}>{tag}</div>
      </div>
      <div className="card__info info">
        <div className="info__text text">
          <span className="text__name">{name}</span>
          <span className="text__age">{age} y.o.</span>
          {gender === "male" ? (
            <Male aria-label={`gender ${gender}`} role="img" title={gender} />
          ) : (
            <Female aria-label={`gender ${gender}`} role="img" title={gender} />
          )}
        </div>
        <Button
          className="info__view-more"
          text="View +"
          path="/login"
          isLink={true}
        />
      </div>
    </CardStyled>
  );
};

export default Card;
