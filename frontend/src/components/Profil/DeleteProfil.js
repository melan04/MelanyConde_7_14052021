import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProfil } from '../../actions/user.actions';

const DeleteProfil = (props) => {
    const dispatch = useDispatch();
    const deleteUser = () => dispatch(deleteProfil(props.id))
    return (
        <div onClick={() => {
            if (window.confirm('Voulez-vous supprimer votre profil ? ')) {
                deleteUser();
                localStorage.clear();
                window.location = "/profil";
            }
        }}
        >
            <img src="./img/icons/trash.svg" alt="trash" />
        </div>
    );
};

export default DeleteProfil;