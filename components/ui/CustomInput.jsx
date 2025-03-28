import { Input } from "./input"

export const CustomInput = ({htmlFor, label, type, id, name, value, className, placeholder, onChange, ref}) => {
  return (
    <div>
        <label htmlFor={htmlFor}>{label}</label>
        <Input type={type} id={id} name={name} value={value} className={className} placeholder={placeholder} onChange={onChange} ref={ref}/>
    </div>
  )
}
