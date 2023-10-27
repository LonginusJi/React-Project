import './App.css'

import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from 'react-router-dom';

import { Clock } from './clock';
import { Countdown } from './countdown';

export default function App() {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         deadline: 'Dec. 25, 2018',
    //         newDeadline: ''
    //     }
    // }
    // changeDeadline() {
    //     this.setState({
    //         deadline: this.state.newDeadline
    //     })
    // }

    return (
        <React.Fragment>
            {/* <Router basename={window.basePath.slice(0, -1)}> */}
            <Router>
                <div id="page-container" className="container">
                    <Routes>
                        <Route path="/" element={<Clock />} />
                        <Route path="/countdown" element={<Countdown />} />

                        {/* <Route path="/login" render={Login.login} />

                    <Route path="/testgateway" render={TestGateway.testGateway} />

                    <Route path="/profile" render={props => (Profile.profile(testResult))} />
                    <Route path="/accommodations" render={Profile.accommodations} />
                    <Route path="/directions" render={Profile.directions} />

                    <Route path="/ready1" render={Readiness.readinessCheck} />
                    <Route path="/ready2" render={RemoteProctoringTest.identityVerification} />
                    <Route path="/ready3" render={RemoteProctoringTest.roomScan} />
                    <Route path="/ready4" render={RemoteProctoringTest.calibration} />

                    <Route path="/testcontent" render={Test.testContent} /> */}
                    </Routes>

                </div>
            </Router>
        </React.Fragment>
        // <div className='App'>
        //     <div className='App-title'>
        //         Countdown to {this.state.deadline}</div>
        //     <Clock deadline={this.state.deadline} />
        //     <Form inline className='center-block'>
        //         <FormControl
        //             className='Deadline-input'
        //             placeholder='New date' onChange={event => { this.setState({ newDeadline: event.target.value }) }} />
        //         <Button onClick={() => this.changeDeadline()}>Submit</Button>
        //     </Form>
        // </div>)
    )
}
