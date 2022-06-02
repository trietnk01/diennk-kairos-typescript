import { PATH_NAME } from "configs";
import AuthGuard from "guards/AuthGuard";
import GuestGuard from "guards/GuestGuard";
import AdminMaster from "layouts/AdminMaster";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Login = lazy(() => import("pages/Login"));
const Home = lazy(() => import("pages/Home"));
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
              path={PATH_NAME.ADMIN_HOME}
              element={
                <AuthGuard>
                  <Home />
                </AuthGuard>
              }
            />
          </Route>
          <Route path="*" element={<NoMatchFrm />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default RoutesMain;
