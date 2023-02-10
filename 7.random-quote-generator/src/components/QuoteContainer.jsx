import Card from "./Card";
import Footer from "./Footer";

function QuoteContainer(props) {
  let { handleClick, data, color } = props;
  console.log(data);
  return (
    <>
      <div className='body' style={{ backgroundColor: color }}>
        <div className='quote-warrper'>
          <Card
            handleClick={handleClick}
            color={color}
            quote={data === "" ? "How have you been today?" : data.quote}
            author={data === "" ? "Goose9x" : data.author}
          />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default QuoteContainer;
