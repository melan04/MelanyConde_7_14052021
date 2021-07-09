import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadPicture } from "../../actions/user.actions";


const UploadImg = () => {
    const [imageUrl, setimageUrl] = useState('');
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userReducer);


    const handlePicture = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("name", user.firstname);
        data.append('userID', user.id);
        data.append("image", imageUrl);

        dispatch(uploadPicture(data,user.id))
    };

    return (
        <form action="" onSubmit={handlePicture} className="upload-pic">
            <label htmlFor="file">Changer d'image</label>
            <input
                type="file"
                id="file"
                name="file"
                accept=".jpg, .jpeg, .png"
                onChange={(e) => setimageUrl(e.target.files[0])}
            />
            <br />
            <input type="submit" value="Envoyer" />
        </form>
    );
};

export default UploadImg;