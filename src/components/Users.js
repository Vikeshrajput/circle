import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState({})

  const circleData = useSelector(circleData => circleData.circle.circleData);
  const data = useSelector(circleData => circleData.circle.usersData)

  useEffect(() => {
    setUsers(data)
  },[data])

  console.log(users)

  return (
    <div className="flex justify-center items-center">
      <div className={`grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 ${circleData && circleData.length < 2 ? `lg:grid-cols-1` : 'lg:grid-cols-5'} gap-4 relative h-[90vh] my-2 px-6 py-5 place-items-center w-100`}>
        {circleData && circleData.map((circle, index) => (
          <Link to={`/circle/users/${users?.users && users.users[index].id}`} key={index}>
            <div className={`rounded-full w-52 h-52 flex justify-center items-center`} style={{backgroundColor: circle.color}}>
              <div className="grid place-items-center">
                <img src={users?.users && users.users[index].avatar} className="text-xl text-center rounded-full w-12 h-12" alt="user" />
                <h1 className="text-xl text-center">Id : {users?.users && users.users[index].id}</h1>
                <div className="flex mt-1 gap-1">
                  <button className="text-sm px-1 bg-white">{users?.users && users.users[index].name}</button>
                  <button className="text-sm px-1 bg-white">{users?.users && users.users[index].title}</button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Users;
