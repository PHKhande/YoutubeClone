import { USER_LOGO } from "../Constants";

const ChatMessage = ({name, message}) => {
  return (
    <div className="flex m-2 items-center ">
      <img className="w-8 h-8" alt="user" src={USER_LOGO} />
      <h1 className="font-semibold mx-2">{name}</h1>
      <p>{message}</p>
    </div>
  );
};

export default ChatMessage;
