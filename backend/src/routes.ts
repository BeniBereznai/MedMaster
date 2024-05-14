import express = require('express');
import { PatientController } from './controller/patient.controller';
import { SlicerController } from './controller/slicer.controller';
import { MedrecController } from './controller/medrec.controller';

export function getRoutes(){
    const router = express.Router();

    const patientController = new PatientController();
    const slicerController = new SlicerController();
    const medrecController = new MedrecController();

    router.get('/patient', patientController.getAll);
    router.get('/patient/:taj', patientController.getOne);
    router.post('/patient', patientController.create);
    router.put('/patient/:taj', patientController.update);
    router.delete('/patient/:taj', patientController.delete);

    router.get('/slicer', slicerController.getAll);
    router.get('/slicer/:taj', slicerController.getOne);
    router.post('/slicer', slicerController.create);
    router.put('/slicer/:taj', slicerController.update);
    router.delete('/slicer/:taj', slicerController.delete);

    router.get('/medrec', medrecController.getAll);
    router.get('/medrec/:taj', medrecController.getOne);
    router.post('/medrec', medrecController.create);
    router.put('/medrec/:taj', medrecController.update);
    router.delete('/medrec/:taj', medrecController.delete);
    
    return router;
}