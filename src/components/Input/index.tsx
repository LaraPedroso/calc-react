import { InputContainer } from "./styles";

export const Input = ({ value }: any) => {
    return (
        <InputContainer>
            <input disabled value={value} />
        </InputContainer>
    );
};
