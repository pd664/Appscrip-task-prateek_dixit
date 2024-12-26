import React from 'react';
import '../../styles/header/headerInfo.css';

const HeaderInfo = () => {
  const infoBarData = [
    {
      id: 1,
      data: "Lorem ipsum dolor"
    },
    {
      id: 2,
      data: "Lorem ipsum dolor"
    },
    {
      id: 3,
      data: "Lorem ipsum dolor"
    },
  ];

  return (
    <div className="header-info">
      {/* For larger screens - static display */}
      <ul className="static-list">
        {infoBarData.map((entry) => (
          <li key={entry.id} className="list-item">
            <span className="item-text">
              {entry.data}
            </span>
          </li>
        ))}
      </ul>

      {/* For mobile screens - scrolling effect */}
      <div className="scroll-container">
        <div className="scroll-content">
          {[...infoBarData, ...infoBarData].map((entry, index) => (
            <div 
              key={`${entry.id}-${index}`} 
              className="scroll-item"
            >
              <span className="item-text">
                {entry.data}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderInfo;