const router = require('express').Router();
const { Comment, Post, User } = require('../models');
const { restore } = require('../models/User');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                { 
                    model: User, 
                attributes: ['username'] }
            ]
        });
        const posts = postData.map((posts) => posts.get({ plain: true }));

        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [ 
                {
                    model: Comment,
                    include: [
                        { 
                            model: User
                        },
                    ]
                },
                {
                    model: User
                }
            ]
        });

        const posts = postData.get({ plain: true });

        res.render('post', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['passowrd'] },
            include: [ { model: Post }],
        });

        const user = userData.get({ plain: true });

        res.render('dashboard', {
            user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('./dashboard');
        return;
    }
    res.render('login');
});

module.exports = router;