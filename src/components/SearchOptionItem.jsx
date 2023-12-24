const SearchOptionItem = ({ title }) => {
  return <button className={`option option_${title}`}>{title}</button>;
};

export default SearchOptionItem;
