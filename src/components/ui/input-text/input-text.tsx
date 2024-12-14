import { ChangeEvent, KeyboardEvent } from "react";
import styles from './input-text.module.scss';

interface IInputText {
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  full?: boolean;
}

export default function InputText({ 
  placeholder,
  value,
  onChange,
  onKeyDown,
  full = false }: IInputText) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className={`${styles.input} ${full ? styles.full : ''}`}
    />
  )
};
