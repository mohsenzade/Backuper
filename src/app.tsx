import { Box } from "@mui/material";
import { Login } from "./pages/login";
import ReactDOM from "react-dom/client";
import React from "react";

const mainContent = document.getElementById("main-content");
const root = ReactDOM.createRoot(mainContent);

root.render(
  <React.StrictMode>
    <>
      <div style={{ fontFamily: "Vazirmatn" }}>متن تستی</div>
      <Box
        sx={{
          fontFamily: "Vazirmatn",
        }}
      >
        فونت تستی
      </Box>
    </>
  </React.StrictMode>
);
