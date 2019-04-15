import React, { Component } from 'react';
import { FreeFontsProvider } from '../contexts/freeFonts';
import PageRouter from './PageRouter';

const AppProvider = ({ contexts, children }) =>
  contexts.reduce(
    (prev, context) =>
      React.createElement(context, {
        children: prev
      }),
    children
  );

class App extends Component {
  render() {
    return (
      <AppProvider contexts={[FreeFontsProvider]}>
        <PageRouter />
      </AppProvider>
    );
  }
}

export default App;
