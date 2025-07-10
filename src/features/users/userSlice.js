import { createSelector, createSlice } from "@reduxjs/toolkit";
const initialState = {
  username: "",
  status: "idle",
  position: {},
  address: "",
  error: "",
};

const userSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
  // extraReducers: (builder) =>
  //   builder
  //     .addCase(fetchAddress.pending, (state) => {
  //       state.status = "loading";
  //     })
  //     .addCase(fetchAddress.fulfilled, (state, action) => {
  //       state.position = action.payload.position;
  //       state.address = action.payload.address;
  //       state.status = "idle";
  //     })
  //     .addCase(fetchAddress.rejected, (state, action) => {
  //       state.status = "error";
  //       state.error = action.error.message;
  //     }),
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;

export const getUsername = createSelector(
  [(state) => state.user.username],
  (username) => username
);

// function getPosition() {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }
// //eslint-disable-next-line
// export const fetchAddress = createAsyncThunk(
//   "user/fetchAddress",
//   async function () {
//     // 1) We get the user's geolocation position
//     const positionObj = await getPosition();
//     const position = {
//       latitude: positionObj.coords.latitude,
//       longitude: positionObj.coords.longitude,
//     };

//     // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
//     //eslint-disable-next-line
//     const addressObj = await getAddress(position);
//     const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

//     // 3) Then we return an object with the data that we are interested in
//     return { position, address };
//   }
// );
