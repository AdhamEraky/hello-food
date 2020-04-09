import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag'; 



@Injectable({
  providedIn: 'root'
})
export class MutationService extends Mutation {

  document = gql `
    mutation upvotePost($postId: Int!){
      upvotePost(postId : $postId){
        id
        votes
      }
    }
  `;
}


@Injectable()
export class CreateCommentGQL extends Mutation {
  document = gql`
    mutation CreatComment ($post_id: ID! , $comment_content: String!){
      createComment( postId: $post_id , text:$comment_content){
        id
        text
        createdAt
        updatedAt
        user {
          name
        }
      }
    }
  `
}


@Injectable()
export class addPost extends Mutation {
  document= gql`
    mutation createPost($post_content: String!, $post_title: String!) {
      createPost(text:$post_content , title:$post_title) {
        title
        text
        id
      }
    }
    
  `
}



@Injectable()
export class deleteComment extends Mutation{
  document=gql`
  mutation removeFromCommentOnPost ( $post_id: ID! , $comment_id: ID!){
    removeFromCommentOnPost (postPostId: $post_id ,commentsCommentId: $comment_id) {
      commentsComment{
        text
        id
      }
      postPost{
        text
      }
    }
  }
  `
}
