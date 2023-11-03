import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Clock from './pages/clock';
import Countdown from './pages/countdown';
import ProgressBar from './pages/progress_bar';
import Rect from './pages/rect';
import Ws from './pages/ws';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Clock />} />
        <Route path="/countdown" element={<Countdown />} />
        <Route path="/progressbar" element={<ProgressBar />} />
        <Route path="/rect" element={<Rect />} />
        <Route path="/ws" element={<Ws />} />
      </Routes>
    </Router>
  );
}
