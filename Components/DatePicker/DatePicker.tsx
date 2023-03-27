import styles from "../../styles/Home.module.css";
interface DatePickerProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DatePicker = ({ label, name, value, onChange }: DatePickerProps) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type="date" value={value} onChange={onChange} name={name} />
    </div>
  );
};

export default DatePicker;
