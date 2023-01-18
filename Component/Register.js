
export default function Register() {
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col py-10">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Contact with us</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Full Name"
          />
          <input
            type="email"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
          />
          <textarea
            className="block border border-grey-light w-full p-3 rounded mb-4"
            rows="10"
            cols="10"
            placeholder="This is message"
          ></textarea>

          <div style={{ textAlign: "center" }}>
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
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
