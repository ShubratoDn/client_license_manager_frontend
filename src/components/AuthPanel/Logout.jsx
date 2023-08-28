import React, { useEffect } from 'react'
import { doLogout } from 'services/auth';

function Logout() {

    useEffect(() => {
        // Call the logout function when the component mounts.
        doLogout();

    }, []);

    return ;
}

export default Logout