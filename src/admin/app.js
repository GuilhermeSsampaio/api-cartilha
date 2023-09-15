// @ts-nocheck
import favicon from ".//extensions/favicon.png";
import auth from ".//extensions/logo-embrapa.png";
import logo from ".//extensions/logo.png"

const config = {
  head:{
      favicon: favicon
  },
  menu:{
      logo: logo
  },
  auth:{
    logo: auth
  }
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
