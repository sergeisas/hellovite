import PropTypes from 'prop-types';

const TodoTable = ({ todos, onDelete }) => {
  return (
      <table>
          <thead>
              <tr>
                  <th>Description</th>
                  <th>Date</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tbody>
              {todos.map((todo, index) => (
                  <tr key={index}>
                      <td>{todo.description}</td>
                      <td>{todo.date}</td>
                      <td>
                          <button onClick={() => onDelete(index)}>Delete</button>
                      </td>
                  </tr>
              ))}
          </tbody>
      </table>
  );
}
  
  TodoTable.propTypes = {
    todos: PropTypes.array.isRequired, // Lisää validointi tähän
    onDelete: PropTypes.array.isRequired
  };

  export default TodoTable;