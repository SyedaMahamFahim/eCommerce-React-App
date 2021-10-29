import React, { useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./productList.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getAdminProduct,deleteProduct } from "../../../actions/productActions";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import MetaData from "../../MetaData/MetaData";
import SideBar from "../Sidebar/Sidebar";
import { MdOutlineEditCalendar, MdDeleteSweep,MdOutlineLaunch } from "react-icons/md";
import { DELETE_PRODUCT_RESET } from "../../../constants/productConstants";

const AdminProductList = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { error, products } = useSelector((state) => state.products);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.product
  );

  const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
   const confirmation= window.confirm("Do you want to delete the product?")
   if(confirmation) {
    alert.success("Product Deleted Successfully");
    // history.push("/admin/dashboard");
    dispatch({ type: DELETE_PRODUCT_RESET });
   }

    }

    dispatch(getAdminProduct());
  }, [dispatch, alert, error, deleteError, history, isDeleted]);
  
  const columns = [
    { field: "id", headerName: "Product ID", minWidth: 200, flex: 0.5 },

    {
      field: "name",
      headerName: "Name",
      minWidth: 350,
      flex: 0.5,
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      minWidth: 150,
      flex: 0.3,
    },

    {
      field: "price",
      headerName: "Price",
      type: "number",
      minWidth: 270,
      flex: 0.5,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/admin/product/${params.getValue(params.id, "id")}`}>
              <MdOutlineEditCalendar />
            </Link>

            <button className="btn btn-danger" onClick={() =>
                deleteProductHandler(params.getValue(params.id, "id"))
              } color="white">
            <MdDeleteSweep />
            </button>
            

            <Link to={`/product/${params.id}`}>
            <MdOutlineLaunch />
            </Link>
           
              
            
          </>
        );
      },
    },
  ];

  const rows = [];

  products &&
    products.forEach((item) => {
      rows.push({
        id: item._id,
        stock: item.Stock,
        price: item.price,
        name: item.name,
      });
    });

  return (
    <>
      <MetaData title={`ALL PRODUCTS - Admin`} />

      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL PRODUCTS</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
    <h1>maham</h1>
    </>
  );
};

export default AdminProductList;
