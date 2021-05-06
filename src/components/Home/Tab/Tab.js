import React, { useState } from 'react';
import { Tabs } from 'react-bootstrap';
import Food from '../../Food/Food/Food';

const Tab = () => {
   const [key, setKey] = useState('Breakfast');
   return (
      
      <div className="text-center">
         <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="d-flex justify-content-center border-0 p-3"
            variant="pills" 
         >
            <Tab eventKey="Breakfast"  title="Breakfast">
               <Food item={key} />
            </Tab>
            <Tab eventKey="Lunch" title="Lunch">
               <Food item={key} />
            </Tab>
            <Tab eventKey="Dinner" title="Dinner" >
               <Food item={key} />
            </Tab>
         </Tabs>
      </div>
   );
};

export default Tab;