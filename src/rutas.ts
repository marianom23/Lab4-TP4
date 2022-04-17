import {Router} from 'express';
import { getEmpleados, addEmpleado, updateEmpleado, deleteEmpleado, getEmpleadoByID } from './controlador/controlador';

const router = Router();

router.get('/test', (req, res) => res.send("Hola Mundo !"));

router.get('/empleados', getEmpleados)
router.post('/empleados', addEmpleado)
router.put('/empleados', updateEmpleado)
router.delete('/empleados/:idParam', deleteEmpleado)
router.get('/empleados/:idParam', getEmpleadoByID)

export default router;