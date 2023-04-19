import { useState } from "react";
import { Button, Col, FormCheck, ListGroup, Row } from "react-bootstrap";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";

type CheckItemProps = { index: number, text: string, callback: Function }

function Item({ index, text, callback }: CheckItemProps) {

    const number = index + 1;
    const [value, setValue] = useState<number>(0);

    const updateValue = (index: number, value: number) => {
        callback(index, value);
        setValue(value);
    };

    return (
        <ListGroup.Item>
            <div className="mt-3">
                <span>{number}: {text} </span>
            </div>
            <ListGroup className="mt-5 mb-3 m-1" horizontal>
                <ListGroup.Item action onClick={() => updateValue(index, 1)}>
                    <FormCheck className="form-check-inline">
                        <FormCheckInput role="button" id={`item_${number}_1`} name={`item_${number}`} value="1" type="radio" onChange={() => { }} checked={value === 1} />
                        <FormCheckLabel role="button" htmlFor={`item_${number}_1`}>1. Disagree strongly</FormCheckLabel>
                    </FormCheck>
                </ListGroup.Item>
                <ListGroup.Item action onClick={() => updateValue(index, 2)}>
                    <FormCheck className="form-check-inline">
                        <FormCheckInput role="button" id={`item_${number}_2`} name={`item_${number}`} value="2" type="radio" onChange={() => { }} checked={value === 2} />
                        <FormCheckLabel role="button" htmlFor={`item_${number}_2`}>2. Disagree to some extent</FormCheckLabel>
                    </FormCheck>
                </ListGroup.Item>
                <ListGroup.Item action onClick={() => updateValue(index, 3)}>
                    <FormCheck className="form-check-inline">
                        <FormCheckInput role="button" id={`item_${number}_3`} name={`item_${number}`} value="3" type="radio" onChange={() => { }} checked={value === 3} />
                        <FormCheckLabel role="button" htmlFor={`item_${number}_3`}>3. Agree to some extent</FormCheckLabel>
                    </FormCheck>
                </ListGroup.Item>
                <ListGroup.Item action onClick={() => updateValue(index, 4)}>
                    <FormCheck className="form-check-inline">
                        <FormCheckInput role="button" id={`item_${number}_4`} name={`item_${number}`} value="4" type="radio" onChange={() => { }} checked={value === 4} />
                        <FormCheckLabel role="button" htmlFor={`item_${number}_4`}>4. Agree strongly</FormCheckLabel>
                    </FormCheck>
                </ListGroup.Item>
            </ListGroup>
        </ListGroup.Item>

    );

}

export default Item;