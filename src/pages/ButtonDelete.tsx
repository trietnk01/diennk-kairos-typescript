import React from "react";

function ButtonDelete() {
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    console.log("e - id = ", e, id);
  };
  return (
    <div>
      <button onClick={(event: React.MouseEvent<HTMLButtonElement>) => handleDelete(event, 20)}>Delete</button>
    </div>
  );
}

export default ButtonDelete;
