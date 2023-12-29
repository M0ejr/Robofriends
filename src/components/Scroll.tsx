import React, { ReactNode } from "react";

type ScrollProps = {
   children: ReactNode;
}

const Scroll: React.FC<ScrollProps> = (props) => {
   return (
      <div style={{
         overflowY: "scroll",
         border: "5px solid black", 
         height: "800px"
      }}>
         {props.children}
      </div>
   );
}

export default Scroll; 