import React from "react";

import MuiPagination from "@material-ui/lab/Pagination";

interface PaginationProps {
  totalPages: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

const pagination = ({ totalPages, page, onChange }: PaginationProps) => (
  <MuiPagination
    variant="outlined"
    color="primary"
    count={totalPages}
    defaultPage={page}
    onChange={onChange}
  />
);

export default pagination;
