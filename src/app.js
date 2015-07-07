import React   from 'react/addons';
import Counter from './components/counter';


const MAIN_CONTENT_ELEMENT = document.getElementById('main-content');


React.render(<Counter />, MAIN_CONTENT_ELEMENT);
