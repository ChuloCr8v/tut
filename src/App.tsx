import { ConfigProvider } from "antd";
import "./App.css";
import AppRoutes from "./utils/AppRoutes";

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#1890ff",
          },
        }}
      >
        <AppRoutes />
      </ConfigProvider>
    </>
  );
}

export default App;
