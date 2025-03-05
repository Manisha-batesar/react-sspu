import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

const root = document.getElementById("root");
const reactRoot = createRoot(root);

reactRoot.render(<h1>Hello world</h1>)
