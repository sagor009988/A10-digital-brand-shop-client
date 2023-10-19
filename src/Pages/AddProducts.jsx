import React from 'react';

const AddProducts = () => {

    const handleAddProducts=e=>{
        e.preventDefault()
        const form=e.target;
        const brand=form.brand.value;
        const image=form.image.value;
        const type=form.type.value;
        const price=form.price.value;
        const rating=form.rating.value;
        const text=form.text.value;
     
     const product={brand,image,type,price,rating,text}
    //  send value to server
    fetch('http://localhost:5000/product',{
        method:"POST",
        headers:{
            "content-type" : "application/json"
        },
        body:JSON.stringify(product)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })

    }

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

export default AddProducts;