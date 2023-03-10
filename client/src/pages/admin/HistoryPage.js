import React from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import "../../css/usermessage.css";

class HistoryPage extends React.Component {
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
                                    Request ID
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    User ID
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Animal ID
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Request Date
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-secondary-200 bg-secondary-100 text-neutral-800">
                                <td class="px-6 py-4">
                                    R1
                                </td>
                                <td class="px-6 py-4">
                                    A1
                                </td>
                                <td class="px-6 py-4">
                                    B1
                                </td>
                                <td class="px-6 py-4">
                                    1-2-22
                                </td>
                                <td class="px-6 py-4">
                                    Email
                                </td>
                                <td class="px-6 py-4">
                                    Status
                                </td>
                              
                            </tr>
                           
                            <tr class="border-b border-neutral-100 bg-neutral-50 text-neutral-800 dark:bg-neutral-50">
                                <td class="px-6 py-4">
                                    R1
                                </td>
                                <td class="px-6 py-4">
                                    A1
                                </td>
                                <td class="px-6 py-4">
                                    B1
                                </td>
                                <td class="px-6 py-4">
                                    1-2-22
                                </td>
                                <td class="px-6 py-4">
                                    Email
                                </td>
                                <td class="px-6 py-4">
                                    Status
                                </td>
                              
                            </tr>

                            <tr class="border-b border-secondary-200 bg-secondary-100 text-neutral-800">
                                <td class="px-6 py-4">
                                    R1
                                </td>
                                <td class="px-6 py-4">
                                    A1
                                </td>
                                <td class="px-6 py-4">
                                    B1
                                </td>
                                <td class="px-6 py-4">
                                    1-2-22
                                </td>
                                <td class="px-6 py-4">
                                    Email
                                </td>
                                <td class="px-6 py-4">
                                    Status
                                </td>
                              
                            </tr>

                            <tr class="border-b border-neutral-100 bg-neutral-50 text-neutral-800 dark:bg-neutral-50">
                                <td class="px-6 py-4">
                                    R1
                                </td>
                                <td class="px-6 py-4">
                                    A1
                                </td>
                                <td class="px-6 py-4">
                                    B1
                                </td>
                                <td class="px-6 py-4">
                                    1-2-22
                                </td>
                                <td class="px-6 py-4">
                                    Email
                                </td>
                                <td class="px-6 py-4">
                                    Status
                                </td>
                              
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default HistoryPage;
