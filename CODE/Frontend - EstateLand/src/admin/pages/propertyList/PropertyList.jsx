import "./PropertyList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import propertyService from "../../../services/property.service";

function PropertyList() {
    const [data, setData] = useState(null);

    useEffect(() => {
        propertyService.getAllProperties(setData);
    }, []);

    if (!data) return null;

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
        propertyService.deleteProperty(id);
    };

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "property",
            headerName: "Title",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="propertyListItem">
                        {params.row.title}
                    </div>
                );
            },
        },
        { field: "rentSale", headerName: "Disponibility", width: 140 },
        { field: "squareMeters", headerName: "m2", width: 100 },
        { field: "nrRooms", headerName: "Rooms", width: 100 },
        { field: "nrBathrooms", headerName: "Bathrooms", width: 100 },
        { field: "floor", headerName: "Floor", width: 140 },
        { field: "country", headerName: "Country", width: 140 },
        { field: "city", headerName: "City", width: 140 },
        { field: "street", headerName: "Street", width: 180 },
        { field: "number", headerName: "Nr.", width: 100 },
        { field: "postcode", headerName: "Postcode", width: 140 },
        { field: "price", headerName: "Price", width: 120, },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={{
                            pathname: `/admin/property/${params.row.id}`,
                            state: { id: params.row.id }
                        }}>
                            <button className="propertyListEdit">Edit</button>
                        </Link>

                        <DeleteOutline
                            className="propertyListDelete"
                            onClick={() => {
                                const confirmBox = window.confirm(
                                    "Do you really want to delete this property?"
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
        <div className="propertyList">
            <div className="userTitleContainer">
                <h1 className="userTitle">Properties Overview</h1>
                <Link to="/admin/newproperty">
                    <button className="userAddButton">Add</button>
                </Link>
            </div>
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

export default PropertyList
