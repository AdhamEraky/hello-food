import { Component, OnInit } from '@angular/core';
import { AllCommentsGQL, IUser, IComment } from 'src/app/query.service';
import { map } from 'rxjs/operators';
import { CreateCommentGQL, deleteComment, addPost } from 'src/app/mutation.service';
import { FormGroup , FormControl } from '@angular/forms';
import {
  trigger,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  animations: [
    trigger('fade', [ 

      transition('void => *', [
        style({opacity: 0}),
        animate(1000)
      ]),

      transition('* => void', [
      animate(1000, style({opacity: 0 }))
      ]),
    ]),
  ],
})
export class QuestionsComponent implements OnInit {
  commentForm: FormGroup;
  currentUsers: IUser[];
  comment_content: string;
  removedComment:string;
  post_content: string;
  postForm: FormGroup;
  post_title:string;

  portraits :any = [
    '../../../../../assets/questions/profile.jpg',
    '../../../../../assets/questions/profile2.jpg',
   
  ];

  private comments :IComment[];
  constructor(
    private readonly addAnyPost: addPost,
    private readonly delComment: deleteComment,
    private readonly allCommentsService: AllCommentsGQL,
    private readonly createCommentService: CreateCommentGQL,
  ) { }

  ngOnInit() {
    
    this.commentForm = new FormGroup({
      comment_content: new FormControl()
   });


    this.postForm = new FormGroup({
      post_title: new FormControl(),
      post_content: new FormControl()
   });

    this.allCommentsService
      .watch()
      .valueChanges
      .pipe(
        map(response => response.data.allUsers)
      )
      .subscribe(
        users => {
          this.currentUsers = users;
          console.log(users);
        }
      );
  }
  
  deleteComment(post_id:string,comment_id:string){
    console.log(post_id,comment_id);
    this.delComment.mutate({
      post_id,
      comment_id
    },
    {
      refetchQueries: [
        {
          query: this.allCommentsService.document,
        },
      ]
    }).subscribe();
  };


  addPost(post_id:string){
    console.log(post_id);
    this.addAnyPost
    .mutate({
      post_id,
      post_title: this.postForm.value.post_title,
      post_content: this.postForm.value.post_content,
    },
    {
      refetchQueries: [
        {
          query: this.allCommentsService.document,
        },
      ]
    })
    .subscribe();
    this.postForm.reset();
  }

  createComment(post_id: string) {
    console.log(post_id);
    this.createCommentService
      .mutate(
        {
          post_id,
          comment_content: this.commentForm.value.comment_content, 
        },
        {
          refetchQueries: [
            {
              query: this.allCommentsService.document,
            },
          ]
        }
      )
      .subscribe(_ => console.log(_));
 
    this.commentForm.reset();
  }

}
