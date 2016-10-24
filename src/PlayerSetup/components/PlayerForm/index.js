import React, {PropTypes} from 'react';

class PlayerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.clearValue = this.clearValue.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleSave() {
    if(this.isValid())
    this.props.save({
      id: this.props.playerId,
      name: this.state.value
    });
  }

  isValid() {
    return this.state.value.length
  }

  handleRemove() {
    this.props.remove(this.props.playerId);
  }

  clearValue() {
    this.setState({
      value: ""
    })
  }

  render() {
    return (
      <div>
        <form>
          <h3>I am a single Player Form</h3>
          <input
            value={this.state.value}
            type="text"
            onChange={this.handleChange}
          />
        </form>
        <button
         className="clear"
         onClick={this.clearValue}>Clear</button>
        <button onClick={this.handleSave}>Save</button>
        <button onClick={this.handleRemove}>Remove</button>
      </div>
    );
  }
}

PlayerForm.propTypes = {
};

export default PlayerForm;
