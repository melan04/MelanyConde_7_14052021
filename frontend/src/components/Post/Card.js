import React from 'react';
import { useSelector } from 'react-redux';
import { dateParser } from '../Utils';
// import { isEmpty } from '../Utils';

const Card = ({ article }) => {
    //  const [isLoading, setIsLoading] = useState(true);
    const users = useSelector((state) => state.usersReducer);
    const user = useSelector((state) => state.userReducer);

    //  useEffect(() => {
    //     users.length > 0 && setIsLoading(false);
    //  }, [users])

    return (
        <li className="card-container" key={article.id}>
            <div className="card-left">
                <img src={"http://localhost:8080/images/" + user.imageUrl} alt="pix post" />
            </div>
            <div className="card-right">
                <div className="card-header">
                    <div className="pseudo">
                        <h3>{user.firstname}</h3>
                    </div>
                    <span>{dateParser(article.createdAt)}</span>
                </div>
                <p className ="card-title">{article.title}</p>
                <p>{article.content}</p>
            </div>
        </li>
    );
};

export default Card;