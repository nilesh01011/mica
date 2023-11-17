import React, { useState } from "react";

function MenuItems({ ele, collapsed, setCollapsed }) {
  const [expands, setExpands] = useState(false);
  const [expanded, setExpanded] = useState({});
  const [activeItems, setActiveItems] = useState(1);

  const toggleExpanded = (folderName) => {
    setExpanded((prev) => {
      return {
        ...prev,
        [folderName]: !prev[folderName],
      };
    });
    // console.log(folderName);
  };

  const handleExpanded = (item) => {
    setExpands(!expands);
    toggleExpanded(item);
  };

  function renderItem(item) {
    const IsExpand = expanded[item.name];

    console.log("expanded:",expanded);

    // console.log(item);

    if (item.isFolder) {
      return (
        <li>
          <div
            className={`w-full flex items-center justify-between cursor-pointer p-[8px] rounded-[4px] ${
              !expands && activeItems === item.key
                ? "bg-[#FF3E5B] text-white"
                : "text-[#858585]"
            }`}
            onClick={() => handleExpanded(item)}
          >
            <p className={`flex items-center gap-[8px]`}>
              {/* icons */}
              {item.icons && (
                <small className="flex items-center justify-center">
                  {item.icons}
                </small>
              )}
              {/* items text */}
              {collapsed === true && (
                <span className="select-none" title={ele.name}>
                  {item.name}
                </span>
              )}
            </p>
            {/* isFolder icons */}
            {collapsed === true && item.isFolder && (
              <span
                style={{
                  transform: expands && "rotate(180deg)",
                  // transition: "transform 0.3s ease-in-out",
                  color: expands && "#FF3E5B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  style={{ transform: "rotate(270deg)" }}
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  ></path>
                </svg>
              </span>
            )}
          </div>
          {/* {!collapsed && expands && (
            <ul style={{ paddingLeft: "30px", fontSize: 14 }}>
              {item.items.map(renderItem)}
            </ul>
          )} */}
          {/* {IsExpand && (
            <ul>
              {console.log(IsExpand)}
              {item.items.map((el, index) => {
                // console.log(el);
                return <li key={index}>{el.name}</li>;
              })}
            </ul>
          )} */}
        </li>
      );
    } else {
      return (
        <li>
          <div
            className={`w-full flex items-center justify-between cursor-pointer p-[8px] rounded-[4px] ${
              !expands && activeItems === item.key
                ? "bg-[#FF3E5B] text-white"
                : "text-[#858585]"
            }`}
            onClick={() => handleExpanded()}
          >
            <p className={`flex items-center gap-[8px]`}>
              {/* icons */}
              {/* ele.isFolder && collapsed === true
                      ? expands && "#ff3e5b"
                      : activeLinks === ele.link && "#ff3e5b" */}
              {item.icons && (
                <small className="flex items-center justify-center">
                  {item.icons}
                </small>
              )}
              {/* items text */}
              {collapsed === true && (
                <span className="select-none" title={item.name}>
                  {item.name}
                </span>
              )}
            </p>
            {/* isFolder icons */}
            {collapsed === true && item.isFolder && (
              <span
                style={{
                  transform: expands && "rotate(180deg)",
                  // transition: "transform 0.3s ease-in-out",
                  color: expands && "#FF3E5B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  style={{ transform: "rotate(270deg)" }}
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  ></path>
                </svg>
              </span>
            )}
          </div>
        </li>
      );
    }
  }

  return <>{renderItem(ele)}</>;
}

export default MenuItems;
