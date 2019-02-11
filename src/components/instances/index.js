import React from 'react';
import { Link } from 'react-router-dom';

const Instances = () => (
  <div>
    <p>List Instances</p>
    <p><Link to="/instances/edit/1">Edit</Link></p>
    <p><Link to="/instances/new">New</Link></p>
  </div>

);

export default Instances;
