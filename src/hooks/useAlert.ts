import React from "react";
import { SnackbarProvider, VariantType, useSnackbar } from "notistack";

enum Direction {
  info = "info",
  error = "error",
  success = "success",
}

const useAlert = (
  msg: string,
  variant: Direction,
  autoHideDuration?: number
) => {
  const { enqueueSnackbar } = useSnackbar();

  enqueueSnackbar(msg, {
    variant,
    autoHideDuration,
  });
};

export default useAlert;
