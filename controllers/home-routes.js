const router = require('express').Router();
const { Comment, Post } = require('../models');

router.get('/', async (req,res) => {
    try {
        const techData = await Comment.findAll({
            include: [
                {
                    model: Post,
                    attributes: ['filename', 'description'],
                },
            ],
        });

        const comments = techData.map((comment) =>
        comment.get({ plain: true })
        );

        req.session.save(() => {
            if (req.session.countVisit) {
                req.session.countVisit++;
            } else {
                req.session.countVisit = 1;
            }

            res.render('homepage', {
                countVisit: req.session.countVisit;
            })
        })
    }
})