import React from "react";

export const NewLabel = ({ isNew }) => {
  if (isNew)
    return (
      <div className="bg-orange-500 rounded-md w-fit py-1 px-2 text-white text-xs">
        New
      </div>
    );
  return <div></div>;
};
