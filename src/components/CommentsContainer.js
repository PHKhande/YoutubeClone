import CommentList from "./CommentList";

const commentsData = [
  {
    name: "First Last",
    comment: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    replies: [],
  },
  {
    name: "First Last",
    comment: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    replies: [
      {
        name: "First Last",
        comment: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        replies: [
          {
            name: "First Last",
            comment: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            replies: [
              {
                name: "First Last",
                comment: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                replies: [
                  {
                    name: "First Last",
                    comment: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                    replies: [],
                  },
                ],
              },
            ],
          },
          {
            name: "First Last",
            comment: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            replies: [],
          },
        ],
      },
      {
        name: "First Last",
        comment: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        replies: [],
      },
    ],
  },
  {
    name: "First Last",
    comment: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    replies: [],
  },
  {
    name: "First Last",
    comment: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    replies: [],
  },
  {
    name: "First Last",
    comment: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    replies: [],
  },
];



const CommentsContainer = () => {
  return (
    <div className="my-5 w-2/3">
      <h1 className="font-bold text-xl"> Comments </h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
