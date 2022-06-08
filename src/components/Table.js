import React, { useState, useEffect } from 'react'
import './Table.css'

const Table = ({ data }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [order, setOrder] = useState('ASC')
    const [initialData, setInitialData] = useState(data)

    useEffect(() => {
        setInitialData(data)
    }, [data])

    const sorting = column => {
        if (order === 'ASC') {
            const sorted = [...initialData].sort((a, b) => a[column].toLowerCase() > b[column].toLowerCase() ? 1 : -1)
            setInitialData(sorted)
            setOrder('DSC')
        }

        if (order === 'DSC') {
            const sorted = [...initialData].sort((a, b) => a[column].toLowerCase() > b[column].toLowerCase() ? -1 : 1)
            setInitialData(sorted)
            setOrder('ASC')
        }
    }

    return (
        <>
            <table>
                <tbody>
                <tr>
                    <th onClick={() => sorting("name")}>First name</th>
                    <th onClick={() => sorting("name")}>Last name</th>
                    <th onClick={() => sorting("email")}>Email</th>
                    <th onClick={() => sorting("address")}>Address</th>
                    <th onClick={() => sorting("phone")}>Phone number</th>
                </tr>
                    {initialData.filter(value => {
                        if(searchQuery === "") {
                            return value
                        } else if (
                            value.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            value.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            value.address.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            value.address.street.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            value.phone.replace(/\D/g, "").includes(searchQuery)
                        ) {
                            return value
                        }
                    }).map(user => (
                        <tr key={user.id}>
                            <td>{user.name.split(' ')[0]}</td>
                            <td>{user.name.split(' ')[1]}</td>
                            <td>
                                <a href={`mailto:${user.email}`}>{user.email}</a>
                            </td>
                            <td>{user.address.city}, {user.address.street}</td>
                            <td>{user.phone.replace(/\D/g, "")}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </>
    )
}

export default Table
