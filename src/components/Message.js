function Message({ message, loginname }) {

    return (
        <>
            <p className={`chat__message ${loginname === message.name ? "chat__receiver" : ""}`}>
                <span className="chat__name">{message.name}</span>
                {message.message}
                <span className="chat__timestamp">
                    {message.timestamp}
                </span>
            </p>
        </>);
}

export default Message;

