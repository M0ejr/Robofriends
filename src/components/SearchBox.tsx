import React, { ChangeEvent, FC} from "react";

type SearchBoxProps = {
   searchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox: FC<SearchBoxProps> = ({ searchChange }) => {
   return (
      <div className="pa2">
         <input 
            className="pa3 ba b--green bg-lightest-blue"
            type="search" 
            placeholder="search robots" 
            onChange={searchChange}
         />
      </div>
   );
}

export default SearchBox;