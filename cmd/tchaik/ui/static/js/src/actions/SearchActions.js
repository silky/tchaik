'use strict';

var WebsocketAPI = require('../utils/WebsocketAPI.js');

var AppDispatcher = require('../dispatcher/AppDispatcher.js');

var SearchConstants = require('../constants/SearchConstants.js');

var SearchActions = {

  search: function(input) {
    WebsocketAPI.send({
      action: SearchConstants.SEARCH,
      data: input,
    });

    AppDispatcher.handleViewAction({
      actionType: SearchConstants.SEARCH,
      input: input,
    });
  },

};

module.exports = SearchActions;
