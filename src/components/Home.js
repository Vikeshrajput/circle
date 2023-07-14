import { useSelector, useDispatch } from "react-redux";
import { circleActions } from "../store/circle-slice";

const Home = () => {
  const circleData = useSelector((state) => state.circle.circleData);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center">
      <div
        className={`grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 ${
          circleData.length < 2 ? `lg:grid-cols-1` : "lg:grid-cols-5"
        } gap-4 relative h-[90vh] my-2 px-6 py-5 place-items-center w-100`}
      >
        {circleData.map((circle, index) => (
          <div
            className={`rounded-full w-52 h-52 flex justify-center items-center`}
            style={{ backgroundColor: circle.color }}
            key={index}
          >
            <div className="grid place-items-center">
              <h1 className="text-xl text-center">{circle.counter}</h1>
              <h1 className="text-xl text-center">{circle.color}</h1>
              <div className="flex mt-1 gap-1">
                <button
                  className="text-lg px-1 bg-white"
                  onClick={() => dispatch(circleActions.increaseCounter(index))}
                >
                  Increase
                </button>
                <button
                  className="text-lg px-1 bg-white"
                  onClick={() => dispatch(circleActions.duplicateCircle(index))}
                >
                  Duplicate
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;