import { Form, Input, Button, Layout, Menu } from "ant-design-vue";
import "ant-design-vue/dist/antd.less";
const setupUI = (app) => {
  app.use(Button);
  app.use(Layout);
  app.use(Menu);
  app.use(Input);
  app.use(Form);
};
export default setupUI;

