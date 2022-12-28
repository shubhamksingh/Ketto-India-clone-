import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";
import Error from "./Error";
import { SharedComponent } from "../Components/SharedComponent";
import { StartFundraiser } from "./StartFundraiser";
import { PrivateRoute } from "../PrivateRoutes/PrivateRoute";
import { Profile } from "./Profile";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedComponent />} >
        <Route index element={<Home />} />
        <Route path="/crowdfunding" element={<div></div>} />
        <Route
          path="/newfundraiser"
          element={
            <PrivateRoute>
              <StartFundraiser />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Error />} />
      </Route>
      
    </Routes>
  );
};
