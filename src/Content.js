const Content = ({quote, author}) => {
    return (
        <div>
            <div id='text'>{quote}</div>
            <div id='author'>- {author}</div>
        </div>
    );
}
 
export default Content;