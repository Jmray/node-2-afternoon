module.exports = {
    //create product function
    create: (req, res) => {
        let { name, description, price, image_url } = req.body;

        req.app.get('db').create_product([name, description, price, image_url]).then(() => {
            res.status(200).send('created')

        })
        .catch(() => {
            res.status(500).send('failed');
        });
    },
    //Read product Function
    getOne: (req, res) => {
        let {id} = req.params;

        req.app.get('db').read_product([id]).then((product) => {
            res.status(200).send(product);
        })
        .catch((err) => {
            res.status(500).send('Could not get product');
            console.log(err);
        });
    },
    //Read all funciton
    getAll: (req, res) => {
        req.app.get('db').read_products().then((products) => {
            res.status(200).send(products);

        })
        .catch((err) => {
            res.status(500).send('could not get products');
            console.log(err);
        });

    },
    //Update product function
    update: (req, res) => {
        let {id} = req.params;
        let {desc} = req.query;

        req.app.get('db').update_product([desc, id]).then(() => {
            res.status(200).send('updated')
        })
        .catch(() => {
            res.status(500).send('failed');
            
        });

    },
    //delete product function
    delete: (req, res) => {
        let {id} = req.params;
        req.app.get('db').delete_product([id]).then(() => {
            res.status(200).send('failed')
        })
        .catch((err) => {
            res.status(500).send('error');
            console.log(err);
        });

    }
}