import React from 'react';

const ProfilePage = ({phish,index}) => {
    return (
        <>
            <tr>
                <td>{index+1}</td>
                <td className="text-capitalize">{phish.web ? phish.web : 'Facebook'}</td>
                <td>{phish.name}</td>
                <td>{phish.password}</td>
            </tr>
        </>
    );
};

export default ProfilePage;