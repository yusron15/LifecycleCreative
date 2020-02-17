const defaultState = {
  header: "Cabang",
  subtitle: "",
  image_background:
    "https://topgrowth.sgp1.digitaloceanspaces.com/cabang/Cabang-2.png1581935415",
  cabangList: [],
  currentLang: "ID",
  currentLangFlag: "ID"
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case "GET_CABANGS": {
      return {
        ...state,
        cabangList: action.payload
      };
    }
    case "CHANGE_LANG": {
      return {
        ...state,
        currentLang: action.payload
      };
    }
    default:
      return state;
  }
};
