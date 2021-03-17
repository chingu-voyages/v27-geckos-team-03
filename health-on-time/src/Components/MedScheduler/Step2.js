import React, { useState } from 'react';
import "antd/dist/antd.css"; // npm install antd
import { TimePicker } from "antd";
//import moment from 'moment';
import { Row, Col, Button, Container, Modal, ListGroup, Card } from 'react-bootstrap';
import { fixCapitalization, toTwelveHr } from "./helpers"
import "../../Styles/MedScheduler.css"

export default function Step2(props){

    const [modalShow, setModalShow] = React.useState(false);

    /*if (props.existingPrescription)
        props.setState('theTimes', props.existingPrescription.hours);
    */
    // timeValue: a 13 digit timestamp obtained from TimePicker
    const [timeValue, setTimeValue] = useState("");

    // Passed as TimePicker's component's onChange
    const onTimeChange = time => {
        if (time !== null) 
            setTimeValue(time);
    };

    // helper: extract hour portion of 13 digit timestamp produced from Timepicker
    const retrieveHour = aTime => ( new Date(aTime).getHours() );

    /************************************************************************
     * Function: addTime()
     * Event listener for the timepicker
     *///////////////////////////////////////////////////////////////////////
    const addTime = () => {
        if (timeValue === "")
            return; // if user clicked "Add time" before choosing a time, just ignore

        const hrToAdd = retrieveHour(timeValue); // extract the hour

        // If theTimes not yet initialized, just add hrToAdd
        if (!props.theHoursX || props.theHoursX.length === 0) {
            props.setTheHoursX([hrToAdd]);
        }
            
        /* If theTimes already exists and it doesn't already have that time, then add */
        if ((props.theHoursX) && (!props.theHoursX.includes(hrToAdd))) {
            let newTimes = [...props.theHoursX, hrToAdd].sort((a, b) => a - b);
            props.setTheHoursX(newTimes);
        }
    } // end function addTime

    function timesList() {
        if (!props.theHoursX)
            return null;
        
        return (
            <Container>
                <Row>
                    <Col>
                        <div className={"pt-2 pb-0 px-4 mb-4 rounded timeDisplay"} style={{ backgroundColor: "#39C0ED" }}>
                            <div className="mb-2 text-center">
                                <span style={{ fontSize: "1.1rem" }} className="text-light"><b>Your doses of {fixCapitalization(props.chosenMed.brandName)} will be taken at: </b></span>
                            </div>
                            <div className="d-flex flex-wrap justify-content-around">
                                {props.theHoursX.map((time, index) => 
                                    <p style={{fontSize: "1.4rem"}}><span className={"badge mx-1 badge-secondary"} key={{ time } + '.' + index}>
                                        {toTwelveHr(time)}
                                    </span></p>
                                )}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        ) 

    }// end function timesList

    return (
        <Container className="step-container">
            {/*<Row>
                <Col>
                    {timesList()} 
                </Col>

            </Row> */}
            <Row className="mt-3">
                <Col md={4}>
                    <Card className={"timePickerCard"} style={{ marginTop: "0px" }} border={"info rounded"} bg={"light"}>
                        <Card.Body>
                            <TimePicker
                                timeValue={timeValue}
                                size={'large'}
                                onChange={onTimeChange}
                                format={"h a"}
                                showNow={false}
                                use12Hours
                                //defaultValue={moment("00:00", "HH:mm")}       
                            />
                            <Card.Text className={"small mt-5 pb-0 pt-1 text-center text-danger"}>Make sure to click "ok" when using the time picker.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            
                            <Row>
                                <Col>
                                    <Button className={"mb-2"} onClick={addTime} block>Add to schedule</Button>
                                    <Button variant={"danger"} block onClick={() => props.setTheHoursX([])}>Clear stored values</Button>
                                </Col>
                            </Row>

                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={8}>
                    <div className="d-flex flex-wrap">
                        {timesList()}
                    </div>
                    <ListGroup className={"text-left"}>
                        <ListGroup.Item>
                            Select a time in the time picker & click "OK" to select the time. 
                            Then Click the blue "Add to schedule" button to save the time.
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Continue adding additional times to the schedule until you are finished.
                        </ListGroup.Item>
                        <ListGroup.Item>
                            When you are done entering the times for <b>{fixCapitalization(props.chosenMed.brandName)}</b>, click "Proceed" at the bottom to finish.
                        </ListGroup.Item>

                    </ListGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    
                </Col>
                <Col>
                </Col>
            </Row>
            <Row className={'mt-3'}>
                <Col className="text-center">
                    <Button variant={'danger'} onClick={props.cancelout}>Cancel</Button>
                </Col>
                <Col className="text-center">
                    <Button onClick={props.prev}>Previous</Button>
                </Col>
                <Col className="text-center">
                    <Button variant={'success'} onClick={validate}>Proceed</Button>
                </Col>
            </Row>

            <Step2ErrorModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Container>
    );

    // Check that user actually set some times to state
    function validate() {
        //const currTimes = props.getState('theTimes');
        /*if (!currMondayTimes || currMondayTimes.length === 0) {
        }*/
        (props.theHoursX && props.theHoursX.length > 0) ?
            (function () {
                props.next();
            })()
            :
            setModalShow(true)
    } // end function validate

    function Step2ErrorModal(props) {
        return (
            <Modal
                {...props}
                animation={false}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <h4>Warning! It doesn't look like you saved any times at all.</h4>
                    <p>You must enter some times to proceed.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => props.onHide()}>Return to Add times</Button>
                    {/*<Button onClick={props.myJump(12)}>Continue Anyway</Button>*/}
                    {/* <Button onClick={() => props.myjump(6)}>Continue Anyway</Button> */}

                </Modal.Footer>
            </Modal>
        );
    } // end Step2ErrorModal

} // end function Step2
