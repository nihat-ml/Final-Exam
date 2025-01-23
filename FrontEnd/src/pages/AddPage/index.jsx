import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaTrash } from "react-icons/fa";
import axios from "axios"
import {Helmet} from "react-helmet"




function AddPage() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/products")
            .then(res => {
                setProducts(res.data)
            })
    },[])

    function handleDelete(id){
        axios.delete(`http://localhost:3000/products/${id}`)
        .then((res)=>{
            axios.get("http://localhost:3000/products")
            .then(res => {
                setProducts(res.data)
            })
        })
    }

    const formik = useFormik({
        initialValues: {
            title: '',
            image: '',
            desc: '',
            price: '',
        },
        validationSchema: Yup.object({
            image: Yup.string()
                .required('Required'),
            title: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            desc: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            price: Yup.string()
                .required('Required'),

        }),
        onSubmit: values => {
            axios.post("http://localhost:3000/products", values)
            .then(res=>{
                axios.get("http://localhost:3000/products")
                .then(res => {
                    setProducts(res.data)
                })
            })

        },
    });
    return (
        <>
            <Helmet>
                <title>Add Page</title>
            </Helmet>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.title}
                />
                {formik.touched.title && formik.errors.title ? (
                    <div>{formik.errors.title}</div>
                ) : null}

                <label htmlFor="image">Image</label>
                <input
                    id="image"
                    name="image"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.image}
                />
                {formik.touched.image && formik.errors.image ? (
                    <div>{formik.errors.image}</div>
                ) : null}

                <label htmlFor="desc">Description</label>
                <input
                    id="desc"
                    name="desc"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.desc}
                />
                {formik.touched.desc && formik.errors.desc ? (
                    <div>{formik.errors.desc}</div>
                ) : null}

                <label htmlFor="price">Price</label>
                <input
                    id="price"
                    name="price"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.price}
                />
                {formik.touched.price && formik.errors.price ? (
                    <div>{formik.errors.price}</div>
                ) : null}

                <button type="submit">Submit</button>
            </form>


            <table style={{width:"90%", textAlign:"center", margin:"0 auto"}}>
            <tr>
                    <th>image</th>
                    <th>title</th>
                    <th>price</th>
                    <th>action</th>
                </tr>
                {products.map((product)=>(
                    
                <tr key={product._id}>
                    <td style={{width:"100px", height:"100px"}}><img  style={{width: "100px", height:"100px"}} src={product.image} alt="" /></td>
                    <td>{product.title}</td>
                    <td>${product.price}</td>
                    <td><button onClick={()=>handleDelete(product._id)}>Delete</button></td>
                </tr>
                ))}
               
            </table>
        </>
    )
}

export default AddPage
