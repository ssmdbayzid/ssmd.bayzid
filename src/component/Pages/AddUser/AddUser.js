import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddUser = () => {
    const navigate = useNavigate()

    const addProduct = event => {
        event.preventDefault()      
        const name = event.target.name.value;
        const image = event.target.image.value;
        const email = event.target.email.value;
        const contact = event.target.contact.value;

        const newUser = {
            name: name,
            img: image,
            email: email,
            contact: contact,           
        }

        console.log(newUser)
/*
        fetch("https://intense-ocean-10974.herokuapp.com/part",{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newProduct)
        })

        .then(res=>res.json())

        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                toast('Added New Product')
                navigate('/dashboard')
            }
        })
*/     
}

    return (
        <div className='min-h-screen  flex justify-center items-center'>
            <div className="p-6 rounded-lg border-accent border-2 text-white   pb-12 items-center w-2/5">
            <FaUserCircle className='text-7xl mx-auto mb-3'/>
                <h1 className='text-center text-accent text-3xl'>Add User</h1>

                <form onSubmit={addProduct}  className='w-full mt-6 justify-center'>

                    <input type="text" name='name' placeholder="User Name" className=" w-full text-accent  mb-3  p-3 mx-auto rounded" required/>
                    <input type="text" name='image' placeholder="Img URL" className=" w-full text-accent  mb-3  p-3 mx-auto rounded " required/>
                    <input type="email" name='email' placeholder="User email" className=" w-full text-accent mb-3  p-3 mx-auto rounded " required />
                    <input type="text" name='contact' placeholder="Contact No" className=" w-full text-accent mb-3  p-3 mx-auto rounded " required />

                    <input type="submit" className='btn w-full btn-primary' value="Add User" />
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};


export default AddUser;