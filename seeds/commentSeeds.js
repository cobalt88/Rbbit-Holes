
const sequelize = require('../config/connection');
const { Comment } = require('../models');

const commentData = [
  {
    title: 'BIG BOLD COMMENT TITLE!!!!',
    body: 'This is a boring comment',
    user_id: 1,
    post_id: 15,

  },
  {
    title: 'This is a comment Numero Dos!',
    body: 'Kuzco sais NO TOUCHY TOUCHY!',
    user_id: 1,
    post_id: 14,

  },
  {
    title: 'not again!!',
    body: 'Squeek squeeker mc squeek squeeken!',
    user_id: 2,
    post_id: 13,

  },
  {
    title: 'Maybe this should be generated by user data and timestamps and such',
    body: 'blargidy blarg blarg.',
    user_id: 3,
    post_id: 12,

  },
  {
    title: 'hmmmmm.............',
    body: 'Insert test comment body Whatever shall be said here is required to stay here. I mean its not like the words can just up any walk away or anything....',
    user_id: 4,
    post_id: 11,

  },
  {
    title: 'BIG BOLD COMMENT TITLE!!!!',
    body: 'This is a boring comment',
    user_id: 5,
    post_id: 10,

  },
  {
    title: 'This is a comment Numero Dos!',
    body: 'Kuzco sais NO TOUCHY TOUCHY!',
    user_id: 6,
    post_id: 9,

  },
  {
    title: 'not again!!',
    body: 'Squeek squeeker mc squeek squeeken!',
    user_id: 7,
    post_id: 8,

  },
  {
    title: 'Maybe this should be generated by user data and timestamps and such',
    body: 'blargidy blarg blarg.',
    user_id: 8,
    post_id: 7,

  },
  {
    title: 'hmmmmm.............',
    body: 'Insert test comment body Whatever shall be said here is required to stay here. I mean its not like the words can just up any walk away or anything....',
    user_id: 9,
    post_id: 6,

  },
  {
    title: 'BIG BOLD COMMENT TITLE!!!!',
    body: 'This is a boring comment',
    user_id: 10,
    post_id: 5,

  },
  {
    title: 'This is a comment Numero Dos!',
    body: 'Kuzco sais NO TOUCHY TOUCHY!',
    user_id: 1,
    post_id: 4,

  },
  {
    title: 'not again!!',
    body: 'Squeek squeeker mc squeek squeeken!',
    user_id: 2,
    post_id: 3,

  },
  {
    title: 'Maybe this should be generated by user data and timestamps and such',
    body: 'blargidy blarg blarg.',
    user_id: 3,
    post_id: 2,

  },
  {
    title: 'hmmmmm.............',
    body: 'Insert test comment body Whatever shall be said here is required to stay here. I mean its not like the words can just up any walk away or anything....',
    user_id: 4,
    post_id: 1,

  },

];

const commentSeeds = () => Comment.bulkCreate(commentData);
module.exports = commentSeeds;