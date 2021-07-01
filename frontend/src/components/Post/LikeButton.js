// import React, { useContext, useEffect, useState } from 'react';
// import { UidContext } from '../AppContext';
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

// const LikeButton = ({ article }) => {
//     const [likes, setLikes] = useState(false);
//     const uid = useContext(UidContext);
//     const like = () => {}
//     const unlike = () =>{} 

//     useEffect(() => {
//         if (like.includes(uid)) setLikes(true)
//     }, [uid, article.likers, likes]);


//     return (
//         <div className="like-containter">
//             {uid === null &&
//                 <Popup trigger={<img src="./img/icons/heart.svg" alt="like" />}
//                     position={['bottom center', 'bottom right', 'bottom left']}
//                     closeOnDocumentClick
//                 >
//                     <div> Connectez-vous pour aimer un post !</div>
//                 </Popup>
// }
// {uid && likes === false && (
//     <img src = "./img/icons/heart.svg" onClick={like} alt="like" />
// )}
// {uid && likes && (
//     <img src = "./img/icons/heart-filled.svg" onClick={unlike} alt="unlike" />
// )}


//         </div>

//     );
// };

// export default LikeButton;