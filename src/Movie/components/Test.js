// import React, { useEffect, useState } from "react";
// import styled from "styled-components";

// const Test = () => {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   const handleIncrement = () => {
//     setCount(count + 1);
//   };

//   const handleText = (e) => {
//     setText(e.target.value);
//   };

//   useEffect(() => {
//     console.log("useEffect runs");
//     document.title = `count ${count} times`;
//   }, [count]);

//   return (
//     <Wrapper>
//       <h1>incremented value {count}</h1>
//       <button onClick={handleIncrement}>Increment</button>
//       <input type="text" onChange={handleText} />
//       <p>{text}</p>
//     </Wrapper>
//   );
// };
// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 400px;
//   gap: 3rem;
//   margin: 3rem;
// `;
// export default Test;
