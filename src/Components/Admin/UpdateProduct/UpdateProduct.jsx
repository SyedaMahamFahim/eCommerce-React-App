import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, updateProduct , getProductDetails,} from "../../../actions/productActions";
import { useAlert } from "react-alert";
import MetaData from "../../MetaData/MetaData";
import SideBar from "../Sidebar/Sidebar";
import { UPDATE_PRODUCT_RESET } from "../../../constants/productConstants";
const UpdateProduct = ({ history, match }) => {
    const dispatch = useDispatch();
    const alert = useAlert();
  
    const { error, product } = useSelector((state) => state.productDetails);
  
    const {
      loading,
      error: updateError,
      isUpdated,
    } = useSelector((state) => state.product);
  
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [Stock, setStock] = useState(0);
    const [images, setImages] = useState([]);
    const [oldImages, setOldImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);
  
    const categories = [
      "Laptop",
      "Footwear",
      "Bottom",
      "Tops",
      "Attire",
      "Camera",
      "SmartPhones",
    ];
  
    const productId = match.params.id;
  
    useEffect(() => {
      if (product && product._id !== productId) {
        dispatch(getProductDetails(productId));
      } else {
        setName(product.name);
        setDescription(product.description);
        setPrice(product.price);
        setCategory(product.category);
        setStock(product.Stock);
        setOldImages(product.images);
      }
      if (error) {
        alert.error(error);
        dispatch(clearErrors());
      }
  
      if (updateError) {
        alert.error(updateError);
        dispatch(clearErrors());
      }
  
      if (isUpdated) {
        alert.success("Product Updated Successfully");
        history.push("/admin/products");
        dispatch({ type: UPDATE_PRODUCT_RESET });
      }
    }, [
      dispatch,
      alert,
      error,
      history,
      isUpdated,
      productId,
      product,
      updateError,
    ]);
  
    const updateProductSubmitHandler = (e) => {
      e.preventDefault();
  
      const myForm = new FormData();
  
      myForm.set("name", name);
      myForm.set("price", price);
      myForm.set("description", description);
      myForm.set("category", category);
      myForm.set("Stock", Stock);
  
      images.forEach((image) => {
        myForm.append("images", image);
      });
      dispatch(updateProduct(productId, myForm));
    };
  
    const updateProductImagesChange = (e) => {
      const files = Array.from(e.target.files);
  
      setImages([]);
      setImagesPreview([]);
      setOldImages([]);
  
      files.forEach((file) => {
        const reader = new FileReader();
  
        reader.onload = () => {
          if (reader.readyState === 2) {
            setImagesPreview((old) => [...old, reader.result]);
            setImages((old) => [...old, reader.result]);
          }
        };
  
        reader.readAsDataURL(file);
      });
    };
  
  return (
    <>
      <MetaData title="Create Product" />
      <div className="dashboard mt-5">
        <SideBar />
        <div className="newProductContainer">
          <h1 className="text-center">Create Product</h1>
          <div className="container mt-5">
            <div className="row">
              <form
                onSubmit={updateProductSubmitHandler}
                encType="multipart/form-data"
              >
                <div
                  className="mb-3 pe-3 ps-3"
                  style={{ display: "inline-block", width: "50%" }}
                >
                  <label for="exampleFormControlInput1" className="form-label">
                    Product Name
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Product Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div
                  className="mb-3 pe-3 ps-3"
                  style={{ display: "inline-block", width: "50%" }}
                >
                  <label for="exampleFormControlInput1" className="form-label">
                    Price
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    value={price}
                    placeholder="Price"
                    required
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="mb-3 pe-3 ps-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    cols="30"
                    rows="5"
                  ></textarea>
                </div>
                <div
                  className="mb-3 pe-3 ps-3"
                  style={{ display: "inline-block", width: "50%" }}
                >
                  <label for="exampleFormControlInput1" className="form-label">
                    Categories
                  </label>

                  <select
                  value={category}
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">Choose Category</option>
                    {categories.map((cate) => (
                      <option key={cate} value={cate}>
                        {cate}
                      </option>
                    ))}
                  </select>
                </div>
                <div
                  className="mb-3 pe-3 ps-3"
                  style={{ display: "inline-block", width: "50%" }}
                >
                  <label for="exampleFormControlInput1" className="form-label">
                    Price
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Stock"
                    required
                    value={Stock}
                    onChange={(e) => setStock(e.target.value)}
                  />
                </div>
                <div className="mb-3 pe-3 ps-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Images
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    name="avatar"
                    multiple
                    onChange={updateProductImagesChange}
                  />
                </div>
                <div id="createProductFormImage">
              {oldImages &&
                oldImages.map((image, index) => (
                  <img key={index} src={image.url} alt="Old Product Preview" />
                ))}
            </div>
                <div id="createProductFormImage">
                  {imagesPreview.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt="Product Preview"
                      width="200px"
                      height="auto"
                      className="mb-3 pe-3 ps-3 "
                    />
                  ))}
                </div>
                <div className="mb-3 pe-3 ps-3 mt-5">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading ? true : false}
                  >
                    {loading ? "Updating" : "Update "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProduct;
