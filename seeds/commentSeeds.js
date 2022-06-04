
const sequelize = require('../config/connection');
const { Comment } = require('../models');

const commentData = [
  {
    comment_title  : 'BIG BOLD COMMENT comment_title  !!!!',
    comment_content: 'This is a boring comment',
    user_id: 1,
    post_id: 15,
  },
  {
    comment_title  : 'This is a comment Numero Dos!',
    comment_content: 'Kuzco sais NO TOUCHY TOUCHY!',
    user_id: 1,
    post_id: 14,
  },
  {
    comment_title  : 'not again!!',
    comment_content: 'Squeek squeeker mc squeek squeeken!',
    user_id: 2,
    post_id: 13,
  },
  {
    comment_title  : 'Maybe this should be generated by user data and timestamps and such',
    comment_content: 'blargidy blarg blarg.',
    user_id: 3,
    post_id: 12,
  },
  {
    comment_title  : 'hmmmmm.............',
    comment_content: 'Insert test comment comment_content Whatever shall be said here is required to stay here. I mean its not like the words can just up any walk away or anything....',
    user_id: 4,
    post_id: 11,
  },
  {
    comment_title  : 'BIG BOLD COMMENT comment_title  !!!!',
    comment_content: 'This is a boring comment',
    user_id: 5,
    post_id: 10,
  },
  {
    comment_title  : 'This is a comment Numero Dos!',
    comment_content: 'Kuzco sais NO TOUCHY TOUCHY!',
    user_id: 6,
    post_id: 9,
  },
  {
    comment_title  : 'not again!!',
    comment_content: 'Squeek squeeker mc squeek squeeken!',
    user_id: 7,
    post_id: 8,
  },
  {
    comment_title  : 'Maybe this should be generated by user data and timestamps and such',
    comment_content: 'blargidy blarg blarg.',
    user_id: 8,
    post_id: 7,
  },
  {
    comment_title  : 'hmmmmm.............',
    comment_content: 'Insert test comment comment_content Whatever shall be said here is required to stay here. I mean its not like the words can just up any walk away or anything....',
    user_id: 9,
    post_id: 6,
  },
  {
    comment_title  : 'BIG BOLD COMMENT comment_title  !!!!',
    comment_content: 'This is a boring comment',
    user_id: 10,
    post_id: 5,
  },
  {
    comment_title  : 'This is a comment Numero Dos!',
    comment_content: 'Kuzco sais NO TOUCHY TOUCHY!',
    user_id: 1,
    post_id: 4,
  },
  {
    comment_title  : 'not again!!',
    comment_content: 'Squeek squeeker mc squeek squeeken!',
    user_id: 2,
    post_id: 3,
  },
  {
    comment_title  : 'Maybe this should be generated by user data and timestamps and such',
    comment_content: 'blargidy blarg blarg.',
    user_id: 3,
    post_id: 2,
  },
  {
    comment_title  : 'hmmmmm.............',
    comment_content: 'Insert test comment comment_content Whatever shall be said here is required to stay here. I mean its not like the words can just up any walk away or anything....',
    user_id: 4,
    post_id: 1,
  },

];

const commentSeeds = () => Comment.bulkCreate(commentData);
module.exports = commentSeeds;