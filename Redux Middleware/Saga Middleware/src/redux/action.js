// actions are the plain function, used to get data from react js, sends data to reducer after process, must have type key in return statement, must sync type with reducer

// main role: take data from react and pass it to reducer
// why we can't directly store in reducer: we only allow raw data in reduce which we can direclty store in the store, we cannot process data in reducer
// reducer cannot directly interact with react

// data is processed in actions

const addToCart = (data) => {
  console.log('action called', data)
  return {
    type: 'Add to Cart',
    data: '1 item',
    // if key and value both are same then it can be like this
    // data instead of data:data
  }
}
export default addToCart
