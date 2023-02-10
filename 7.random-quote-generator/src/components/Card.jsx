function Card(props) {
  let { handleClick, quote, author, color } = props;
  return (
    <div className='Card'>
      <p>{quote}</p>
      <div className='author'>-{author}-</div>
      <button onClick={handleClick} style={{ backgroundColor: color }}>
        New Quote
      </button>
    </div>
  );
}

export default Card;
