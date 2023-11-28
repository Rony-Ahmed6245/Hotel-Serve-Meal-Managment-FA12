

const ServeMealTable = ({item, index}) => {
    return (
       

            <tr>
                <td>{index}</td>
                <td>{item.mealTitle}</td>
                <td>{item.email}</td>
                <td><button className="btn btn-sm button1">Pending</button></td>
                <td><button className="btn btn-sm button1">Serve</button></td>

            </tr>
       
    );
};

export default ServeMealTable;