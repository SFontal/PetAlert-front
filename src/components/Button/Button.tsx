import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  className: string;
  text: string;
  path?: string;
  isLink?: boolean;
}

const Button = ({
  className,
  text,
  path,
  isLink = false,
}: ButtonProps): JSX.Element => {
  return isLink ? (
    <ButtonStyled className={className} as={"a"} href={path}>
      {text}
    </ButtonStyled>
  ) : (
    <ButtonStyled className={className}>{text}</ButtonStyled>
  );
};

export default Button;
