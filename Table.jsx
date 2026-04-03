import React from 'react'

export default function Table() {
  return (
    <div className='container'>
        <div className="card">

        <h1>Table Component</h1>
        <table border="1">
            <tr>
                <th>Name</th>
                <th>Age</th>
            </tr>
            <tr>
                <td>Alice</td>
                <td>30</td>
            </tr>
            <tr>
                <td>Bob</td>
                <td>25</td>
            </tr>
        </table>
        </div>
    </div>
  )
}