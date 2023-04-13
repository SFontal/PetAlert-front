import { ReactComponent as Mail } from "../../assets/icons/mail.svg";
import { ReactComponent as HiddenPassword } from "../../assets/icons/hide.svg";
import { ReactComponent as UnhiddenPassword } from "../../assets/icons/unhide.svg";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  hidePasswordActionCreator,
  unhidePasswordActionCreator,
} from "../../store/features/uiSlice/uiSlice";
import capitalizeWord from "../../utils/capitalizeWord/capitalizeWord";

interface SelectIconProps {
  icon: string;
}

const SelectIcon = ({ icon }: SelectIconProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const { isPasswordHide } = useAppSelector((state) => state.ui);

  const togglePasswordVisibilityHandler = () => {
    dispatch(
      isPasswordHide
        ? unhidePasswordActionCreator()
        : hidePasswordActionCreator()
    );
  };

  if (icon === "email") {
    return (
      <Mail
        className={`icon__${icon}`}
        role="img"
        title={capitalizeWord(icon)}
      />
    );
  }

  if (icon === "password") {
    return isPasswordHide ? (
      <HiddenPassword
        className={`icon__${icon}`}
        role="img"
        title={`Unhide ${icon}`}
        onClick={togglePasswordVisibilityHandler}
      />
    ) : (
      <UnhiddenPassword
        className={`icon__${icon}`}
        role="img"
        title={`Hide ${icon}`}
        onClick={togglePasswordVisibilityHandler}
      />
    );
  }

  return <></>;
};

export default SelectIcon;
