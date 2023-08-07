import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addmessage } from "../redux/livechatSlice";
import { generateNames, generateString } from "../utils/randomgenerator";
import ChatMessage from "./ChatMessage";

const Livechat = () => {
  const [myMessage, setMyMessage] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("API Polling");

      dispatch(
        addmessage({
          name: generateNames(),
          message: generateString(25),
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  });

  const allmessage = useSelector((store) => store.livechat.messages);

  return (
    <div className="flex flex-col">
      <div className=" h-[500px] border border-gray-400 mx-4 w-full rounded-lg overflow-y-scroll flex flex-col-reverse">
        {allmessage.map((messageObject, index) => {
          return (
            <ChatMessage
              key={index}
              name={messageObject.name}
              message={messageObject.message}
            />
          );
        })}
      </div>
      <form
        className="mx-6 p-2 w-full"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addmessage({
              name: "Prathviraj Khande",
              message: myMessage,
            })
          );
          setMyMessage("");
        }}
      >
        <input
          className="w-3/4 mr-4 border border-black rounded-sm p-2"
          onChange={(e) => {
            setMyMessage(e.target.value);
          }}
          value={myMessage}
        />
        <button className="bg-green-200 px-4 rounded-sm"> Send </button>
      </form>
    </div>
  );
};

export default Livechat;
