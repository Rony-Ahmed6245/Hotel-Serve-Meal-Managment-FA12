

const ManageUserTable = ({item, index}) => {

    const {name, email, role} = item || {}
    return (
        <tr>
            
            <td>{index}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td><button className="btn btn-sm button1 w-20">{role}</button></td>
            <td>No Subscription</td>
        </tr>
    );
};

export default ManageUserTable;