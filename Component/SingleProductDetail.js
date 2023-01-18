import { StarIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useEffect, useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SingleProductDetail({ product }) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(product.title);
  const [description, setDescription] = useState(product.description);
  let [thumbnail, setThumbnail] = useState(product.thumbnail);

  const [changedData, setChangedData] = useState();

  const changeContent = (e) => {
    e.preventDefault();
    const post = {
      title,
      description,
      thumbnail,
    };
    fetch(`https://dummyjson.com/products/${product.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => {
        setChangedData(data);
        setShow(!show);
        console.log("changedData", changedData);
      });
  };

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const onClose = () => {
    setShow(!show);
    setTitle(product.title);
    setDescription(product.description);
  };

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li key={product.title}>
              <div className="flex items-center">
                <a
                  href={product.title}
                  className="mr-2 text-sm font-medium text-gray-900"
                >
                  {product.category}
                </a>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-4 h-5 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>

            <li className="text-sm">
              <a
                href={product.id}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.title}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <img
            style={{ paddingTop: "70px" }}
              src={product.thumbnail}
              alt={product.title}
              className="w-full  object-center object-cover"
            />
            <br />
            <br />
            <div className="px-2 bottom-5 w-full">
              <button
                onClick={onClose}
                style={{
                  backgroundColor: "#eeeadf",
                  width: "100%",
                  marginBottom: "20px",
                  borderRadius: "5px",
                  padding: "13px",
                  fontSize: "20px",
                }}
                className="bg-gray-700 text-xl tracking-wide p-3.5 
                      font-normal rounded-md  left-0 px-2  w-full"
              >
                Edit
              </button>
            </div>
          </div>

          {show ? (
            <div
              className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
              id="wrapper"
              onClick={handleClose}
            >
              <div className="w-[400px] md:w-[600px] flex flex-col">
                <button
                  onClick={onClose}
                  className="text-white text-2xl font-bold place-self-end"
                >
                  
                </button>
                <div className="bg-gray-100 p-2 rounded-sm">
                  <form className="p-12 flex flex-col gap-y-3">
                    <h1 className="text-center font-bold text-3xl mb-2 text-gray-700">
                      Change Prducts' Items
                    </h1>
                    <input
                      className="bg-gray-50 border border-gray-300 rounded-md 
                            w-full p-2.5 focus:outline"
                      type="text"
                      placeholder="Type product's name"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                      className="bg-gray-50 border border-gray-300 rounded-md
                            w-full p-2.5 focus:outline"
                      type="text"
                      placeholder="Type the description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                    <input
                      name="thumbnail"
                      type="text"
                      value={thumbnail}
                      onChange={(e) => setThumbnail(e.target.value)}
                      required
                      style={{
                        border: "2px solid #979797",
                        display: "block",
                        width: "100%",
                        padding: "5px",
                        marginBottom: "18px",
                      }}
                      placeholder="Enter Thumnial Url"
                    />
                    <button
                      style={{
                        backgroundColor: "#eeeadf",
                        width: "100%",
                        marginBottom: "20px",
                        borderRadius: "5px",
                        padding: "13px",
                        fontSize: "20px",
                      }}
                      onClick={changeContent}
                      type="submit"
                    >
                      Update
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ) : null}

          {/* Product info */}
          <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-3 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-3 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
            <div className="lg:col-span-4 lg:pr-8">
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                {/* {product.title} */}
                {changedData ? changedData.title : product.title}
              </h1>
              {/* Options */}
            <div className="mt-4 lg:mt-0 lg:row-span-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900">{product.price}</p>
            </div>

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <StarIcon
                      key={product.rating}
                      className={classNames(
                        product.rating.rate > product.rating
                          ? "text-gray-900"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  </div>
                  <p className="sr-only">
                    {product.rating.rate} out of 5 stars
                  </p>
                  <a
                    href={product.id}
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {product.rating.count} reviews
                  </a>
                </div>
              </div>
              <br />
            </div>

            
            <div className="lg:col-span-4 lg:pr-8">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {/* {product.description} */}
                    {changedData
                      ? changedData.description
                      : product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
