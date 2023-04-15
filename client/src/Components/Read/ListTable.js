import React, {useEffect, useState} from 'react';
import {Delete, Read} from "../../APIServices/CRUDServices";
import FullScreenLoader from "../Common/FullScreenLoader";
import {withRouter} from "react-router";
import {ErrorToast, SuccessToast} from "../../Helper/ValidationHelper";

const ListTable = (props) => {
    let [DataList, SetDataList] = useState([]);
    useEffect(() => {
        Read().then((res) => {
            SetDataList(res)
        })
    }, [])

    const DeleteItem=(id)=>{
        Delete(id).then((res)=>{
            if(res===true){
                SuccessToast("Deleted")
                props.history.push("/")
            }else{
                ErrorToast("Failed to delete")
            }
        })
    }
    const UpdateItem=(id)=>{
        props.history.push("/update/"+id)
    }

    if (DataList.length>= 0) {
        return (

            <div className="container">
                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Code</th>
                        <th>Product Image</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        DataList.map((item, i) => {
                            return (
                                <tr>
                                    <td>{item.ProductName}</td>
                                    <td>{item.ProductCode}</td>
                                    <td><img className="list-img" src={item.Image}/></td>
                                    <td>{item.UnitPrice}</td>
                                    <td>{item.Qty}</td>
                                    <td>
                                        <button onClick={DeleteItem.bind(this,item._id)} className="btn btn-danger">Delete</button>
                                        <button onClick={UpdateItem.bind(this,item._id)} className="btn btn-facebook">Update</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
else {
        return (
            <div>
                <FullScreenLoader/>
            </div>
        )
    }
};

export default withRouter(ListTable);