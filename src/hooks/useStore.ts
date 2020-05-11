import React from "react";
import { useSelector } from "react-redux";
import { rootState } from "./../models/rootState";

export const useStore = () => {
  const state = useSelector((state: rootState) => state);
  return state;
};
