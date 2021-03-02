import Content from './Content';
import React from 'react';

class QuoteBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quotes: [
        {quote: 'Whatever the mind of man can conceive and believe, it can achieve.', author: 'Napoleon Hill'}, 
        {quote: 'Change your thoughts and you change your world.', author: 'Norman Vincent Peale'}, 
        {quote: 'What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.', author: 'Bob Dylan'}, 
        {quote: 'There is only one way to avoid criticism: do nothing, say nothing, and be nothing.', author: 'Aristotle'},
        {quote: 'Fall seven times and stand up eight.', author: 'Japanese Proverb'},
        {quote: 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.', author: 'Mark Twain'},
        {quote: 'The only person you are destined to become is the person you decide to be.', author: 'Ralph Waldo Emerson'},
        {quote: 'The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.', author: 'Jesse Owens'},
        {quote: 'I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.', author: 'Maya Angelou'},
        {quote: 'Eighty percent of success is showing up.', author: 'Woody Allen'},
        {quote: 'When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down ‘happy’. They told me I didn’t understand the assignment, and I told them they didn’t understand life.', author: 'John Lennon'}
      ],
      currentQuote: 'Whatever the mind of man can conceive and believe, it can achieve.',
      currentAuthor: 'Napoleon Hill'
    }

    // this.handleClick = this.handleClick.bind(this)
  }

  randomIndex(quotes) {
    let index = Math.floor(Math.random() * quotes.length)
    return index
  }

  handleClick() {
    let quotes = this.state.quotes 
    quotes = quotes[this.randomIndex(quotes)]
    let quote = quotes.quote
    let author = quotes.author
    
    this.setState({
     currentQuote: quote,
     currentAuthor: author
    })
  }

  render() {
    let quote = this.state.currentQuote
    let author = this.state.currentAuthor
    return (
      <div id='quote-box' className='wrapper'>
        <Content quote={quote} author={author}/>
        <button onClick={() => this.handleClick()} id='new-quote'>New Quote</button>
      </div>
    );
  }
}

export default QuoteBox;


// najpierw funkcjonalność, a potem to wystylujesz - TAK KAŻDY PROJEKT, ŻEBY BYŁO SZYBKO
// - w tym kolor body i jego losowanie w reakcie

// PERHAPS INCORRECT APPROACH:
// components to be done: (all in Content.js)
// - Text 
// - Author 
// - NewQuoteBtn
// - (potem na koniec) Twitter/Tumblr