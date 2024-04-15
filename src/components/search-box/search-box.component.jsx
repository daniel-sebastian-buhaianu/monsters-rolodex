import './search-box.styles.css';

function SearchBox(props) {
  return (
    <input
      className='search-box'
      type='search'
      placeholder={props.placeholder}
      onChange={props.onChangeHandler}
    />
  );
}

export default SearchBox;
