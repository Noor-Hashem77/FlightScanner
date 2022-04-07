import React from "react";

class SearchForm extends React.Component {
  state = {
    formData: {
      leavingFrom: "",
      goingTo: "",
      departDate: "",
      returnDate: "",
    },
  };

  onFromSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.formData);

    //Todo: need to clear form inputs after submitting
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFromSubmit}>
          <div className="four fields">
            <div className="field">
              <label>Leaving From</label>
              <input
                type="text"
                placeholder="Leaving From"
                value={this.state.Leavingfrom}
                onChange={(e) => {
                  this.setState({
                    formData: {
                      ...this.state.formData,
                      leavingFrom: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="field">
              <label>Going to</label>
              <input
                type="text"
                placeholder="Going to"
                value={this.state.goingTo}
                onChange={(e) => {
                  this.setState({
                    formData: {
                      ...this.state.formData,
                      goingTo: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="field">
              <label>Departing</label>
              <input
                type="date"
                className="field"
                value={this.state.departDate}
                onChange={(e) => {
                  this.setState({
                    formData: {
                      ...this.state.formData,
                      departDate: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="field">
              <label>Returning</label>
              <input
                type="date"
                className="field"
                value={this.state.returnDate}
                onChange={(e) => {
                  this.setState({
                    formData: {
                      ...this.state.formData,
                      returnDate: e.target.value,
                    },
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
    );
  }
}

export default SearchForm;
