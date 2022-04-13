import React, { useState, useEffect, PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Legend, Tooltip } from 'recharts';
import propertyService from '../../../services/property.service';
import UserService from '../../../services/UserService';
import "./Analytics.css"
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";



function Analytics() {

    const [last5Users, setLast5Users] = useState(null);

    const [nrPropertiesRent, setNrPropertiesRent] = useState(0);
    const [nrPropertiesSale, setNrPropertiesSale] = useState(0);
    const [apart, setApart] = useState(0);
    const [house, setHouse] = useState(0);
    const [studio, setStudio] = useState(0);
    const [city1, setCity1] = useState(0);
    const [city2, setCity2] = useState(0);
    const [city3, setCity3] = useState(0);
    const [city4, setCity4] = useState(0);
    const [city5, setCity5] = useState(0);

    useEffect(() => {

        UserService.getLast5UsersRegistered(setLast5Users);

        propertyService.getNrOfPropertiesForRent(setNrPropertiesRent);
        propertyService.getNrOfPropertiesForSale(setNrPropertiesSale);

        propertyService.getNrOfPropertiesByType('apartment', setApart);
        propertyService.getNrOfPropertiesByType('house', setHouse);
        propertyService.getNrOfPropertiesByType('studio', setStudio);

        propertyService.getNrOfPropertiesPerCity('Bucharest', setCity1);
        propertyService.getNrOfPropertiesPerCity('Eindhoven', setCity2);
        propertyService.getNrOfPropertiesPerCity('Amsterdam', setCity3);
        propertyService.getNrOfPropertiesPerCity('Rotterdam', setCity4);
        propertyService.getNrOfPropertiesPerCity('Utrecht', setCity5);

        console.log(city1);

    }, []);

    if (!last5Users) return null;

    const data01 = [
        { name: 'Rent', value: nrPropertiesRent },
        { name: 'Sale', value: nrPropertiesSale }
    ];

    const data = [
        {
            name: 'Apartments',
            available: apart,
            available: apart,
            amt: 2400,
        },
        {
            name: 'Houses',
            available: house,
            available: house,
            amt: 2210,
        },
        {
            name: 'Studios',
            available: studio,
            available: studio,
            amt: 2290,
        }
    ];

    const dataCities = [
        {
            name: 'Bucharest',
            number: city1,
            amt: 2400,
        },
        {
            name: 'Eindhoven',
            number: city2,
            amt: 2210,
        },
        {
            name: 'Amsterdam',
            number: city3,
            amt: 2290,
        },
        {
            name: 'Rotterdam',
            number: city4,
            amt: 2210,
        },
        {
            name: 'Utrecht',
            number: city5,
            amt: 2290,
        }
    ];

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "user",
            headerName: "User",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="agentListAgent">
                        {params.row.firstName} {params.row.lastName}
                    </div>
                );
            },
        },
        { field: "email", headerName: "Email", width: 200 },
        {
            field: "userId",
            headerName: "User Id",
            width: 120,
        },
        {
            field: "notLocked",
            headerName: "Not Locked",
            width: 150,
        },
        {
            field: "role",
            headerName: "Role",
            width: 160,
        }
    ];


    return (
        <div className="home">
            <h1>Analytics for Properties</h1>

            <div className='chartRentSaleNumber'>
                <h3 className='chartTitle'>Number of properties per type.</h3>
                <ResponsiveContainer width="90%" aspect={3}>
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="available" fill="#8884d8" />
                        <Bar dataKey="available" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>


            <div>
            <h3 className='chartTitle'>Last 5 user that registered on the website.</h3>
                <div style={{ height: 400, width: '100%', marginTop: '30px' }}>
                    <div style={{ display: 'flex', height: '100%' }}>
                        <div style={{ flexGrow: 1 }}>
                            <DataGrid
                                rows={last5Users}
                                disableSelectionOnClick
                                columns={columns}
                                pageSize={5}
                                checkboxSelection
                                height
                            />
                        </div>
                    </div>
                </div>
            </div>



            <div className='chartRentSaleNumber'>
                <h3 className='chartTitle'>Number of properties for rent and sale.</h3>
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data01}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    <Pie dataKey="value" data={data01} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                    <Tooltip />
                </PieChart>

            </div>

            <div className='chartRentSaleNumber'>
                <h3 className='chartTitle'>Number of available properties per city.</h3>
                <ResponsiveContainer width="90%" aspect={3}>
                    <BarChart
                        width={500}
                        height={300}
                        data={dataCities}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="number" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

        </div>
    )
}

export default Analytics
