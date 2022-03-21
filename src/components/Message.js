function Message({id,message,name,timestamp}) {

    console.log(message,name,id)
    return (
        <>
            <p className="chat__message chat__receiver">
                <span className="chat__name">{name}</span>
                {message}
                <span className="chat__timestamp">
                    {timestamp}
                </span>
            </p>
        </>);
}

export default Message;

