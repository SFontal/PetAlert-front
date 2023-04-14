import capitalizeWord from "../../utils/capitalizeWord/capitalizeWord";
import InputStyled from "./InputStyled";
import SelectIcon from "../SelectIcon/SelectIcon";

interface InputProps {
  name: string;
  type: "text" | "email" | "password";
  value: string;
  disabled?: boolean;
  required?: boolean;
  autoComplete?: "on" | "off";
  onChange?: ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  name,
  type,
  value,
  disabled = false,
  required = false,
  autoComplete = "on",
  onChange,
}: InputProps): JSX.Element => {
  return (
    <InputStyled className={`form__${name} ${name}`}>
      <label htmlFor={name}>{capitalizeWord(name)}</label>
      <div className={`${name}-box box`}>
        <input
          className="box__input"
          type={type}
          id={name}
          name={name}
          placeholder={`Introduce your ${name}`}
          aria-placeholder={`Introduce your ${name}`}
          autoComplete={autoComplete}
          onChange={onChange}
          value={value}
          disabled={disabled}
          required={required}
        />
        <div className={"box__icon icon"}>
          <SelectIcon icon={name} />
        </div>
      </div>
    </InputStyled>
  );
};

export default Input;
