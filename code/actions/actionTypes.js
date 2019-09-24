import _ from 'lodash'

export const types = {
   ADD_SEARCH_TO_QUEUE: "ADD_SEARCH_TO_QUEUE",
   CLEAR_CACHE: "CLEAR_CACHE",
   DOWNLOAD_WORD_AUDIO: "DOWNLOAD_WORD_AUDIO",
   FETCH_WORD: "FETCH_WORD",
   FETCH_WORD_SUCCESS: "FETCH_WORD_SUCCESS",
   FETCH_WORD_ERROR: "FETCH_WORD_ERROR",
   INITIALIZE_STORE: "INITIALIZE_STORE",
   LOG_STORE: "LOG_STORE",
   MAX_POLY_NEW_VOICE: "MAX_POLY_NEW_VOICE",
   MAX_POLY_MODIFY_VOICE: "MAX_POLY_MODIFY_VOICE",
   MAX_POLY_KILL_VOICE: "MAX_POLY_KILL_VOICE",
   REMOVE_SEARCH_FROM_QUEUE: "REMOVE_SEARCH_FROM_QUEUE",
   REMOVE_WORD: "REMOVE_WORD",
   SEARCH_WORD: "SEARCH_WORD",
   STORE_WORD: "STORE_WORD",
   UPDATE_QUEUED_SEARCH: "UPDATE_QUEUED_ITEM",
   UPDATE_WORD: "UPDATE_WORD",
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