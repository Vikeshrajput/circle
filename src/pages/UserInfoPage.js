import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const UserInfoPage = () => {
  const [users, setUsers] = useState({});

  const params = useParams();

  const id = params.id;
  console.log(id);

  const circleData = useSelector((state) => state.circle.circleData);
  const data = useSelector((state) => state.circle.usersData);

  useEffect(() => {
    let filteredData = {};

    if (data) {
      filteredData = data.users.find((user) => user.id == id);
    }

    setUsers(filteredData);
  }, [data, id]);

  console.log(users);

  return (
    <div className="flex justify-center items-center ">
      <div className="grid grid-cols-1 gap-4 relative h-[90vh] my-2 px-6 py-5 place-items-center w-100">
        <div
          className="w-72 h-72 flex justify-center items-center p-4 rounded-3xl"
          style={{ backgroundColor: circleData[id - 1]?.color }}
        >
          <div className="grid place-items-center">
            <img
              src={users?.avatar}
              className="text-xl text-center rounded-full w-24 h-24 mb-4"
              alt="user"
            />
            <div className="flex mt-1 gap-1 mb-2">
              <button className="text-xl px-3 py-1 bg-white">{users?.name}</button>
              <button className="text-xl px-3 py-1 bg-white">{users?.title}</button>
            </div>
            <div className="flex mt-1 gap-1">
                <h1 className="text-2xl text-center text-gray-700 font-bold">Email  {users?.email}</h1>
            </div>
            <div className="flex mt-1 gap-1">
                <h1 className="text-2xl text-center font-medium">Mobile : {users?.mobile}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoPage;
