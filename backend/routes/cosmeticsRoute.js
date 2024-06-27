import express from 'express';
import {Cosmetic} from '../models/cosmeticsModel.js';

const router = express.Router();

//Route for Save a new Cosmetic
router.post('/', async (request, response) => {
    try {
        if(
            !request.body.item ||
            !request.body.skinType ||
            !request.body.price ||
            !request.body.availableItem
        ) {
            return response.status(400).send({
                message: 'Send all required fields: item, skinType, price, availableItem',
            });
        }
        const newCosmetic = {
            item: request.body.item,
            skinType: request.body.skinType,
            price: request.body.price,
            availableItem: request.body.availableItem,
        };

        const cosmetic = await Cosmetic.create(newCosmetic);

        return response.status(201).send(cosmetic);
    }catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//Route for Get All Cosmetics from Database
router.get('/', async (request, response) => {
    try {
        const cosmetics = await Cosmetic.find({});

        return response.status(200).json({
           count: cosmetics.length,
           data: cosmetics
        });

    }catch(error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
                
        }
    });

    //Route for Get One Cosmetic from Database by id
router.get('/:id', async (request, response) => {
    try {

        const { id } = request.params;

        const cosmetic = await Cosmetic.findById(id);

        return response.status(200).json(cosmetic);

    }catch(error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
                
        }
    });

    //Route for Updata a Cosmetic
    router.put('/:id', async(request, response) => {
        try {
            if(
                !request.body.item ||
                !request.body.skinType ||
                !request.body.price ||
                !request.body.availableItem
            ) {
                return response.status(400).send({
                    message: 'Send all required fields: name, skinType, price, availableItem',
                });
            }

            const { id } = request.params;

            const result = await Cosmetic.findByIdAndUpdate(id, request.body);

            if(!result) {
                return response.status(404).json({message: 'Cosmetic not found'});
            }
            return response.status(200).send({message: 'Cosmetic updated succeccfully'});

        } catch (error) {
            console.log(error.message);
            response.status(500).send({message: error.message});
        }
    });

    //Route for Delete a Cosmetic
    router.delete('/:id', async (request, response) => {
        try {
    
            const { id } = request.params;
    
            const result = await Cosmetic.findByIdAndDelete(id);
    
            if(!result) {
                return response.status(404).json({message: 'Cosmetic not found'});
            }
            return response.status(200).send({message: 'Cosmetic deleted succeccfully'});

    
        }catch(error) {
            console.log(error.message);
            response.status(500).send({message: error.message});
                    
            }
        });

        export default router;