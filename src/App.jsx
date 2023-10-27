import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import { Clock } from './pages/clock';
import { Countdown } from './pages/countdown';

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <div id="page-container" className="container">
          <Routes>
            <Route path="/" element={<Clock />} />
            <Route path="/countdown" element={<Countdown />} />
          </Routes>
        </div>
      </Router>
    </React.Fragment>
  )
}
