import { useRanger } from "react-ranger";
type NumberSliderProps = {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const NumberSlider = ({ label, name, value, onChange }: NumberSliderProps) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="range"
        min={"0"}
        max={"100"}
        step={".5"}
        value={value}
        onChange={onChange}
        name={name}
      />
      <span>{value}</span>
    </div>
  );
};

export default NumberSlider;
