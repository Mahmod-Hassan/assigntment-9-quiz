import React from 'react';
import { Col } from 'react-bootstrap';

const Options = ({ option }) => {
    return (
        <Col>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios" value="option1" checked />
                <label className="form-check-label" for="exampleRadios1">
                    {option}
                </label>
            </div>
        </Col>
    );
};

export default Options;