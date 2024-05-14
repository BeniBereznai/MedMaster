import { Controller } from "./base.controller";
import { AppDataSource } from "../data-source";
import { Slicer } from "../entity/slicer";

export class SlicerController extends Controller{
    repository = AppDataSource.getRepository(Slicer);
}