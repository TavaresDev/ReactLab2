import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const NavButton = (props) => {
    try {
        //add component logic here
        const { label, linkTo } = props;
        if (!label || !linkTo) {
            throw new Error('You are missing a required attribute ( label or linkTo)')
        }
        

        return (

                <Link to={linkTo}>
                    <Button variant="secondary">
                            {label}
                    </Button>
                </Link>
        );
    }
    catch (error) {
        console.error(error.message);
        console.error(error.stack);

        return null;
    }


};

export default NavButton;