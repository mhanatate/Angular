const mongoose = require("mongoose"),
  Task = mongoose.model("Product");

module.exports = {
    index: function(req, res) {
        Product.find({})
            .then(data => {
            res.json({ message: "Success", data: data });
            })
            .catch(err => {
            res.json({ message: "Error", error: err });
            });
        },

    new:(req, res) => {
    var product = new Product({
        title: req.body.title,
        price: req.body.price,
        imageURL: req.body.imageURL
    });
    product
        .save()
        .then(item => {
            res.json({message: "Success", item});
            })
            .catch(err => {
            res.json({message: "Fail", err});
            });
    },

    show: (req, res) => {
        Product.find({ _id: req.params.id })
            .then(data => {
            res.json({ message: "Success", data: data });
            }) 
            .catch(err => {
            res.json({ message: "Error", error: err });
            });
    },

    update: (req, res) => {
        Product.updateOne(
            { _id: req.params.id },
            {
                $set: {
                    title: req.body.title,
                    price: req.body.price,
                    imageURL: req.body.imageURL
                }
            }
        )
        .then(data => {
            res.json({ message: "Success!", data });
        })
        .catch(err => {
          console.log("Returned error", err);
          res.json({ message: "Error", error: err });
        });
    },

    delete: (req, res) => {
        Product.deleteOne({ _id: req.params.id })
            .then(data => {
                res.json({message: "Success", data});
            })
            .catch(err => {
                res.json({ message: "Error", error: err });
            });
    },
};