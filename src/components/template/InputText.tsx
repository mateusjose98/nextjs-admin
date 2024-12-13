interface InputTextProps {
  label: string;
  value: string;
  onChange: (newValue: string) => void;
  type?: string;
  required?: boolean;
  hide?: boolean;
}

export default function InputText(props: InputTextProps) {
  return props.hide ? null : (
    <div className="flex flex-col mt-4">
      <label className="font-bold">{props.label}</label>
      <input
        type={props.type ?? 'text'}
        value={props.value}
        onChange={(e) => props.onChange?.(e.target.value)}
        required={props.required}
        className={`
          bg-gray-200
          text-gray-800
          focus:outline-none
          focus:bg-white
          px-4 py-2
          rounded-lg
          mt-2
        `}
      />
    </div>
  );
}
