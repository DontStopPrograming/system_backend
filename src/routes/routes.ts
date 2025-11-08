import { Router } from "express";

import { createRoles, deleteRoles, findRoles, findRolesById, updateRoles } from "@controllers/rolesControllers";
import { createUser, deleteUser, findUser, findUserById, updateUser } from "@controllers/userControllers";
import { createPost, deletePost, findPost, findPostById, updatePost } from "@controllers/postControllers";

import { loginUser, registerUser } from "@controllers/auth/auth";

import { getPermission, verifyToken } from "@middlewares/auth";

import { checkRoles } from "@middlewares/roles";

export const router = Router()

// AUTH --------------------------------------------------------------------
router.post('/auth/register', registerUser)
router.post('/auth/login', loginUser)

//USER --------------------------------------------------------------------
router.get('/user', verifyToken, getPermission, findUser)

router.get('/user/:id', verifyToken, getPermission, findUserById)

router.post('/user', verifyToken, getPermission, checkRoles, createUser)

router.put('/user/:id', verifyToken, getPermission, updateUser)

router.delete('/user/:id', verifyToken, getPermission, deleteUser)



//ROLES -----------------------------------------------------------
router.get('/roles', verifyToken, getPermission, findRoles)

router.get('/roles/:id', verifyToken, getPermission, findRolesById)

router.post('/roles', verifyToken, getPermission, createRoles)

router.put('/roles/:id', verifyToken, getPermission, updateRoles)

router.delete('/roles/:id', verifyToken, getPermission, deleteRoles)


//POST -----------------------------------------------------------
router.get('/post', findPost)

router.get('/post/:id', findPostById)

router.post('/post', verifyToken, getPermission, createPost)

router.put('/post/:id', verifyToken, getPermission, updatePost)

router.delete('/post/:id', verifyToken, getPermission, deletePost)

