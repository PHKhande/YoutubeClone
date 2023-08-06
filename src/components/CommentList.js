import { USER_LOGO } from "../Constants";


const Comment = ({ data }) => {
  const { name, comment } = data;

  return (
    <div className="flex m-2 bg-gray-200 rounded-md p-2">
      <img className="w-8 h-8 mt-2" alt="user" src={USER_LOGO} />
      <div className="mx-2">
        <p className="font-semibold">{name}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) =>
  comments.map((comment, index) => (
    <div key={index} className="ml-5">
      <Comment data={comment} />
      <div className="ml-5 border border-l-black">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));

export default CommentList;
