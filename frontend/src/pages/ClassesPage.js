import React from 'react';

import Classes from '../components/Classes';
import backgroundImg from '../images/UCF_11.jpg'

const GroupPage = () =>
{

    const background = `linear-gradient(rgba(77,87,101,0.7), rgba(4,9,30,0.7)), url(${backgroundImg})`;

    return(
        <div className='login-wrapper'  style={{backgroundImage: background}}>
            <Classes />
        </div>
    );
};

export default GroupPage;