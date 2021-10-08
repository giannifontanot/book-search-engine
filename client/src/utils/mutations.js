import {gql} from '@apollo/client';

export const CREATE_USER = gql`
    mutation createUser(
        $username: String!, 
        $email: String!, 
        $password: String!
    ) {
        createUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook(
        $author: String
        $description: String
        $title: String
        $bookId: String
        $image: String   
    ){
        saveBook(
            author: $author
            description: $description
            title: $title
            bookId: $bookId
            image: $image
        ){
            _id
        }
    }
`;

export const DELETE_BOOK = gql`
    mutation deleteBook($bookId: String){
        deleteBook(bookId: $bookId){
            _id
            username
        }
    }
`;


