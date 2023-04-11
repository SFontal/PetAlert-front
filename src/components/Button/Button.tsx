import { useAppSelector } from "../../store/hooks";
import { Link } from "react-router-dom";
import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  className: string;
  text: string;
  ariaLabel?: string;
  path?: string;
  isLink?: boolean;
  onClick?: () => void;
}

const Button = ({
  className,
  text,
  path,
  ariaLabel,
  isLink = false,
  onClick,
}: ButtonProps): JSX.Element => {
  const { isSubmitDisabled } = useAppSelector((state) => state.ui);

  return isLink ? (
    <ButtonStyled className={className} as={"div"}>
      <Link to={`${path}`} aria-label={ariaLabel}>
        {text}
      </Link>
    </ButtonStyled>
  ) : (
    <ButtonStyled
      className={className}
      aria-label={ariaLabel}
      disabled={isSubmitDisabled}
      onClick={onClick}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
