const Content = ({quote, author}) => {
    return (
        <>
            <div id='text' className='quote'>{quote}</div>
            <div id='author' className='author'>- {author}</div>
        </>
    );
}
 
export default Content;