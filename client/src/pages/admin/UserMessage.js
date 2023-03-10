import React from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import "../../css/usermessage.css";

class UserMessage extends React.Component {
    render() {
        return (

            <div className="App">
                <AdminNavbar />
                <br />


                <div class="user-message">
                    <table class="text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-info-50 dark:bg-info-700 dark:text-dark-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Message
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-secondary-200 bg-secondary-100 text-neutral-800">
                                <td class="px-6 py-4">
                                    Mukesh Agrawal
                                </td>
                                <td class="px-6 py-4">
                                    mukesh@gmail.com
                                </td>
                                <td class="px-6 py-4">
                                    bla bla bla
                                </td>
                              
                            </tr>
                            <tr class="border-b border-neutral-100 bg-neutral-50 text-neutral-800 dark:bg-neutral-50">
                                <td class="px-6 py-4">
                                    Avash Shrestha
                                </td>
                                <td class="px-6 py-4">
                                    ashrestha32@gmail.com
                                </td>
                                <td class="px-6 py-4">
                                    more bla bla bla
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>


















            </div>
        );
    }
}

export default UserMessage;
