import React, {useRef} from 'react';
import {ErrorToast, isEmpty, SuccessToast} from "../../Helper/ValidationHelper";
import {Create} from "../../APIServices/CRUDServices";
import FullScreenLoader from "../Common/FullScreenLoader";

const CreateForm = (props) => {
    let ProductName,ProductCode,Image,UnitPrice,Qty,TotalPrice,Loader=useRef();
    const SaveData = ()=>{
        let Product_Name=ProductName.value;
        let Product_Code=ProductCode.value;
        let Product_Image=Image.value;
        let Unit_Price=UnitPrice.value;
        let Product_Qty=Qty.value;
        let Total_Price=TotalPrice.value;

        if(isEmpty(Product_Name)){
            ErrorToast("Product Name is Empty")
        }else if(isEmpty(Product_Code)){
            ErrorToast("Product Code is Empty")
        }else if(isEmpty(Product_Image)){
            ErrorToast("Product Image is Empty")
        }else if(isEmpty(Unit_Price)){
            ErrorToast("Product Unit Price is Empty")
        }else if(isEmpty(Product_Qty)){
            ErrorToast("Product Quantity is Empty")
        }else if(isEmpty(Total_Price)){
            ErrorToast("Product Total Price is Empty")
        }
        else{
            Loader.classList.remove("d-none")
            Create(Product_Name,Product_Code,Product_Image,Unit_Price,Product_Qty,Total_Price)
                .then((Result)=>{
                    Loader.classList.add("d-none")
                    if(Result===true){
                        SuccessToast("Successfully saved")
                        props.history.push("/")
                    }else{
                        ErrorToast("Failed Request")
                    }
                })
        }
    }

    return (


        <div className="container">
            <div className="d-none" ref={(div)=>Loader=div}><FullScreenLoader/></div>
            <div className="row col-md-5 mt-2">
                <label>Product Name</label>
                <div className="form-floating mb-2 mt-1">
                    <input ref={(input)=>ProductName=input} type="text" className="form-control"/>

                </div>
                <label>Product Code</label>

                <div className="form-floating mt-1 mb-2">
                    <input ref={(input)=>ProductCode=input} type="text" className="form-control"/>

                </div>
                <label>Product Image</label>

                <div className="form-floating mt-1 mb-2">
                    <input ref={(input)=>Image=input} type="text" className="form-control"/>

                </div>
                <label>Product Unit Price</label>

                <div className="form-floating mt-1 mb-2">
                    <input ref={(input)=>UnitPrice=input} type="text" className="form-control"/>

                </div>
                <label>Product Quantity</label>

                <div className="form-floating mt-1 mb-2">
                    <input ref={(input)=>Qty=input} type="text" className="form-control"/>

                </div>
                <label>Product Total Price</label>

                <div className="form-floating mt-1 mb-2">
                    <input ref={(input)=>TotalPrice=input} type="text" className="form-control"/>

                </div>

            </div>
            <div className="row">
                <div className="col-md-5">
                    <button onClick={SaveData} className="btn btn-facebook">Save</button>

                </div>

            </div>
        </div>
    );
};

export default CreateForm;