import React, { useState } from "react";
import LeftNav from "../LeftNav";
import { useDispatch, useSelector } from "react-redux";
import UploadImg from "./UploadImg";
import { updateBio } from "../../actions/user.actions";
import { dateParser } from "../Utils";
import DeleteProfil from "./DeleteProfil";

const UpdateProfil = () => {
  const [bio, setBio] = useState("");
  const [updateForm, setUpdateForm] = useState(false);
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updateBio(user.id, bio));
    setUpdateForm(false);
  };

  return (
    <div className="profil-container">
      <LeftNav />
      <h1>Profil de {user.firstname}</h1>
      <div className="update-container">
        <div className="left-part">
          <h3>Photo de profil</h3>
          {user.imageUrl ?
                            <img
                                src={"http://localhost:8080/images/" + user.imageUrl}
                                alt="user"
                                key={"userImage" + user.id}
                            /> : 
                            <img
                                src={"http://localhost:8080/images/undefined.jpeg"}
                                alt="user"
                            />
                        }
          <UploadImg />
        </div>
        <div className="right-part">
          <div className="bio-update">
            <h3>Bio</h3>
            {updateForm === false && (
              <>
                <p onClick={() => setUpdateForm(!updateForm)}>{user.bio}</p>
                <button onClick={() => setUpdateForm(!updateForm)}>
                  Modifier bio
                </button>
              </>
            )}
            {updateForm && (
              <>
                <textarea
                  type="text"
                  defaultValue={user.bio}
                  onChange={(e) => setBio(e.target.value)}
                ></textarea>
                <button onClick={handleUpdate}>Valider modifications</button>
              </>
            )}
            <br />
            <br />
      
            <DeleteProfil id={user.id} />
      
          </div>
          <br />
          <br />
          <h4>Membre depuis le : {dateParser(user.createdAt)}</h4>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfil;
