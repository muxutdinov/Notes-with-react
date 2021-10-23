import React from "react";
import { Button, Head } from "./style";
export const Header = ({handleToggleDarkMode}) => {
  return (
    <Head>
      <h1>Notes</h1>
      <Button onClick={()=>handleToggleDarkMode((toggle)=>(!toggle))}>Toggle Mode</Button>
    </Head>
  );
};
 