import { Link } from "react-router-dom";

function ErrorRepo() {
  return (
    <div className="w-full mt-10 text-center">
      <Link to={"/"}>
        <button className="bg-slate-500 text-white rounded-md px-5 py-2 m-5 md:mx-20">
         Back to Home Page
        </button>
      </Link>
      <h1 className="text-red-400 text-2xl mt-10">
        Repository Does not Exist
      </h1>
    </div>
  );
}

export default ErrorRepo;
