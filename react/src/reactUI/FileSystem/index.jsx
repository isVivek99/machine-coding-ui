/* eslint-disable react/prop-types */
import React from "react";
import { fileStructure } from "./util";

const FileComponent = ({ name, isFolder, child, nestedLevel }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <div style={{ display: "flex", marginLeft: `${nestedLevel * 10}px` }}>
        {!!Object.keys(child).length && (
          <p
            style={{
              marginRight: "8px",
              cursor: "pointer",
            }}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? "v" : ">"}
          </p>
        )}
        <p>{name}</p>
      </div>

      {isOpen && (
        <div>
          {child.length ? (
            <div>
              {child.map((item) => (
                <FileComponent
                  key={item.name}
                  name={item.name}
                  isFolder={item.isFolder}
                  child={item.children}
                  nestedLevel={nestedLevel + 1}
                />
              ))}
            </div>
          ) : (
            <p>{child.name}</p>
          )}
        </div>
      )}
    </div>
  );
};

const Index = () => {
  return (
    <div>
      <h1>Nested FileStructure</h1>
      <div>
        <FileComponent
          name={fileStructure.name}
          isFolder={fileStructure.isFolder}
          child={fileStructure.children}
          nestedLevel={1}
        />
      </div>
    </div>
  );
};

export default Index;
