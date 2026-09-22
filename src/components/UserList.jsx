// import Spinner from "./Spinner.jsx";

import { useState } from "react";
import UserDetailsModal from "./UserDetailsModal.jsx";
import UserListItem from "./userListItem.jsx";
import DeleteModal from "./DeleteModal.jsx";
import Spinner from "./Spinner.jsx";
import CreateEditModal from "./CreateEditModal.jsx";

const usersApi = 'https://jekwxfohagnknpkqdgdo.supabase.co/rest/v1/users';
const apikey = "sb_publishable_5H15oY-8n1QtXELqWorURg_FvFk-0Ha";

export default function UserList({
    users,
    onUserUpdate
}) {
    const [userDetailsOpen, setUserDetailsOpen] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [showUserDelete, setShowUserDelete] = useState(false);
    const [showUserEdit, setShowUserEdit] = useState(false);

    const infoClickHandler = async (userId) => {
        setUserDetailsOpen(true);
        setSelectedUserId(userId);

    };

    const closeModalHandler = () => {
        setUserDetailsOpen(false)
        setShowUserDelete(false)
        setShowUserEdit(false)
        setSelectedUserId(null)
    }

    const showUserDeleteHandler = (userId) => {
        setShowUserDelete(true)
        setSelectedUserId(userId)
    }


    const clickDeletHandler = async () => {

        try {
            const res = await fetch(`https://jekwxfohagnknpkqdgdo.supabase.co/rest/v1/users?id=eq.${selectedUserId}`, {
                method: 'DELETE',
                headers: {
                    apikey,
                    Prefer: "return=representation"
                }
            })
            const data = await res.json();
            console.log(data);

            onUserUpdate();
        } catch (error) {
            console.log(error);
        } finally {
            closeModalHandler()
        }

    };

    const showUserEditHandler = (userId) => {
        setShowUserEdit(true)
        setSelectedUserId(userId)
    }


    const clickEditSubmitHandler = async (userData) => {
        try {
            await fetch(`${usersApi}?id=eq.${selectedUserId}`, {
                method: 'PATCH',
                headers: {
                    "Content-type": "application/json",
                    apikey
                },
                body: JSON.stringify(userData)
            })
            onUserUpdate();
            closeModalHandler()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="table-wrapper">

            {/* <Spinner /> */}
            {users.length === 0 && <Spinner />}

            <table className="table">
                <thead>
                    <tr>
                        <th>
                            Image
                        </th>
                        <th>
                            First name<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Last name<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Email<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true"
                                focusable="false" data-prefix="fas" data-icon="arrow-down" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Phone<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Created
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {users.map(user => <UserListItem key={user.id} {...user} onInfo={infoClickHandler} onDelete={showUserDeleteHandler} onEdit={showUserEditHandler} />)}

                </tbody>
            </table>

            {userDetailsOpen && <UserDetailsModal userId={selectedUserId} onClose={closeModalHandler} />}
            {showUserDelete && <DeleteModal onClose={closeModalHandler} onClickDelete={clickDeletHandler} />}
            {showUserEdit && <CreateEditModal userId={selectedUserId} onClose={closeModalHandler} onSubmit={clickEditSubmitHandler} edit />}
        </div>
    );
}