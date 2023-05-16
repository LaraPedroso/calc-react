import { ButtonContainer } from "./styles";

interface IPropsButton {
    value: any;
    onClick?: any;
}

export const Button = ({ value, onClick }: IPropsButton) => {
    return <ButtonContainer onClick={onClick}>{value}</ButtonContainer>;
};
