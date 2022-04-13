import "../userList/UserList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ViewingsService from "../../../services/ViewingsService";
import Moment from 'moment';

function Viewings() {
  const [data, setData] = useState(null);

  useEffect(() => {
    ViewingsService.getAllViewings(setData);
  }, []);

  if (!data) return null;

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
    ViewingsService.deleteViewing(id);
  };
  console.log(data);


  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "userEmail",
      headerName: "User Email",
      width: 200,
    },
    { field: "userPhone", headerName: "User Phone", width: 200 },
    {
      field: "Date",
      headerName: "Date",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="userListUser">
              {Moment(params.row.date).format('d MMM YYYY')}
          </div>
      );
        
    },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={{
              pathname: `/admin/viewings/${params.row.id}`,
              state: { id: params.row.id }
            }}>
              <button className="userListEdit">View More</button>
            </Link>
            <DeleteOutline
              className="propertyListDelete"
              onClick={() => {
                const confirmBox = window.confirm(
                  "Do you really want to delete this viewing?"
                )
                if (confirmBox === true) {
                  handleDelete(params.row.id)
                }
              }}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}

export default Viewings;