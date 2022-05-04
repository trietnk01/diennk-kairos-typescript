import { PATH_NAME } from "configs";
import AuthGuard from "guards/AuthGuard";
import GuestGuard from "guards/GuestGuard";
import AdminMaster from "layouts/AdminMaster";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Home = lazy(() => import("pages/Home"));
const Login = lazy(() => import("pages/Login"));
const Dashboard = lazy(() => import("pages/Dashboard"));
const NoMatchFrm = lazy(() => import("pages/NoMatchFrm"));
function RoutesMain() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route
            path={PATH_NAME.ADMIN_LOGIN}
            element={
              <GuestGuard>
                <Login />
              </GuestGuard>
            }
          />
          <Route path={PATH_NAME.ADMIN_MASTER} element={<AdminMaster />}>
            <Route path="*" element={<NoMatchFrm />} />
            <Route
              path={PATH_NAME.ADMIN_DASHBOARD}
              element={
                <AuthGuard>
                  <Dashboard />
                </AuthGuard>
              }
            />
          </Route>
          <Route path="" element={<Home />} />
          <Route path="*" element={<NoMatchFrm />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default RoutesMain;
