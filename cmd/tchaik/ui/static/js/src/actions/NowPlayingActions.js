'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');

var NowPlayingConstants = require('../constants/NowPlayingConstants.js');

var NowPlayingActions = {

  reset: function() {
    AppDispatcher.handleViewAction({
      actionType:NowPlayingConstants.RESET,
    });
  },

  setDuration: function(duration) {
    AppDispatcher.handleViewAction({
      actionType: NowPlayingConstants.SET_DURATION,
      duration: duration
    });
  },

  setBuffered: function(buffered) {
    AppDispatcher.handleViewAction({
      actionType: NowPlayingConstants.SET_BUFFERED,
      buffered: buffered
    });
  },

  currentTime: function(time) {
    AppDispatcher.handleViewAction({
      actionType: NowPlayingConstants.STORE_CURRENT_TIME,
      currentTime: time,
    });
  },

  setCurrentTime: function(time) {
    AppDispatcher.handleViewAction({
      actionType: NowPlayingConstants.SET_CURRENT_TIME,
      currentTime: time,
    });
  },

  ended: function(source) {
    AppDispatcher.handleViewAction({
      actionType: NowPlayingConstants.ENDED,
      source: source,
    });
  },

  volume: function(v) {
    AppDispatcher.handleViewAction({
      actionType: NowPlayingConstants.SET_VOLUME,
      volume: v,
    });
  },

  toggleVolumeMute: function() {
    AppDispatcher.handleViewAction({
      actionType: NowPlayingConstants.TOGGLE_VOLUME_MUTE,
    });
  },

  playing: function(v) {
    AppDispatcher.handleViewAction({
      actionType: NowPlayingConstants.SET_PLAYING,
      playing: v,
    });
  },

};

module.exports = NowPlayingActions;
