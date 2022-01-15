const router = require('express').Router();
const { Comment, Post, User } = require('../models');
const isAuth = require('../utils/auth');

// get all posts and match/join with user data
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                { 
                    model: User, 
                attributes: ['username'] }
            ]
        });

        // serialize so template can read
        const posts = postData.map(post => post.get({ plain: true }));

        // pass serialized data and session flag into template
        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
// get posts by id and match/join with comment data
router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [ 
                {
                    model: User,
                    attributes: ['username'],
                  },
                  {
                    model: Comment,
                    attributes: ['content', 'date_created'],
                    include: {
                      model: User,
                      attributes: ['username'],
                    },
                  },
                ]
              });

        const post = postData.get({ plain: true });

        res.render('post', {
            ...post,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// get access to dashboard
router.get('/dashboard', isAuth, async (req, res) => {
    try {
        // find the user that is logged in with session id
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['passowrd'] },
            include: { 
                model: Post,
                attributes: ['id', 'title', 'content'] 
             },
        });

        const user = userData.get({ plain: true });
        
        res.render('dashboard', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// if user is logged in redirect to dashboard, otherwise redirect to log in page
router.get('/login', (req, res) => {
    try {
        if (req.session.logged_in) {
            res.redirect('/dashboard');
            return;
        }
        res.render('login');
    } catch (err) {
        res.status(400).json(err)
    }
})

router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('signup');
}); 

module.exports = router;