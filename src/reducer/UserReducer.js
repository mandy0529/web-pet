import {
  BUY_ITEM,
  CLOSE_MODAL,
  LOAD_USER_CLOTHES,
  LOAD_USER_DATA,
  LOGIN_AUTH,
  LOGOUT_AUTH,
  OFF_LOADING,
  OPEN_MODAL,
  SET_ERROR,
  SET_LOADING,
} from '../utils/action';

export const UserinitialState = {
  isModalOpen:{
    state:false,
    affordable:false,
  },
  user: {
    name: '',
    photo: '',
    id: '',
  },
  error: {
    state: false,
    text: '',
  },
  loading: true,
  loadUser: '',
};

const UserReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {...state, loading: true};

    case OFF_LOADING:
      return {...state, loading: false};

    case SET_ERROR:
      return {...state, error: {state: true, text: action.payload}};

    case LOGIN_AUTH:
      const {displayName, photoURL, uid} = action.payload;
      return {
        ...state,
        loading: false,
        error: {
          state: false,
          text: '',
        },
        user: {
          ...state.user,
          name: displayName,
          photo: photoURL,
          id: uid,
        },
      };

    case LOGOUT_AUTH:
      return {
        ...state,
        loading: false,
        user: {...state.user, name: '', photo: ''},
      };

    case LOAD_USER_DATA:
      return {...state, loadUser: action.payload};

    case BUY_ITEM:
      const {restPrice, newItems} = action.payload;
      return {
        ...state,
        loadUser: {
          ...state.loadUser,
          userInfo: {...state.loadUser.userInfo, money: restPrice},
          boughtItem: newItems,
        },
      };

    case LOAD_USER_CLOTHES:
      const newData = action.payload;
      return {
        ...state,
        loadUser: newData,
      };


    case OPEN_MODAL:
      const status=action.payload;
      return {...state,isModalOpen:{
        ...state.isModalOpen,state:true,affordable:status
      }};

      case CLOSE_MODAL:
      return {...state,isModalOpen:{
        ...state.isModalOpen,state:false,affordable:false
      }};


    default:
      throw new Error(`not matched any ${action.type}`);
  }
};

export default UserReducer;
