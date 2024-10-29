import { useAuthContext } from "../../context/authContext";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const fromMe = authUser._id === message.senderId;

  return (
    <div className={`chat ${fromMe ? "chat-end" : "chat-start"} `}>
      <div className="chat-bubble text-white bg-blue-500">
        {message.message}
      </div>
      <div className="chat-footer text-xs text-white flex gap-1 items-center">
        {extractTime(message.createdAt)}
      </div>
    </div>
  );
};

export default Message;

const extractTime = (dateStr) => {
  const date = new Date(dateStr);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${hours}:${minutes}`;
};
