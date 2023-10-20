import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateItems = () => {
    const product=useLoaderData()
    const {brand,image,type,price,rating,text,_id}=product || {}

    return (
        <div className='bg-fuchsia-300 my-6'>
            <form onSubmit={handleAddProducts}>
           <div className='flex gap-5'>
            
               <select className='w-full  border-4' name='brand' id="cars">
               <option value="apple">Apple</option>
               <option value="sony">SONY</option>
               <option value="samsung">SAMSUNG</option>
                <option value="hp">HP</option>
                <option value="huawei">HUAWEI</option>
                <option value="lg">LG</option>
                </select>
            
               
           </div> <br />
           
           <input type="text" name='image' placeholder="IMAGE" className="input border-4 input-bordered input-sm w-full " /> <br /> <br />
           <input type="text" name='type' placeholder="TYPES" className="input border-4 input-bordered input-sm w-full " /> <br /> <br />

           <input type="text" name='price' placeholder="PRICE" className="input border-4 input-bordered input-sm w-full " /> <br /> <br />
           <input type="number" name="rating" placeholder='RATING' id="" className='input-bordered input-sm w-full input border-4 ' /> <br /><br />
           <textarea name='text' className="textarea textarea-secondary w-full" placeholder="About Products"></textarea> <br /> <br />
           

           <input type="submit" value="Add Products" className="btn btn-block" />



          
            </form>
        </div>
    );
};

export default UpdateItems;