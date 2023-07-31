import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Import root app
import { App } from 'app';

const MOUNT_NODE = document.getElementById('root') as HTMLElement;

ReactDOM.render(<App />, MOUNT_NODE);
