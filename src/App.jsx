import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import { Clock } from './pages/clock';
import { Countdown } from './pages/countdown';
import { ProgressBar } from './pages/progress_bar';
import { Rect } from './pages/rect';

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <div id="page-container" className="container">
          <Routes>
            <Route path="/" element={<Clock />} />
            <Route path="/countdown" element={<Countdown />} />
            <Route path="/progressbar" element={<ProgressBar />} />
            <Route path="/rect" element={<Rect />} />
          </Routes>
        </div>
      </Router>
    </React.Fragment>
  )
}
