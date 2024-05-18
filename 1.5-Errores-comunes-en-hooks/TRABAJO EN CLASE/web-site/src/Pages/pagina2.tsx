import React from 'react';
import Component1 from '../Components/component1';
import Component2 from '../Components/component2';
import Component3 from '../Components/component3';
import Component4 from '../Components/component4';
import Component5 from '../Components/component5';
import Component6 from '../Components/component6';
import './page2.css'
    const Page2: React.FC = () => (
    <div className='compon'>
        <h1>Page 2</h1>
        <div className='c1'>
            
        <Component1 />
        <Component2 />
        <Component3 />
        </div>
        <div className='c2'>
        <Component4 />
        <Component5 />
        <Component6 />
        </div>
    </div>
    );


    export default Page2;
