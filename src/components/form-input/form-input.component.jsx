import {FormInputLabel, Input, Group} from "./form-input.styles.jsx";

const FormInput = ({ label, ...otherprops }) => {
    return <Group>
        <Input {...otherprops} /> 
        {
            label && (
            <FormInputLabel shrink={otherprops.value.length? true : false}>{label}</FormInputLabel>
            )
        }
    </Group>
}

export default FormInput;