import React from 'react';

const Table = () => {
    return (<div className='flex items-center my-5 justify-center mx-auto'>
    
        <div className="overflow-x-auto">
            <div className="overflow-x-auto w-full">
  <table className="table w-full text-center">
  
    <thead  className=''>
      <tr className='text-center'>
        <th className=''>Sl No</th>
        <th className=''>Name</th>
        <th>Email</th>
        <th>Contact</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    
      <tr>
        <td>1</td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>              
            </div>
          </div>
        </td>
        <td>
          zamlek@gmail.com
        </td>
        <td>+132 016515164</td>
        <th>
          <button className="btn btn-primary btn-xs mx-2">Edit</button>
          <button className="btn btn-errot btn-xs mx-2">Delete</button>
          <button className="btn btn-warning btn-xs mx-2">View</button>
        </th>
      </tr>
     
    </tbody>
    
  </table>
</div>
</div>
</div>
    );
};

export default Table;