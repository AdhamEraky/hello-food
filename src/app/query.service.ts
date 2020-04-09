import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';

export interface IUser {
  id: string;
  name: string;
  posts: IPost;
  comments: IComment[];
}

export interface IPost { 
  id: string;
  text: string;
  createdAt: string;
  title: string;
  comments: IComment[];
}

export interface IComment { 
  id: string;
  text: string;
  user: IUser;
  updatedAt: string;
  createdAt: string;
}


export interface AllResponse {
  allUsers: IUser[];
}


@Injectable({
  providedIn: 'root'
})

export class AllCommentsGQL extends Query<AllResponse> {
  document = gql`
    query {
      allUsers (first :10) {
        id
        name
        posts {
          text
          id
          createdAt
          title
          comments (last : 2){
            user {
              name
            }
            id
            text
            updatedAt
            createdAt
          }
        }
      }
    }
  `;

}