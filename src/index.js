import React from 'react';
import ReactDOM from 'react-dom';

import Router from 'src/pages';
import 'antd/dist/antd.css';

const wrapper = document.getElementById('container');

ReactDOM.render(<Router />, wrapper);
