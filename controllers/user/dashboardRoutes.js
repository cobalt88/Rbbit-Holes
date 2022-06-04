const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');
const sequelize = require('../../config/connection');


router.get('/', withAuth, async(req, res) => {
  try {
    const userId = req.session.user_id;
    const userData = await User.findByPk(userId, {
      attributes: ['username', 'email'],
      include: [
        {
          model: Comment,
          where: user_id = userId,
          attributes: ['comment_id', 'comment_title', 'comment_content'],
        },
        {
          model: Post,
          where: user_id = userId,
          attributes: ['post_title', 'post_content',]
        }
      ]
    })
    const username = userData.dataValues.username;
    const posts = userData.posts.map(post => post.get({ plain: true }));
    const comments = userData.comments.map(comment => comment.get({ plain: true }));
    
    res.status(200).render('user-page', {
      userData,
      username,
      posts,
      comments,
      pageTitle: `${username}'s Dashboard`,
      loggedIn: true,
    });
    
  } catch (err) {
    res.status(500).json(`Unexpected error encountered in Test User Route ${err}`)
  }
})



module.exports = router;