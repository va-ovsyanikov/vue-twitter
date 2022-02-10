// import { Request, Response } from 'express';
// import { validationResult } from 'express-validator';

// export const genericController = (model: any): any => ({

//     async fetchAll(req: Request, res: Response): Promise<any> {
//         try {
//             const errors = validationResult(req)
//             if (!errors.isEmpty()) {
//                 return res.status(400).send({
//                     errors: errors.array()
//                 })
//             } else {
//                 const data = await model.find().exec()
//                 res.status(200).send({
//                     status: 'success',
//                     data
//                 })
//             }

//         } catch (error) {
//             res.status(400).send({
//                 status: 'error',
//                 error
//             })
//         }
//     },
//     async fetchOne({ params: { id } }: Request, res: Response): Promise<void> {
//         try {
//             const data = await model.findById(id)
//             res.status(200).send({
//                 status: 'success',
//                 data
//             })
//         } catch (error) {
//             res.status(400).send({
//                 status: 'error',
//                 message: JSON.stringify(error)
//             })
//         }
//     },
//     async create(req: Request, res: Response): Promise<any> {
//         try {
//             const errors = validationResult(req)
//             if (!errors.isEmpty()) {
//                 return res.status(400).send({
//                     status: 'error',
//                     errors: errors.array()
//                 })
//             }
//             const data = await new model().save()

//             res.status(200).send({
//                 status: 'success',
//                 data
//             })

//         } catch (error) {
//             res.status(400).send({
//                 status: 'error',
//                 error
       
//             })
//         }

//     },
//     async delete({ params: { id } }: Request, res: Response): Promise<void> {
//         try {
//             const data = await model.findByIdAndDelete(id)
//             res.status(200).send({
//                 status: 'success',
//                 data
//             })
//         } catch (error) {
//             res.status(400).send({
//                 status: 'error',
//                 message: JSON.stringify(error)
//             })
//         }
//     },
//     async update(req: Request, res: Response): Promise<void> {
//         try {
//             const update = req.body.update
//             const id = req.body.id
//             const data = await model.findByIdAndUpdate(id, update, { new: true })
//             res.status(200).send({
//                 status: 'success',
//                 data
//             })
//         } catch (error) {
//             res.status(400).send({
//                 status: 'error',
//                 message: JSON.stringify(error)
//             })
//         }
//     }

// })

