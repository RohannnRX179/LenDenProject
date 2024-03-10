import React from 'react';

const Table = ({ employees, handleEdit, handleDelete }) => {
  employees.forEach((employee, i) => {
    employee.id = i + 1;
  });

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: null,
  });

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Full Name</th>
            <th>City</th>
            <th>Email</th>
            <th>PostalCode</th>
            <th>Date of Last Update</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee, i) => (
              <tr key={employee.id}>
                <td>{i + 1}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>     
                <td>{employee.email}</td>
                <td>{(employee.salary)}</td>
                <td>{employee.date} </td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(employee.id)}
                    className="button muted-button"
                    style={{
                      backgroundColor: '#11CD25', // Darker background
                      color: '#585D59 ', // Black text
                      cursor: 'pointer',
                      transition: 'background-color 0.3s',
                    }}
                  >
                    Edit 
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(employee.id)}
                    className="button muted-button"
                    style={{
                      backgroundColor: '#D83A3A', // Lighter background
                      color: '#131111', // White text
                      cursor: 'pointer',
                      transition: 'background-color 0.3s',

                    }}
                  >
                    Delete 
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Address Record</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
