import { FC, InputHTMLAttributes } from "react";
import {FormInputLabel, Input, Group} from "./form-input.styles";
type FormInputProps = {
    label: string
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput : FC<FormInputProps> = ({ label, ...otherprops }) => {
    return <Group>
        <Input {...otherprops} /> 
        {
            label && (
            <FormInputLabel shrink={Boolean(otherprops.value && typeof otherprops.value === 'string'&& otherprops.value.length)}>{label}</FormInputLabel>
            )
        }
    </Group>
}

export default FormInput;