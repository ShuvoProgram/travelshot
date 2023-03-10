import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import React, { useState } from "react";
import styles from '../../styles/SearchForm.module.css';
import { BsFillCalendarCheckFill } from "react-icons/bs";

const SearchForm = () => {
     const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

//   const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

//   const handleSearch = () => {
//     navigate("/hotels", { state: { destination, date, options } });
//   };
    return (
        <div className={styles.headerSearch}>
              <div className={styles.headerSearchItem}>
                {/* <FontAwesomeIcon icon={faBed} className="headerIcon" /> */}
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className={styles.headerSearchInput}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className={styles.headerSearchItem}>
                {/* <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" /> */}
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className={styles.headerSearchText}
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className={styles.date}
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className={styles.headerSearchItem}>
                {/* <FontAwesomeIcon icon={faPerson} className="headerIcon" /> */}
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className={styles.headerSearchText}
                >{`${options.adult} adult ?? ${options.children} children ?? ${options.room} room`}</span>
                {openOptions && (
                  <div className={styles.options}>
                    <div className={styles.optionItem}>
                      <span className={styles.optionText}>Adult</span>
                      <div className={styles.optionCounter}>
                        <button
                          disabled={options.adult <= 1}
                          className={styles.optionCounterButton}
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className={styles.optionCounterNumber}>
                          {options.adult}
                        </span>
                        <button
                          className={styles.optionCounterButton}
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className={styles.optionItem}>
                      <span className={styles.optionText}>Children</span>
                      <div className={styles.optionCounter}>
                        <button
                          disabled={options.children <= 0}
                          className={styles.optionCounterButton}
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className={styles.optionCounterNumber}>
                          {options.children}
                        </span>
                        <button
                          className={styles.optionCounterButton}
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className={styles.optionItem}>
                      <span className={styles.optionText}>Room</span>
                      <div className={styles.optionCounter}>
                        <button
                          disabled={options.room <= 1}
                          className={styles.optionCounterButton}
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className={styles.optionCounterNumber}>
                          {options.room}
                        </span>
                        <button
                          className={styles.optionCounterButton}
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className={styles.headerSearchItem}>
                <button className={styles.headerBtn}>
                  Search
                </button>
              </div>
        </div>
    );
};

export default SearchForm;