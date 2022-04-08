import axios from "axios";
import React, { useState, useEffect } from "react";
import "./SearchForm.css";

const SearchForm = (props) => {
  const [formData, setFormData] = useState({
    leavingFrom: "",
    goingTo: "",
    departDate: "",
    returnDate: "",
  });
  const [tempAirports, setTempAirports] = useState([]);

  // issue right now is that i am just appending all the airport results to state, need it to be such that when a person
  // deleted a letter the results they see are updates based on what is currently in the search, in other words, the tempAirports
  // should only ever be what comes back from what is currently in the leavingFrom state
  useEffect(() => {
    const searchAirport = async () => {
      // Todo: need to clean the url and add params instead of having them hard coded in URL
      const { data } = await axios.get(
        `https://www.expedia.ca/api/v4/typeahead/${formData.leavingFrom}?browser=Chrome&client=Homepage&dest=false&device=Desktop&expuserid=-1&features=nearby_airport%7Cta_hierarchy%7Cconsistent_display&format=json&guid=75cd4e91-2cff-4696-b395-b7920a939234&lob=FLIGHTS&locale=en_CA&maxresults=6&personalize=true`
      );
      const arr = [];
      data.sr.forEach((el) => {
        arr.push(el.regionNames.displayName);
      });
      setTempAirports(arr);
    };
    searchAirport();
  }, [formData.leavingFrom]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(formData);
  };

  const onChoiceClick = (airport) => {
    setFormData({ ...FormData, leavingFrom: airport });
    setTempAirports([]);
  };

  return (
    <div>
      <div className="ui segment">
        <form className="ui form" onSubmit={onFormSubmit}>
          <div className="four fields">
            <div className="field">
              <label>Leaving From</label>
              <input
                type="text"
                placeholder="Leaving From"
                value={formData.leavingFrom}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    leavingFrom: e.target.value,
                  });
                }}
              />
            </div>
            <div className="field">
              <label>Going to</label>
              <input
                type="text"
                placeholder="Going to"
                value={formData.goingTo}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    goingTo: e.target.value,
                  });
                }}
              />
            </div>
            <div className="field">
              <label>Departing</label>
              <input
                type="date"
                className="field"
                value={formData.departDate}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    departDate: e.target.value,
                  });
                }}
              />
            </div>
            <div className="field">
              <label>Returning</label>
              <input
                type="date"
                className="field"
                value={formData.returnDate}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    returnDate: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <button type="submit" className="fluid ui primary button">
            Search
          </button>
        </form>
      </div>

      {/* Autocomplete div */}
      {tempAirports.length !== 0 && (
        <div className="dataResult">
          {tempAirports.map((AirportName) => {
            return (
              <a
                className="dataItem"
                key={AirportName}
                onClick={() => onChoiceClick(AirportName)}
              >
                <p>{AirportName.slice(0, 50)}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

// class SearchForm extends React.Component {
//   state = {
//     formData: {
//       leavingFrom: "",
//       goingTo: "",
//       departDate: "",
//       returnDate: "",
//     },
//   };

//   onFormSubmit = (event) => {
//     event.preventDefault();
//     this.props.onSubmit(this.state.formData);

//     //Todo: need to clear form inputs after submitting
//   };
//   render() {
//     return (
//       <div className="ui segment">
//         <form className="ui form" onSubmit={this.onFormSubmit}>
//           <div className="four fields">
//             <div className="field">
//               <label>Leaving From</label>
//               <input
//                 type="text"
//                 placeholder="Leaving From"
//                 value={this.state.Leavingfrom}
//                 onChange={(e) => {
//                   this.setState({
//                     formData: {
//                       ...this.state.formData,
//                       leavingFrom: e.target.value,
//                     },
//                   });
//                 }}
//               />
//             </div>
//             <div className="field">
//               <label>Going to</label>
//               <input
//                 type="text"
//                 placeholder="Going to"
//                 value={this.state.goingTo}
//                 onChange={(e) => {
//                   this.setState({
//                     formData: {
//                       ...this.state.formData,
//                       goingTo: e.target.value,
//                     },
//                   });
//                 }}
//               />
//             </div>
//             <div className="field">
//               <label>Departing</label>
//               <input
//                 type="date"
//                 className="field"
//                 value={this.state.departDate}
//                 onChange={(e) => {
//                   this.setState({
//                     formData: {
//                       ...this.state.formData,
//                       departDate: e.target.value,
//                     },
//                   });
//                 }}
//               />
//             </div>
//             <div className="field">
//               <label>Returning</label>
//               <input
//                 type="date"
//                 className="field"
//                 value={this.state.returnDate}
//                 onChange={(e) => {
//                   this.setState({
//                     formData: {
//                       ...this.state.formData,
//                       returnDate: e.target.value,
//                     },
//                   });
//                 }}
//               />
//             </div>
//           </div>
//           <button type="submit" className="fluid ui primary button">
//             Search
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

export default SearchForm;
