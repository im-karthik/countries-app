import React, { Component } from "react";
import { connect } from "react-redux";
import Swatch from "../../Components/Swatch/Swatch";
import logo from "../../assets/logo.jpeg";
import * as actions from "../../Redux/actions";
import * as thunks from "../../Redux/thunks";
import "./Home.scss";

class Home extends Component {
  componentDidMount() {
    this.props.onGetAllCountry();
  }

  inputChangedHandler = (event) => {
    const value = event.target.value;
    this.props.onInputChange({ ...this.props.country, searchQuery: value });
    if (value.length >= 2) {
      this.props.onGetSearchedCountry();
    } else {
      this.props.onGetAllCountry();
    }
  };
  render() {
    let swatch = <h1>Loading...</h1>;
    if (this.props.country.isError) {
      swatch = <h1>Invalid search query, please check your querystring.</h1>;
    }
    if (this.props.country.countriesData.length) {
      swatch = this.props.country.countriesData.map((data) => (
        <Swatch key={data.numericCode} data={data} />
      ));
    }

    return (
      <React.Fragment>
        <div className="toolbar">
          <img src={logo} width="100px" height="100px" />
          <input
            className="InputElement"
            type="text"
            placeholder="Search Country here..."
            value={this.props.country.searchQuery}
            onChange={(e) => this.inputChangedHandler(e)}
          />
        </div>
        {!this.props.country.isError ? (
          <h3>
            Showing {this.props.country.countriesData.length} countries...
          </h3>
        ) : null}
        <div className="Home">{swatch}</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  country: state.country,
});

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (value) => dispatch(actions.inputChanged(value)),
  onGetAllCountry: () => dispatch(thunks.getAllCountry()),
  onGetSearchedCountry: () => dispatch(thunks.getSearchedCountry()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
