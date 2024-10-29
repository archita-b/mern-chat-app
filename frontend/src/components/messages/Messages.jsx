import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";

const Messages = () => {
  const { loading, messages } = useGetMessages();

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => {
          return <Message key={message._id} message={message} />;
        })}

      {!loading && messages.length === 0 && (
        <div className="text-gray-600 text-center font-medium">
          <p>No Messages here yet.</p>
          <p>Send a message to start chatting.</p>
        </div>
      )}
    </div>
  );
};

export default Messages;
