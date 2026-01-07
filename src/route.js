import permissionRoute from "./routes/permissionRoute.js";

function route(app) {
  app.use("/api/permissions", permissionRoute);
}

export default route;
