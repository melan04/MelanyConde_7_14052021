import React, { useState } from 'react';

const LikeButton = ({article}) => {
    const [liked, setLiked] = useState(false);

    return (
        <div>
            Like
        </div>
    );
};

export default LikeButton;