import { useState } from "react";

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return { searchQuery, setSearchQuery };
};
