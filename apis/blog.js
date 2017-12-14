const {Blog} = require('../models');

const getOne = async (ctx, next) => {
  ctx.body = {
    status: 'hello getOne api'
  };
};

const list = async (ctx, next) => {
  ctx.body = {
    status: 'hello list api'
  };
};

const create = async (ctx, next) => {
  ctx.body = {
    status: 'hello create api'
  };
};

const deleteOne = async (ctx, next) => {
  ctx.body = {
    status: 'hello deleteOne api'
  };
};

module.exports = {
  getOne,
  list,
  create,
  deleteOne
};