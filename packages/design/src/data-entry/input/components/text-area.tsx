import { InputProps } from "../type";

export default ({
  value,
  disabled,
  placeholder = '请输入',
  maxLength,
  onChange,
  onBlur,
  onFocus,
  onPressEnter,
}: InputProps) => {
  return (
    <textarea
      readOnly={disabled}
      className={disabled ? 'yld-textarea-disabled' : 'yld-textarea'}
      placeholder={placeholder}
      maxLength={maxLength}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      onBlur={(e) => {
        onBlur?.(e);
      }}
      onFocus={(e) => {
        onFocus?.(e);
      }}
      onKeyDown={(e) => {
        if (e.keyCode === 13) {
          onPressEnter?.(e);
        }
      }}
    >
      {value}
    </textarea>
  );
};
