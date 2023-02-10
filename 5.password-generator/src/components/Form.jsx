function Form(props) {
  let { handleSubmit, handleChange, handleClick, result } = props;
  return (
    <>
      <div className='form-wrapper'>
        <div className='title'>⟡⟡⟡Password Generator⟡⟡⟡</div>
        <form action='' className='form' onSubmit={handleSubmit}>
          <div className='result'>
            <input type='text' className='result' value={result} disabled />
            <button className='copy-btn' onClick={handleClick}>
              <ion-icon name='clipboard-outline'></ion-icon>
            </button>
          </div>
          <div className='options'>
            <div>Password Length</div>
            <input
              type='number'
              className='lengthInput'
              name='name'
              onChange={handleChange}
            />
          </div>
          <div className='options'>
            <div>Include Uppercase Letters</div>
            <input type='checkbox' id='1' onChange={handleChange} />
          </div>
          <div className='options'>
            <div>Include Lowercase Letters</div>
            <input type='checkbox' id='2' onChange={handleChange} />
          </div>
          <div className='options'>
            <div>Include Numbers</div>
            <input type='checkbox' id='3' onChange={handleChange} />
          </div>
          <div className='options'>
            <div>Include Symbols</div>
            <input type='checkbox' id='4' onChange={handleChange} />
          </div>
          <button className='create-btn'>Generate Password</button>
        </form>
      </div>
    </>
  );
}

export default Form;
