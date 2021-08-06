import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./Status.scss";

class Status extends Component {
  static propTypes = {
    lists: PropTypes.array
  };
  
  render = () => {
    const { lists } = this.props;
    return (
      <div className="table">
        <table>
          <thead>
            <tr className="row head">
              <td>
                <h2>Trello Title</h2>
              </td>
              <td>
              <h2>Task count</h2>
              </td>
            </tr>
          </thead>
          <tbody>
            {lists.map((list) => <tr className="row body">
                <td><h4>{list.title}</h4></td>
                <td><h4>{list.cards.length}</h4></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  const { currentBoardId, boardsById, listsById } = state;
  const listIds = boardsById[currentBoardId] ? boardsById[currentBoardId].lists : [];
  const lists = listIds.map((listId) => listsById[listId])
  return {lists};
};

export default connect(mapStateToProps)(Status);
