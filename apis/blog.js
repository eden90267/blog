const {Blog} = require('../models');

const getOne = async (ctx, next) => {
  if (!ctx.params.entryid) {
    ctx.throw(404, 'create error');
  }

  var entryid = ctx.params.entryid;

  let blog = await Blog.findOne({_id: entryid}).lean();

  if (!blog) {
    ctx.throw(404, 'no such blog data');
  }

  ctx.body = {
    status: 'success',
    blog
  };
};

const list = async (ctx, next) => {
  let blog = await Blog.find().sort({updated: -1}).lean()
  if (!blog.length) { // 沒有資料就回報 404 狀態碼給前端
    ctx.throw(404, 'no such blog data');
  }
  ctx.body = {
    status: 'success',
    blog
  };
};

const exists = async (title) => {
  let blog = await Blog.find({title}).lean();

  return blog.length;
};

const create = async (ctx, next) => {
  if (!ctx.request.body) {
    ctx.throw(400, 'create error');
  }

  var payload = ctx.request.body;

  let exits = await exists(payload.title);
  if (exits) {
    ctx.body = {
      status: 'title exists'
    };
    return;
  }

  var data = {
    title: payload.title,
    content: payload.content
  };
  var _blog = new Blog(data);
  var error;

  _blog.save((err) => {
    error = err;
  });

  if (error) {
    ctx.throw(400, 'create error' + error);
  }

  ctx.body = {
    status: 'success',
    blog: _blog.toObject()
  }
};

const deleteOne = async (ctx, next) => {
  if (!ctx.params.entryid) {
    ctx.throw(404, 'create error');
  }

  var entryid = ctx.params.entryid;
  var error

  await Blog.remove({_id: entryid}, (err) => {
    error = err;
  });

  if (error) {
    ctx.throw(404, 'no such blog data');
  }

  ctx.body = {
    status: 'success'
  };
};

module.exports = {
  getOne,
  list,
  create,
  deleteOne
};