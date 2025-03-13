import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { user, logout, isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <div
          className=" w-96 m-auto mt-20 flex gap-3 p-5  shadow-2xl 
         shadow-gray-700 rounded-xl "
        >
          <div>
            <img className="rounded-full" src={user.picture} alt="" />
          </div>
          <div className="mt-2 space-y-2  ">
            <h1> Name:{user.name}</h1>
            <h1> Name:{user.email}</h1>
            <button
              onClick={() => {
                logout();
              }}
              className="bg-red-500  text-white p-2"
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

export default Profile;
