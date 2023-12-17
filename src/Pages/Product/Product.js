import { React, useState, useEffect } from "react";
import "./Product.css";
import { Product1 } from "../../Components/ProductComponent/ProductView";
import { Pagination } from "../../Components/ProductComponent/Paginate";
import { useDispatch, useSelector } from "react-redux";
import { acLoading } from "../../Redux/Loading";
import axios from "axios";
import { Search } from "../../Components/ProductComponent/Search";
import { acSort } from "../../Redux/Sort";
import { acSortedProduct } from "../../Redux/Sort";

export function Product() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(15);
  const [search, setSearch] = useState("");
  const sortedPR = useSelector((state) => state.sortedProduct);
  const sort = useSelector((state) => state.sort);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(acLoading(true));
    axios(`${"https://xpress.pandashop.uz/api/product"}`, {
      headers: {
        token: "qev234-23fvg24-vg24tae",
      },
    })
      .then((res) => {
        setPosts(res.data);
        dispatch(acLoading(false));
      })
      .catch((err) => {
        console.log(err);
        dispatch(acLoading(false));
      });
  }, [dispatch]);

  useEffect(() => {
    if (sort === "all") {
      dispatch(acSortedProduct(posts));
    } else if (sort === "productHighToLow") {
      const productHighToLow = posts.filter((item) => item.price);
      const sortHighToLow = productHighToLow.sort((a, b) => {
        return b.price - a.price;
      });
      dispatch(acSortedProduct(sortHighToLow));
    } else if (sort === "priceLowToHigh") {
      const priceLowToHigh = posts.filter((item) => item.price);
      const sortPriceLowToHigh = priceLowToHigh.sort((a, b) => {
        return a.price - b.price;
      });
      dispatch(acSortedProduct(sortPriceLowToHigh));
    } else if (sort === "sortByView") {
      const sortByView = posts.filter((item) => item.view);
      const sortedByView = sortByView.sort((a, b) => {
        return b.view - a.view;
      });
      dispatch(acSortedProduct(sortedByView));
    } else if (sort === "recentlyAdded") {
      const recentlyAdded = posts.filter((item) => item.id);
      const sortRecentlyAdded = recentlyAdded.sort((a, b) => {
        return b.id - a.id;
      });
      dispatch(acSortedProduct(sortRecentlyAdded));
    }
  }, [posts, sort, dispatch]);

  const soughtPost = sortedPR.filter((item) =>
    item.name.toLowerCase().includes(search)
  );
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = soughtPost.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div id="ProductPage">
        <Search setSearch={setSearch} />
        <select
          onChange={(e) => {
            dispatch(acSort(e.target.value));
          }}
        >
          <option value="all">All</option>
          <option value="productHighToLow">Price: high to low</option>
          <option value="priceLowToHigh">Price: low to high</option>
          <option value="sortByView">Sort by view</option>
          <option value="receAdded">Recently added</option>
        </select>
        <Product1 data={currentPosts} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={soughtPost.length}
          paginate={paginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}
