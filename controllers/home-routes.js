const router = require('express').Router();
const { Comment, Post } = require('../models');
const User = require('../models/User');
const withAuth = require('../utils/auth');

router.get('/', async (req,res) => {
    try {
        const techData = await Post.findAll({
            include: [
                {
                    model: Comment,
                    attributes: [
                        
                    ],
                },
            ],
        });

        const posts = techData.map((post) =>
        post.get({ plain: true })
        );

        req.session.save(() => {
            if (req.session.countVisit) {
                req.session.countVisit++;
            } else {
                req.session.countVisit = 1;
            }

            res.render('homepage', {
                countVisit: req.session.countVisit,
            });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/post/:id', async (req,res) => {
    try {
        const techData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: Comment,
                    attributes: [ 'name' ],
                },
                {
                    model: User
                }
            ],
        });

        const post = postData.get({ plain: true });

        res.render('post', {
            post,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).res.json(err);
    }
});

router.get('/profile', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Post }],
        });

        const user = userdata.get({ plain: true });
        res.render('profile', {
            user,
            logged_in: true,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }

    res.render('login');
});

module.exports = router;