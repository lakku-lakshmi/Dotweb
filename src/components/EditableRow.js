import React from 'react';

export const EditableRow=({editFormData,handleEditFormChange,handleEditSubmit,handleCancel})=>{
    return(
        <tr>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Edit username"
                    name="username"
                    value={editFormData.username}
                    onChange={handleEditFormChange}
                >
                </input>       
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Edit email"
                    name="email"
                    value={editFormData.email}
                    onChange={handleEditFormChange}
                >
                </input>       
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Edit password"
                    name="password"
                    value={editFormData.password}
                    onChange={handleEditFormChange}
                >
                </input>       
            </td>
            <td>
                <button onClick={(e)=>handleEditSubmit(e,editFormData)}>Save</button>
                <button onClick={handleCancel}>cancel</button>
            </td>
        </tr>
    );
}