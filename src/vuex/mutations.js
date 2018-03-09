 const mutations = {
  addBread(state, item){
    state.breads.push(item);
  },
  delBread(state){
    state.breads.pop();
  }
};

 export default mutations
