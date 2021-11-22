import {Router} from 'express'
import {renderTask, createTask, renderTaskEdit, update, deleteTask, toggleDone } from '../controllers/tasks.controller'

const router = Router()

router.get("/", renderTask)

router.post("/tasks/add", createTask);


router.get("/tasks/:id/edit", renderTaskEdit );

router.post("/tasks/:id/edit", update)

router.get("/tasks/:id/delete", deleteTask )

router.get("/tasks/:id/toggleDone", toggleDone )

export default router