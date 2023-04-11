import LoadingButtonStyled from "./LoadingButtonStyled";

interface LoadingButtonProps {
  className: string;
  ariaLabel: string;
}

const LoadingButton = ({
  className,
  ariaLabel,
}: LoadingButtonProps): JSX.Element => {
  return (
    <LoadingButtonStyled
      className={className}
      aria-label={ariaLabel}
    ></LoadingButtonStyled>
  );
};

export default LoadingButton;
