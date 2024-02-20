import { ChangeEvent, FC } from "react";

type SearchBoxProps = {
  searchChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox: FC<SearchBoxProps> = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 bg-white"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
