import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default class App extends Component {
  state = {
    progress: 0
  };

  apiKey = process.env.REACT_APP_API;

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={6} category="general" />}
            />
            <Route
              path="/business"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={6} category="business" />}
            />
            <Route
              path="/entertainment"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={6} category="entertainment" />}
            />
            <Route
              path="/health"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={6} category="health" />}
            />
            <Route
              path="/science"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={6} category="science" />}
            />
            <Route
              path="/sports"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={6} category="sports" />}
            />
            <Route
              path="/technology"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={6} category="technology" />}
            />
          </Routes>

        </Router>
      </div>
    );
  }
}
