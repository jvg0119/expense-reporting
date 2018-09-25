import Enzyme from 'enzyme'; 
import Adapter from 'enzyme-adapter-react-16'; 

// require('dotenv').config({ path: '.env.test' }); 
import DotEnv from 'dotenv'; // you can use this instead of the one above  
DotEnv.config({ path: '.env.test' });

Enzyme.configure({
  adapter: new Adapter() 
}); 
