import React from 'react';
import { useDispatch } from 'react-redux';

const DeleteProfil = (props) => {
    const dispatch = useDispatch();
    const deleteProfil = () => dispatch(deleteProfil(props.id))
    return (
        <div onClick={() => {
            if (window.confirm('Voulez-vous supprimer votre profil ? ')) {
                deleteProfil();
            }
        }}
        >
            <img src="./img/icons/trash.svg" alt="trash" />
        </div>
    );
};

export default DeleteProfil;