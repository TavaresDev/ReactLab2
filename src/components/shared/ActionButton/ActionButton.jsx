import React from 'react';
import { Button} from 'react-bootstrap';
import Styles from './styles';


const ActionButton = (props) => {
    try {
        //add component logic here
        const {label, action} = props;
        if (!label || !action) {
            throw new Error('You are missing a required attribute ( label or action)')
        }
        
        return (
            <Styles.Button onClick={action}>{label}</Styles.Button>

            );
        } 
    catch (error) {
        console.error(error.message);
        console.error(error.stack);

        return null;
    }
            

};

export default ActionButton;