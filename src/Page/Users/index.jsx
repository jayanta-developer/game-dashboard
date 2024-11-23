import React, { useState } from 'react';
import "./style.css";

//images
import Arrow from "../../assets/Images/Arrow.png";
import ArrowGray from "../../assets/Images/ArrowGray.png"
//data
import { UserData } from "../../assets/Data"

export default function Users({ activeMenu }) {
  console.log(UserData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const handlePageClick = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisibleButtons = 8;

    // Calculate the starting and ending page numbers for visible buttons
    const startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
    const endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          className={`paginationBtn ${currentPage === i ? "active" : ""}`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  // Calculate total pages
  const totalPages = Math.ceil(UserData.length / itemsPerPage);

  // Filter data to be displayed on the current page
  const paginatedData = UserData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  return (
    <>
      <div style={{ display: activeMenu === 0 ? "block" : "none" }} className="pageSectionBox">

        <div className="UserTabelBox">
          <div className="tabelNav">
            <p className='tabelHeader'>Table Header</p>
            <div className="searchInputBox">
              <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/search--v1.png" alt="search--v1" />
              <input type="text" placeholder='Search...' />
            </div>
          </div>
          <div className="AppTable">
            <div className="tableHeaderRow">
              <div style={{ width: "20%" }} className="tableSel tableSelStart"><p></p></div>
              <div style={{ width: "20%" }} className="tableSel tableSelStart"><p>Name</p></div>
              <div style={{ width: "20%" }} className="tableSel tableSelStart"><p>Address</p></div>
              <div style={{ width: "20%" }} className="tableSel tableSelStart"><p>Phone</p></div>
              <div style={{ width: "20%" }} className="tableSel tableSelStart"><p>Id Number</p></div>
              <div style={{ width: "20%" }} className="tableSel tableSelStart"><p>Rank</p></div>
            </div>
            {paginatedData?.map((el, i) => (
              <div key={i} className="tableRow">
                <div style={{ width: "20%" }} className="tableSel tableSelCenter">
                  <img className='tableAvatarImg' src={el.img} />
                </div>
                <div style={{ width: "20%" }} className="tableSel tableSelStart"><p>{el.name}</p></div>
                <div style={{ width: "20%" }} className="tableSel tableSelStart"><p>{el.address}</p></div>
                <div style={{ width: "20%" }} className="tableSel tableSelStart"><p>{el.Phone}</p></div>
                <div style={{ width: "20%" }} className="tableSel tableSelStart"><p>{el.IdNumber}</p></div>
                <div style={{ width: "20%" }} className="tableSel tableSelStart"><p>{el.rank}</p></div>
              </div>
            ))}
            <div className="pagination">
              <img style={{ rotate: "180deg" }} src={currentPage === 1 ? ArrowGray : Arrow} className={currentPage === 1 ? 'paginationBtn paginationBtnDisable' : "paginationBtn"} onClick={() => handlePageClick(currentPage - 1)} />
              {renderPaginationButtons()}
              <img style={{ rotate: "0deg" }} src={currentPage === totalPages ? ArrowGray : Arrow} className={currentPage === totalPages ? 'paginationBtn paginationBtnDisable' : "paginationBtn"} onClick={() => handlePageClick(currentPage + 1)} />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
