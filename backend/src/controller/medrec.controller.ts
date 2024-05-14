import { Controller } from "./base.controller";
import { AppDataSource } from "../data-source";
import { Medrec } from "../entity/medrec";

export class MedrecController extends Controller{
    repository = AppDataSource.getRepository(Medrec);
}