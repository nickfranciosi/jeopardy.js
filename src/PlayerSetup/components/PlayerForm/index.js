import React, { PropTypes } from 'react';
import styled from 'styled-components';

let Wrapper = styled.div`
  background: rgb(200, 40, ${props => props.flex * 70});
`;

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
      name: this.state.value,
      score: 0
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
      <Wrapper flex={this.props.playerId}>
        <form>
          <input
            value={this.state.value}
            type="text"
            onChange={this.handleChange}
          />
        </form>
        { !this.props.playerExists && (
          <div>
            <button onClick={this.handleSave}>Save</button>
            <button className="clear" onClick={this.clearValue}>Clear</button>
          </div>
        )}
        { this.props.playerExists && <button onClick={this.handleRemove}>Edit</button> }
      </Wrapper>
    );
  }
}

PlayerForm.propTypes = {
  save: PropTypes.func,
  remove: PropTypes.func,
};

export default PlayerForm;
