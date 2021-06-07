import React from 'react';

function Login () {

    return (
        <div>
           Click Here to<a href="https://yourdomain.com/login?client_id=your_client_id
           &response_type=token
           &scope=openid&redirect_uri=http://localhost:3000"> Login</a>
        </div>
    )
}

export default Login;
