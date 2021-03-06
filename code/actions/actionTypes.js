import _ from 'lodash'

export const types = {
   ADD_SEARCH_TO_QUEUE: "ADD_SEARCH_TO_QUEUE",
   CLEAR_CACHE: "CLEAR_CACHE",
   CLEAR_CACHE_ERROR: "CLEAR_CACHE_ERROR",
   CLEAR_CACHE_SUCCESS: "CLEAR_CACHE_SUCCESS",
   DECREASE_SEARCH_COUNT: "DECREASE_SEARCH_COUNT",
   DOWNLOAD_WORD_AUDIO: "DOWNLOAD_WORD_AUDIO",
   DOWNLOAD_WORD_AUDIO_ERROR: "DOWNLOAD_WORD_AUDIO_ERROR",
   DOWNLOAD_WORD_AUDIO_SUCCESS: "DOWNLOAD_WORD_AUDIO_SUCCESS",
   FETCH_WORD: "FETCH_WORD",
   FETCH_WORD_SUCCESS: "FETCH_WORD_SUCCESS",
   FETCH_WORD_ERROR: "FETCH_WORD_ERROR",
   INCREASE_SEARCH_COUNT: "INCREASE_SEARCH_COUNT",
   RESET_SEARCH_COUNT: "RESET_SEARCH_COUNT",
   INITIALIZE_STORE: "INITIALIZE_STORE",
   LOG_STORE: "LOG_STORE",
   MAX_POLY_NEW_VOICE: "MAX_POLY_NEW_VOICE",
   MAX_POLY_MODIFY_VOICE: "MAX_POLY_MODIFY_VOICE",
   MAX_POLY_KILL_VOICE: "MAX_POLY_KILL_VOICE",
   MAX_MESSAGE_OUT: "MAX_MESSAGE_OUT",
   REMOVE_SEARCH_FROM_QUEUE: "REMOVE_SEARCH_FROM_QUEUE",
   REMOVE_WORD: "REMOVE_WORD",
   SEARCH_WORD: "SEARCH_WORD",
   SEARCH_WORD_SUCCESS: "SEARCH_WORD_SUCCESS",
   SEARCH_WORD_ERROR: "SEARCH_WORD_ERROR",
   SEARCH_WORD_TIMEOUT: "SEARCH_WORD_TIMEOUT",
   SET_MAX_SEARCHES: "SET_MAX_SEARCHES",
   UPDATE_QUEUED_SEARCH: "UPDATE_QUEUED_SEARCH",
   UPDATE_WORD: "UPDATE_WORD"
};

function _successTypes() {
   return _.pick(types, [

   ]);
};

function _errorTypes() {
   return _.pick(types, [

   ]);
};

export const successTypes = _successTypes();
export const errorTypes = _errorTypes();