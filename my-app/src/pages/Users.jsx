export function Users(props) {
  const users = props.data;
  console.log(props);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>User name</th>
            <th>User Role</th>
            <th>User Id</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td> {user.role} </td>
              <td> {user.id} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
