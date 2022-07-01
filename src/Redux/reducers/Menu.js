const InitialMenu = [];

const Menu = (State = InitialMenu, Action) => {
  switch (Action.type) {
    case "SET_MENU": {
      const newMenu = Action.payload;
      return newMenu;
    }
    default:
      return State;
  }
};

export default Menu;
