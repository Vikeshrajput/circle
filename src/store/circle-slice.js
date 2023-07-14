import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    usersData: {},
    circleData: [{circle: 1, counter: 0, color: 'yellow'}]
}

const generateRandomColor = () => {
    const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return color;
  };

const circelSlice = createSlice({
    name: 'circle',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.usersData = action.payload
        },
        setCircle: (state, action) => {
            state.circle = action.payload
        },
        increaseCounter: (state, action) => {
            const index = action.payload
            const circles = [...state.circleData];
            const circleToUpdate = { ...circles[index] };
        
            circleToUpdate.counter += 1;
        
            const randomColor = generateRandomColor();
        
            circleToUpdate.color = randomColor;
        
            circles[index] = circleToUpdate;
        
            state.circleData = circles
        },
        duplicateCircle: (state, action) => {
            const index = action.payload
            const circles = [...state.circleData];
        
            if (index === circles.length - 1 && index < 9) {
              const duplicatedCircle = {
                circle: index+1,
                counter: 0,
                color: "yellow",
              };
              circles.splice(index + 1, 0, duplicatedCircle);
              state.circleData = circles
            }
          }
    }
})

export const circleActions = circelSlice.actions;

export default circelSlice.reducer

// import { useState, createContext } from "react";

// const CircleContext = createContext({
//     circle: [],
//     setCircle: () => {},
// })

// export const CircleContextProvider = (props) => {
//     const [circle, setCircle] = useState([
//         {circle: 1, counter: 0, color: 'yellow'},
//     ])
//     return (
//         <CircleContext.Provider value={{circle, setCircle}}>
//             {props.children}
//         </CircleContext.Provider>
//     )
// }

// export default CircleContext
