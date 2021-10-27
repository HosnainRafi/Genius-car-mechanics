import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
        console.log(data);
        axios.post('http://localhost:5000/services',data)
        .then(res => {
            if (res.data.insertedId) {
                alert('Added data successfully');
                reset();
            }
        })
    };
    return (
        <div className="add-service">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("Name", { required: true, maxLength: 20 })} placeholder="Name"/>
                <textarea {...register("description")} placeholder="Description"/>
                <input type="number" {...register("price")} placeholder="Price"/>
                <input {...register("img")} placeholder="Image URL"/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;