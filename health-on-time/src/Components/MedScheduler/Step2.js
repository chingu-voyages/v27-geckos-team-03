import React, { useState } from 'react';
import "antd/dist/antd.css"; // npm install antd
import { TimePicker } from "antd";
//import moment from 'moment';
import { Row, Col, Button, Container, Modal, ListGroup, Card } from 'react-bootstrap';
import { fixCapitalization, toTwelveHr } from "./helpers"
import "../../Styles/MedScheduler.css"

export default function Step2(props){

    const [modalShow, setModalShow] = React.useState(false);
    //const theMedName = props.getState('medNameQ');
    //const theDay = "Monday";

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

        //let currentMondayTimes = props.getState('mondayTimes');
        let currentTimes = props.getState('theTimes');

        if (!currentTimes) { // If theTimes not yet initialized, just add hrToAdd
            props.setState('theTimes', [hrToAdd]);
        }
       
        /* If mondayTimes already exists and it doesn't already have that time, then add */
        if ((currentTimes) && (!currentTimes.includes(hrToAdd))) {
            let newTimes = [...currentTimes, hrToAdd].sort((a, b) => a - b);
            props.setState('theTimes', newTimes);
        }
    } // end function addTime

    function timesList() {
        if (!props.getState('theTimes'))
            return null;
        
        return (
            <Container>
                <Row>
                    <Col>
                        <div className={"py-2 px-4 mb-4 rounded timeDisplay"} style={{ backgroundColor: "#39C0ED" }}>
                            <div>
                                <span>Your doses of {fixCapitalization(props.chosenMed.brandName)} will be taken at: </span>
                            </div>
                            <br />
                            <ListGroup horizontal={"sm"} className="justify-content-center">
                                {props.getState('theTimes').map((time, index) => 
                                    <ListGroup.Item className={"ml-2 mr-2 mb-3"} variant={'secondary'} key={{ time } + '.' + index}>
                                        {toTwelveHr(time)}
                                    </ListGroup.Item>
                                )}
                            </ListGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        ) 

    }// end function timesList

    return (
        <Container className="step-container">
            <Row>
                <Col>
                    {timesList()} 
                </Col>

            </Row>
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
                                    <Button variant={"danger"} block onClick={() => props.setState('theTimes', [])}>Clear stored values</Button>
                                </Col>
                            </Row>

                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={8}>
                    <ListGroup className={"text-left"}>
                        <ListGroup.Item>
                            Choose the times you want to take {fixCapitalization(props.chosenMed.brandName)} using the time picker to the right.
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Click "Add to schedule" to save the time to your list.
                        </ListGroup.Item>
                        <ListGroup.Item>
                            If you need to clear the stored times and start over, click "Clear stored values".
                        </ListGroup.Item>
                        <ListGroup.Item>
                            When you are finished entering all your times, click "Proceed" at the bottom to proceed to finish.
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
                    <Button variant={'danger'} onClick={props.cancelOut}>Cancel</Button>
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
        const currTimes = props.getState('theTimes');
        /*if (!currMondayTimes || currMondayTimes.length === 0) {
        }*/
        (currTimes && currTimes.length > 0) ?
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
