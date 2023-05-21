import React from 'react';
import { Visibility,Edit } from '@mui/icons-material'

export const ReadOnlyRow=({val,handleEdit,handleDelete})=>{
    console.log("======",val)
    return(
        <tr>
            <td>{val.username}</td>
            <td>{val.email}</td>
            <td>{val.password}</td>
            <td>
                <Edit
                  onClick={(event)=>handleEdit(event,val)}
                />
                <button
                  onClick={(e)=>handleDelete(e,val)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

