

const RequstMealTable = ({item, index}) => {
    return (

        <tr>

            <td>{index}</td>
            <td>{item.mealTitle}</td>
            <td>00</td>
            <td>00</td>
            <td className="text-yellow-500 font-bold">Pending</td>
            <td><button className="btn btn-sm button1">Cancel</button></td>

        </tr>

    );
};

export default RequstMealTable;