import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  console.error(error);

  return (
    <div id="error-page" className=" my-10 flex flex-col justify-center">
      <div className=" w-6/12 lg:w-3/12 m-auto">
        <img src="https://i.ibb.co/GWZW5T8/8030432-3828541.jpg" alt="" />
      </div>
      <p className="text-center text-xl ">Sorry, an unexpected error has occurred.</p>
      <p className=" text-center text-2xl font-bold">
        <i>{error.statusText || error.message}</i>
      </p>
      <button onClick={() => navigate(-1)} className='btn  rounded-md px-6 py-0 font-bold my-5 border-none bg-[#d1cc43] m-auto' > Go Back  </button>

    </div>
  );
}