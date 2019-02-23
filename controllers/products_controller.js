module.export = {
    //create product function
    create: (req, res) => {
        let { name, description, price, image_url } = req.body;

        req.app.db.create_product({name, description, price, image_url}).then(() => {
            res.status(200).send(dbResponse)

        })
        .catch((err) => {
            res.status(500).send('error');
            console.log(err);
        });
    },
    //Read product Function
    GetOne: (req, res) => {
        req.app.db.read_product().then((product) => {
            res.status(200).send(product);
        })
        .catch((err) => {
            res.status(500).send('error');
            console.log(err);
        });
    },
    //Read all funciton
    getAll: (req, res) => {
        req.app.db.read_products().then((products) => {
            res.status(200).send(products);

        })
        .catch((err) => {
            res.status(500).send('error');
            console.log(err);
        });

    },
    //Update product function
    update: (req, res) => {
        let {id} = req.params;
        let {description} = req.body;

        req.app.db.update_product({product_id: id, description,}).then(() => {
            res.status(200).send(dbResponse)
        })
        .catch((err) => {
            res.status(500).send('error');
            console.log(err);
        });

    },
    //delete product function
    delete: (req, res) => {
        let {id} = req.params;
        req.app.db.delete_product({product_id: id,}).then(() => {
            res.status(200).send(dbResponse)
        })
        .catch((err) => {
            res.status(500).send('error');
            console.log(err);
        });

    }
}