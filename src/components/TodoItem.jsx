import PropTypes from 'prop-types';

function TodoItem({todoName, todoDate}) {
    return (
    <div className="container">

        <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
      </div>
    )
}

TodoItem.propTypes = {
    todoName: PropTypes.string.isRequired, // Ensure todoName is a string and is required
    todoDate: PropTypes.string.isRequired, // Ensure todoDate is a string and is required
};

export default TodoItem;