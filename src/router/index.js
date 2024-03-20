import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { lazy } from "react";
import PageNotFound from "../component/PageNotFound";
import UserDetails from "../component/user/UserDetails";

const Adminlayout = lazy(() => import("../layout/Adminlayout"));
const AdminDashBoard = lazy(() => import("../component/admin/DashBoard"));
const UserDashBoard = lazy(() => import("../component/user/DashBoard"));
const UserLayout = lazy(() => import("../layout/UserLayout"));
const NewProducts = lazy(() => import("../component/user/NewProducts"));
const FeatureProducts = lazy(() => import("../component/user/FeatureProducts"));
const HotProducts = lazy(() => import("../component/user/HotProducts"));
const TrendingProducts = lazy(
  () => import("../component/user/TrendingProducts")
);
const AuthLayout = lazy(() => import("../layout/AuthLayout"));
const Login = lazy(() => import("../component/auth/Login"));
const SignUp = lazy(() => import("../component/auth/SignUp"));
const Profile = lazy(() => import("../component/user/profile/Profile"));

export const Routers = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<UserDashBoard />} />
        <Route path="newpoducts" element={<NewProducts />} />
        <Route path="featureproducts" element={<FeatureProducts />} />
        <Route path="hotproducts" element={<HotProducts />} />
        <Route path="trendingproducts" element={<TrendingProducts />} />
        <Route path="user/profile" element={<Profile />} />

        <Route path="userdetail/:id" element={<UserDetails />} />
      </Route>
      <Route path="/admin" element={<Adminlayout />}>
        <Route index element={<AdminDashBoard />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Route>

      <Route path="*" element={<PageNotFound />}></Route>
    </Route>
  )
);
