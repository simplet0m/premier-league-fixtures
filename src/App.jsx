import { useState } from 'react'
import './App.css'
import MatchList from './components/MatchList.jsx'

export default function App() {
  return (
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1 style={{ textAlign: "center" }}>This Week’s Premier League Fixtures</h1>
        <MatchList />
      </div>
  );
}


