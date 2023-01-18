import Link from "next/link";
import { useRouter } from "next/router";
import React, {useState} from "react";

export default function AddProductForm(data) {
  const router = useRouter();

  let [title, setTitle] = React.useState("");
  let [description, setDescription] = React.useState("");
  let [thumbnail, setThumbnail] = React.useState("");
  const [newData, setNewData] = useState();
  let btnTitle = React.useState("Add Product");
  const [status, setStatus] = React.useState("");




  const handleSubmit=  (e) =>{
    e.preventDefault();
    const post = {
        title,
        description,
        thumbnail
    };
    let result =  fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
    }).then(res => res.json()).then((data) => {
        // to Store object to newData
        setNewData(data);
        
        //  setShow(!show)
        console.log("newData", newData)
      })
}


const goPro = () => {
  router.push({pathname: "/products", query: newData})

}



  return (
    <>
              {newData && (
                <div id="alert-additional-content-3" class="p-4 m-8 flex-col-inline  border border-green-300 rounded-lg bg-green-50 dark:bg-green-200 w-96 mx-auto" role="alert">
            <div class="flex items-center">
              <h3 class="text-lg font-medium text-green-700 dark:text-green-800">This is a success alert</h3>
            </div>

            <div class="flex mt-4">
              <button onClick={goPro} type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-green-800 dark:hover:bg-green-900">
              Go To product
              </button>
            </div>
          </div>
          )}
    <div className="flex justify-center items-center">
      <div className="text-center w-2/4">
        <form onSubmit={handleSubmit}>
          <h1 style={{ textAlign: "center", fontSize: 30, paddingBottom: 30 }}>
            {btnTitle}
          </h1>

          

          <label style={{ display: "block", textAlign: "left" }}>Title:</label>
          <input
            name="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{
              border: "2px solid #979797",
              display: "block",
              width: "100%",
              padding: "5px",
              marginBottom: "18px",
            }}
            placeholder="Enter Title"
            />

          <label style={{ display: "block", textAlign: "left" }}>
            Description:
          </label>
          <input
            name="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Description"
            required
            style={{
              border: "2px solid #979797",
              display: "block",
              width: "100%",
              padding: "5px",
              marginBottom: "18px",
            }}
            />

          <label style={{ display: "block", textAlign: "left" }}>
            Thumnial Url:
          </label>
          <input
            name="thumnial"
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
            >
            {btnTitle}
          </button>
        </form>
      </div>
    </div>
            </>
  );
}
