import React from 'react';

interface IPost {
    id: number,
    userId: number,
    title: string,
    body: string,
}

const Post: React.FC<IPost> = ({ title, body }: IPost) => {
    return (
        <ul>
            <li>{title}</li>
            <li>{body}</li>
        </ul>
    );
};

export default Post;