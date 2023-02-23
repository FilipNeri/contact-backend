import { Router } from "express";
import contactsRouter from "./contacts.routes";
import peopleRouter from "./people.routes";

const routes = Router();

routes.use("/contacts", contactsRouter);
routes.use("/people", peopleRouter);

export default routes;
