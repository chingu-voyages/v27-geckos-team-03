import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Step2(props) {


    const chosenMed = props.chosenMed;
    

    const existingScheduleX = props.getState('existingScheduleX');
    console.log("props.state entering Step 2:");
    console.dir(props.state);

    if (!existingScheduleX) {
        console.error("I don't think this should ever run");
        props.setState("deleteOldScheduleX", false); // this should already be false
        // If there's not an existing schedule, just jump to Step3
        props.jump(3);
        //return (<></>);
        
        
    } // end if 

    // Otherwise warn user of deletion and confirm.
    else {
        return (
            <Container>
                <h4>Attention!!</h4>
                <p>
                    We found an existing dosage schedule for {theMedName}.
                If you proceed, this existing schedule will be discarded
                and you will be ready to create a new one. Otherwise click "Cancel"
                and the existing schedule will remain in place.
            </p>
                <Row>
                    <Col>
                        <Button className="backBlockButton"
                            variant='danger'
                            onClick={() => props.jump(1)}
                            block
                        
                        >Cancel and keep the existing schedule
                             
                    </Button>
                        <Button
                            variant='success'
                            onClick={proceedToStep3}
                            block>Proceed & make a new schedule for {theMedName}
                    </Button>
                    </Col>
                </Row>
            </Container>
        );
    }

    function proceedToStep3() {
        props.setState("deleteOldScheduleZ", true);
        props.next();
        // Or somehow run a command to purge DB of old schedule entries?
    } // end function
}