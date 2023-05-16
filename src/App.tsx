import { useState } from "react";
import { Container, Content, Row } from "./styles";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
const App = () => {
    const [currentNumber, setCurrentNumber] = useState("0");
    const [operation, setOperation] = useState("");
    const [firstNum, setFirstNum] = useState("0");

    const handleOnClear = () => {
        setCurrentNumber("0");
        setFirstNum("0");
        setOperation("+");
    };

    const handleNumber = (number: any) => {
        setCurrentNumber((prev) => `${number}${prev === "0" ? "" : prev}`);
    };

    const handleSum = () => {
        if (firstNum === "0") {
            setFirstNum(String(currentNumber));
            setCurrentNumber("0");
            setOperation("+");
        } else {
            const sum = Number(firstNum) + Number(currentNumber);
            setCurrentNumber(String(sum));
            setOperation("");
        }
    };

    const handleSub = () => {
        if (firstNum === "0") {
            setFirstNum(String(currentNumber));
            setCurrentNumber("0");
            setOperation("-");
        } else {
            const sub = Number(firstNum) - Number(currentNumber);
            setCurrentNumber(String(sub));
            setOperation("");
        }
    };

    const handleMult = () => {
        if (firstNum === "0") {
            setFirstNum(String(currentNumber));
            setCurrentNumber("0");
            setOperation("*");
        } else {
            const mult = Number(firstNum) * Number(currentNumber);
            setCurrentNumber(String(mult));
            setOperation("");
        }
    };

    const handleDiv = () => {
        if (firstNum === "0") {
            setFirstNum(String(currentNumber));
            setCurrentNumber("0");
            setOperation("/");
        } else {
            const div = Number(firstNum) / Number(currentNumber);
            setCurrentNumber(String(div));
            setOperation("");
        }
    };

    const handleEquals = () => {
        if (firstNum !== "0" && operation !== "" && currentNumber !== "0") {
            switch (operation) {
                case "+":
                    handleSum();
                    break;
                case "-":
                    handleSub();
                    break;
                case "*":
                    handleMult();
                    break;
                case "/":
                    handleDiv();
                    break;
                default:
                    break;
            }
        }
    };

    return (
        <Container>
            <Content>
                <Input value={currentNumber} />
                <Row>
                    <Button value={"*"} onClick={handleMult} />
                    <Button value={"/"} onClick={handleDiv} />
                    <Button value={"x"} onClick={handleOnClear} />
                </Row>
                <Row>
                    <Button value={"1"} onClick={() => handleNumber("1")} />
                    <Button value={"2"} onClick={() => handleNumber("2")} />
                    <Button value={"3"} onClick={() => handleNumber("3")} />
                    <Button value={"+"} onClick={handleSum} />
                </Row>
                <Row>
                    <Button value={"4"} onClick={() => handleNumber("4")} />
                    <Button value={"5"} onClick={() => handleNumber("5")} />
                    <Button value={"6"} onClick={() => handleNumber("6")} />
                    <Button value={"-"} onClick={handleSub} />
                </Row>
                <Row>
                    <Button value={"7"} onClick={() => handleNumber("7")} />
                    <Button value={"8"} onClick={() => handleNumber("8")} />
                    <Button value={"9"} onClick={() => handleNumber("9")} />
                    <Button value={"="} onClick={handleEquals} />
                </Row>
            </Content>
        </Container>
    );
};

export default App;
