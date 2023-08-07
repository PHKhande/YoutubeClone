import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addmessage } from "../redux/livechatSlice";
import { generateNames, generateString } from "../utils/randomgenerator";
import ChatMessage from "./ChatMessage";

const Livechat = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("API Polling");

      dispatch(addmessage({
          name: generateNames(),
          message: generateString(25)
      }))
    }, 3000);

    return () => clearInterval(interval);
  });

  const allmessage = useSelector((store) => store.livechat.messages);

  return (
    <div className=" h-[500] border border-gray-400 mx-4 w-full rounded-lg overflow-y-scroll flex flex-col-reverse">
        {allmessage.map( (messageObject, index) => {
            return (
                <ChatMessage key={index} name={messageObject.name} message={messageObject.message} />
            )
        })}
      
    </div>
  );
};

export default Livechat;
