import React from 'react';


function LanguageList() {
    return (
        <div>
            <ul>
                <li>React</li>
                <li>Java</li>
                <li>Spring Microservices</li>
            </ul>
            <div>
                <a href="https://yourdomain.com/logout?client_id=your_client_id
                &response_type=token
                &scope=openid&redirect_uri=http://localhost:3000">Logout</a>
            </div>
        </div>
    );
}

export default LanguageList;